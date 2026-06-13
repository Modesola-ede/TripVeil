import { Ionicons } from "@expo/vector-icons";
import * as Location from 'expo-location';
import { Stack, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Linking, Platform, Text, TouchableOpacity, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../Styles/main';

export default function LocationSharedScreen() {
  const navigator = useRouter();

  const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);
  const [address, setAddress] = useState<string>("Fetching address...");
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const label = "User's Live Location";

  useEffect(() => {
    let locationSubscription: Location.LocationSubscription | null = null;

    const startTracking = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          setLoading(false);
          return;
        }

        locationSubscription = await Location.watchPositionAsync(
          {
            accuracy: Location.Accuracy.High,
            distanceInterval: 10,
          },
          async (newLocation) => {
            setLocation(newLocation.coords);
            
            try {
              const geocode = await Location.reverseGeocodeAsync({
                latitude: newLocation.coords.latitude,
                longitude: newLocation.coords.longitude,
              });

              if (geocode && geocode.length > 0) {
                const place = geocode[0];
                const stateName = place.region || place.city || "Unknown State";
                const countryName = place.country || "Unknown Country";
                setAddress(`${stateName}, ${countryName}`);
              }
            } catch (geoError) {
              console.error("Geocoding failed", geoError);
            }

            setLoading(false);
          }
        );
      } catch (error) {
        setErrorMsg('Error fetching location updates');
        setLoading(false);
      }
    };

    startTracking();

    return () => {
      if (locationSubscription) {
        locationSubscription.remove();
      }
    };
  }, []);

  const openInMaps = () => {
    const lat = location ? location.latitude : 6.5244;
    const lon = location ? location.longitude : 3.3792;

    const url = Platform.select({
      ios: `maps:0,0?q=${label}@${lat},${lon}`,
      android: `geo:0,0?q=${lat},${lon}(${label})`,
      default: `https://www.google.com/maps/search/?api=1&query=${lat},${lon}`
    });

    Linking.openURL(url).catch((err) => console.error("Couldn't load maps", err));
  };

  const defaultLatitude = location ? location.latitude : 6.5244;
  const defaultLongitude = location ? location.longitude : 3.3792;

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />

      <View style={styles.arrowforbackandcreatenewtripcontainer}>
        <Ionicons 
          name="arrow-back-outline" 
          size={24}
          paddingTop={7}
          paddingLeft={7}
          style={styles.arrowforback}
          onPress={() => { navigator.back(); }}
        />
      </View>

      <Text style={[styles.designforcreateanddetailsoftriptriptext, { marginLeft: 10, paddingLeft: 10, paddingTop: 10 }]}>
        Live Location
      </Text>

      <View style={[styles.orblockdesign, { marginTop: 15, marginBottom: 10 }]}>
        <View style={styles.orlines} />
      </View>

      <View>
        <View style={[styles.ReasonForTripStayOnTheSameLine, { right: 70 }]}>
          <Ionicons name="person-outline" size={20} paddingTop={7} color="#6730c5" />
          <Text style={[styles.statustext, { fontWeight: 'normal', fontSize: 25 }]}>
            Shola's Location
          </Text>
        </View>

        <Text style={{ color: errorMsg ? '#ef4444' : '#0d9a6b', fontWeight: '600', fontSize: 14, left: 45 }}>
          {errorMsg ? errorMsg : "Live - Accuracy: High"}
        </Text>

        <View style={styles.mapimage}>
          <MapView
            style={styles.image}
            region={{
              latitude: defaultLatitude,
              longitude: defaultLongitude,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}
            scrollEnabled={true}
            zoomEnabled={true}
          >
            {location && (
              <Marker
                coordinate={{
                  latitude: location.latitude,
                  longitude: location.longitude,
                }}
                title="Shola"
                description="Current Location"
              />
            )}
          </MapView>
        </View>  

        {loading ? (
          <ActivityIndicator size="small" color="#6730c5" style={{ marginVertical: 10 }} />
        ) : (
          <>

            <Text style={[styles.lastUpdateText, { fontWeight: '500', marginBottom: 6 }]}>
              {errorMsg ? "Location Unavailable" : address}
            </Text>
            <Text style={[styles.lastUpdateText, { color: '#64748b' }]}>
              Last updated: {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Text>
          </>
        )}
      </View>

      <View>
        <TouchableOpacity 
          style={[styles.NextButton, { marginBottom: 15 }]}
          onPress={openInMaps}
        >
          <Text style={styles.checkinAndViewButtonText}>
            Open in Maps
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

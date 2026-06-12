import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from 'expo-router';
import React from 'react';
import { Image, Linking, Platform, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../Styles/main';

export default function LocationSharedScreen() {
  const navigator = useRouter();

  const latitude = 6.5244; 
  const longitude = 3.3792;
  const label = "User's Live Location";

  const openInMaps = () => {
    const url = Platform.select({
      ios: `maps:0,0?q=${label}@${latitude},${longitude}`,
      android: `geo:0,0?q=${latitude},${longitude}(${label})`,
      default: `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`
    });

    Linking.openURL(url).catch((err) => console.error("Couldn't load maps", err));
  };

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

      <Text style={[styles.designforcreateanddetailsoftriptriptext, { marginLeft: 10, paddingLeft:10,paddingTop:10, }]}>
          Live Location
        </Text>

      <View style={[styles.orblockdesign, { marginTop: 15, marginBottom: 10 }]}>
        <View style={styles.orlines} />
      </View>

        
        <View>
         
          <View style={[styles.ReasonForTripStayOnTheSameLine,{right:70,}]}>
            <Ionicons 
              name="person-outline" 
              size={20}
              paddingTop={7}
              color="#6730c5" 
            />
            <Text style={[styles.statustext, { fontWeight: 'normal', fontSize:25, }]}>
                Shola's Location
            </Text>
          </View>

          
            <Text style={{ color: '#0d9a6b', fontWeight: '600', fontSize: 14,left:45 }}>
                Live - Accuracy: High
            </Text>


            <View>
                <TouchableOpacity style={styles.mapimage}>
                    <Image
                        source={require('../assets/images/map1.png')}
                        style={styles.image}
                    />
                </TouchableOpacity>
            </View>  


          <Text style={[styles.lastUpdateText, { fontWeight: '500', marginBottom: 6,}]}>
            Lagos, Nigeria
          </Text>

          <Text style={[styles.lastUpdateText, { color: '#64748b' }]}>
            Last updated: 2:00 PM
          </Text>
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
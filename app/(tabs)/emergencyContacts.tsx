import { styles } from "@/Styles/main";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ChooseOrEnterPasswordScreen() {
  const navigator = useRouter();

  const contacts = [
    { id: 1, name: 'Mom', source: require('../../assets/images/mum.png') },
    { id: 2, name: 'Best friend', source: require('../../assets/images/dad.png') },
    { id: 3, name: 'Brother', source: require('../../assets/images/Mibou.png') },
  ];

  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1 }}>
      <Stack.Screen options={{ headerShown: false }} />
      
      <View style={{ flex: 1, justifyContent: 'space-between', paddingBottom: 20 }}>
        
        <View>
          <View style={styles.arrowforbackandcreatenewtripcontainer}>
            <Ionicons 
              name={"arrow-back-outline"} 
              size={24} 
              paddingToppaddingTop={10}
              paddingLeft={7}
              style={styles.arrowforback}
              onPress={() => { navigator.back(); }}
            />
          </View>

          <Text style={styles.alertTriggeredHeader}>
            Alert Triggered
          </Text>

          <View style={styles.alertIconContainer}>
            <Ionicons name="radio-outline" size={32} color="white" />
          </View>

          <Text style={styles.emergencyTitleText}>
            Emergency Contacts{"\n"}Notified
          </Text>

          <Text style={styles.emergencySubtitleText}>
            Your Contacts have been alerted with your location.
          </Text>

          <View style={styles.contactsListContainer}>
            {contacts.map((contact) => (
              <View key={contact.id} style={styles.contactRow}>
                <View style={styles.contactLeftSection}>
                  <Image source={contact.source} style={styles.contactAvatar} />
                  <Text style={styles.contactNameText}>{contact.name}</Text>
                </View>
                <Text style={styles.notifiedGreenText}>Notified</Text>
              </View>
            ))}
          </View>
        </View>

        <TouchableOpacity 
          style={styles.viewLiveLocationButton}
          onPress={() => { navigator.push("/locationShared"); }}
        >
          <Text style={styles.viewLiveLocationButtonText}>
            View Live Location
          </Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}
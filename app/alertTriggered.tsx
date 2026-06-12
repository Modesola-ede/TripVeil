import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../Styles/main';


export default function chooseorenterPasswordScreen() {
    const navigator = useRouter();


    
  return (
    <SafeAreaView style={{backgroundColor:'white', flex:1}}>
        <Stack.Screen options={{ headerShown: false,}} />
        <View>
            
            <View style={styles.arrowforbackandcreatenewtripcontainer}>
                <Ionicons 
                name={"arrow-back-outline"} 
                size={24} 
                style = {styles.arrowforback}
                paddingTop={7}
                paddingLeft={7}
                onPress={ () => {navigator.back();}}
                />
            </View>

            <Text style={[styles.lagosSolotext,{fontSize:25,}]}>
                Lagos Solo Trip
            </Text>

            <Text style={[styles.lagosSolotext,{color:'#9f2d2d',marginBottom: 15,}]}>
                Alert Triggeres
            </Text>

           <Image
                source={require('../assets/images/redcau.png')}
                style={styles.cauimage}
            />

           <Text style={[styles.statustext,{fontWeight:'700'}]}>
                No check-ins recieved.
            </Text>

            <Text style={styles.caremessagetext}>
                Alert is being triggered.
            </Text>


            
            <View style={styles.expectedAndEndSameLineInAlerts}>
            <Text>Expected</Text>
            <Text>Now</Text>
            </View>

            <View style={styles.expectedAndEndSameLineInAlerts}>
            <Text>10:00 AM</Text>
            <Text>10:30 PM</Text>
            </View>

            <View style={styles.notififiedContactsText}>
                <Text>
                We've notified your emergency.
                </Text>
                <Text>
                    contacts.
                </Text>
            </View>

            <TouchableOpacity style={[styles.NextButton,{margin:50, marginTop:50,}]}
                    onPress={ () => {navigator.push("/status");}}
                >
                <Text style={styles.checkinAndViewButtonText}>
                    Cancel Alert I'm Safe!
                </Text>
            </TouchableOpacity>

        </View>
    </SafeAreaView>

  );
}


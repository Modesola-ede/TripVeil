import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../Styles/main';

export default function chooseorenterPasswordScreen() {
    const navigator = useRouter();


    
  return (
    <SafeAreaView style={{backgroundColor:'white', flex:1}}>
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

            <Text style={[styles.lagosSolotext,{fontSize:23,}]}>
                Lagos Solo Trip
            </Text>

            <Text style={[styles.lagosSolotext,{color:'#f97316',marginBottom: 15,}]}>
                Check-in Missed
            </Text>

            <Image
                source={require('../assets/images/cau.png')}
                style={styles.cauimage}
            />


           <Text style={styles.statustext}>
                Check-in Missed
            </Text>

            <Text style={styles.caremessagetext}>
                We haven't heard from you
            </Text>

            <View style={styles.expectedAndEndSameLine}>
            <Text>Expected</Text>
            <Text>Now</Text>
            </View>

            <View style={styles.expectedAndEndSameLine}>
            <Text>10:00 AM</Text>
            <Text>12:15 PM</Text>
            </View>

            <TouchableOpacity style={[styles.NextButton,{marginTop:15,}]}
                onPress={ () => {navigator.push("/login");}}
            >
                <Text style={[styles.checkinAndViewButtonText,{fontSize:15}]}>
                    I'm Ok, Check-in Now
                </Text>
            </TouchableOpacity> 

            <Text style={{alignSelf:'center', fontSize:15, fontWeight:'regular',marginTop:10,}}>Need HELP?</Text>

            <TouchableOpacity style={styles.triggerButton}
                onPress={ () => {navigator.push("/login");}}
            >
                <Text style={[styles.checkinAndViewButtonText,{color:'black',fontWeight:'normal',fontSize:15}]}>
                    Trigger SOS
                </Text>
            </TouchableOpacity>
            

        </View>
    </SafeAreaView>

  );
}


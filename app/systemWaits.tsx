import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../Styles/main';

export default function chooseorenterPasswordScreen() {
    const navigator = useRouter();


    
  return (
    <SafeAreaView style={{backgroundColor:'white', flex:1}}>
        <Stack.Screen options={{ headerShown: false }} />
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

            <Text style={[styles.lagosSolotext,{color:'#f97316',marginBottom: 15,}]}>
                Waiting for check-in
            </Text>

           <Ionicons name="time"
           color={'#f97316'}
           size={150}
           style={{textAlign:'center',marginTop:30,}}
            />

           <Text style={[styles.statustext,{fontWeight:'700'}]}>
                Waiting.....
            </Text>

            <Text style={styles.caremessagetext}>
                We are waiting for your check-in
            </Text>


            <TouchableOpacity style={styles.gracePeriodbox}>
                <Text>Grace Period</Text>
                <Text>10 mins remaining</Text>
            </TouchableOpacity> 
            
            <View style={styles.expectedAndEndSameLine}>
            <Text>Expected</Text>
            <Text>Now</Text>
            </View>

            <View style={styles.expectedAndEndSameLine}>
            <Text>10:00 AM</Text>
            <Text>12:15 PM</Text>
            </View>

        </View>
    </SafeAreaView>

  );
}


import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
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

            <Text style={[styles.lagosSolotext,{color:'#37c496',marginBottom: 15}]}>
                All System Normal
            </Text>

           <Ionicons name="shield-checkmark"
           color={'#053d2b'}
           size={150}
           style={{textAlign:'center',marginTop:30,}}
            />

           <Text style={styles.statustext}>
                status: safe
            </Text>

            <Text style={styles.caremessagetext}>
                You are doing great
            </Text>

            <Text style={styles.ReasonForTripStayOnTheSameLine}>
                Next Check-in
                <Text> for time remaining, it needs async</Text>
            </Text>

            <TouchableOpacity style={[styles.NextButton,{margin:50, marginTop:50,}]}
                onPress={ () => {navigator.push("/missedCheckin");}}
            >
                <Text style={styles.checkinAndViewButtonText}>
                    Check-in Now
                </Text>
            </TouchableOpacity> 

            <TouchableOpacity style={[styles.NextButton,{margin:50, marginTop:10,}]}
                onPress={ () => {navigator.push("/locationShared");}}
            >
                <Text style={styles.checkinAndViewButtonText}>
                    View Live Map
                </Text>
            </TouchableOpacity>
            

        </View>
    </SafeAreaView>

  );
}


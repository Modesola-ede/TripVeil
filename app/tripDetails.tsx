import { styles } from '@/Styles/main';
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function tripDetailsScreen() {
    const [inputfortravelcompanions, setinputfortravelcompanions] = useState("");
    const [inputfornotes, setinputfornotes] = useState("");
    const [inputfortravelAccomodations, setinputfortravelAccomodations] = useState("");
    const next = useRouter();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
        
        <View style={styles.arrowforbackandcreatenewtripcontainer}>
            <Ionicons 
                name={"arrow-back-outline"} 
                size={24} 
                style = {styles.arrowforback}
                paddingTop={7}
                paddingLeft={7}
                onPress={ () => {next.back();}}
            />
            <Text style = {styles.designforcreateanddetailsoftriptriptext}>Trip Details</Text>
        </View>



        <View>
            <Text style = {styles.textforinputintripsdetails}>Travel Companions</Text>
            <View style ={styles.passwordContainer}>
                <TextInput
                    value={inputfortravelcompanions}
                    onChangeText={(val) => {
                        setinputfortravelcompanions(val);
                    }}
                    autoCorrect={false}
                    placeholder='Solo                                                                                       '
                    placeholderTextColor={'#444c58'}
                    style={styles.input}
                />
                <Ionicons 
                    name={"chevron-down-outline"} 
                    size={24} 
                    style = {styles.visibility}
                    fill='black'
                    paddingTop={15}
                />
            </View>    
        </View>

        <View>
            <Text style = {styles.textforinputintripsdetails}>Accomodations</Text>
            <View style ={styles.passwordContainer}>
                <TextInput
                    value={inputfortravelAccomodations}
                    onChangeText={(val1) => {
                        setinputfortravelAccomodations(val1);
                    }}
                    autoCorrect={false}
                    placeholder='Resort De Mar, Goa'
                    placeholderTextColor={'#444c58'}
                    style={styles.input}
                />           
                <Ionicons 
                name={"location-outline"} 
                size={24} 
                style = {styles.visibility}
                fill='black'
                paddingTop={15}
                />
            </View>
        </View>           

        <View>
            <Text style = {styles.textforinputintripsdetails}>Notes (optional)</Text>
                <TextInput
                    value={inputfornotes}
                    onChangeText={(val2) => {
                        setinputfornotes(val2);
                    }}
                    autoCorrect={false}
                    placeholder='Any important notes...'
                    placeholderTextColor={'#444c58'}
                    style={[styles.input, { height: 325, textAlignVertical: 'top' }]}
                />
        </View>

        <View>
            <TouchableOpacity style={styles.NextButton}
                onPress={ () => {next.push("../status");}}
            >
                <Text style={{color: 'white',textAlign: 'center', fontSize : 20,fontWeight:'300'}}>
                Next
                </Text>
            </TouchableOpacity>
        </View>

    </SafeAreaView>
);
}
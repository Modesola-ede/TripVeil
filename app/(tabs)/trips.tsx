import { styles } from '@/Styles/main';
import { Ionicons } from "@expo/vector-icons";
import { Stack, useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function tripsScreen() {
    const [inputfordestination, setinputfordestination] = useState("");
    const [inputfortripname, setinputfortripname] = useState("");
    const [inputfortraveldates, setinputfortraveldates] = useState("");
    const next = useRouter();
    const [selectedReason, setSelectedReason] = useState<string | null>(null);


  return (
    <SafeAreaView style={{flex: 1, backgroundColor:'white'}}>
         <Stack.Screen options={{ headerShown: false }} />

        <View style={styles.arrowforbackandcreatenewtripcontainer}>
            <Ionicons 
            name={"arrow-back-outline"} 
            size={24} 
            style = {styles.arrowforback}
            paddingTop={7}
            paddingLeft={7}
            onPress={ () => {next.back();}}
            />
            <Text style={styles.designforcreateanddetailsoftriptriptext}>Create a New Trip </Text>
        </View>

       
        <View>
            <TouchableOpacity style={styles.imagebox}>
            <Image
                source={require('../../assets/images/Vac3.jpg')}
                style={styles.image}
            />
            </TouchableOpacity>
        </View>

        <View>
            <Text style = {styles.textforinputintrips}>Destination</Text>
                <TextInput
                    value={inputfordestination}
                    onChangeText={(val) => {
                        setinputfordestination(val);
                    }}
                    autoCorrect={false}
                    placeholder='Goa, India'
                    placeholderTextColor={'#444c58'}
                    style={styles.input}
                />
        </View>

        <View>
            <Text style = {styles.textforinputintrips}>Travel Dates</Text>
            <View style ={styles.passwordContainer}>
                <TextInput
                    value={inputfortraveldates}
                    onChangeText={(val1) => {
                        setinputfortraveldates(val1);
                    }}
                    autoCorrect={false}
                    placeholder='May 10 - May 17, 2025'
                    placeholderTextColor={'#444c58'}
                    style={styles.input}
                />           
                <Ionicons 
                name={"calendar-clear-outline"} 
                size={24} 
                style = {styles.visibility}
                paddingTop={15}
                />
            </View>
        </View>           

        <View>
            <Text style = {styles.textforinputintrips}>Trip Name</Text>
                <TextInput
                    value={inputfortripname}
                    onChangeText={(val2) => {
                        setinputfortripname(val2);
                    }}
                    autoCorrect={false}
                    placeholder='Goa Solo Trip'
                    placeholderTextColor={'#444c58'}
                    style={styles.input}
                />
        </View>


        <View style={styles.ReasonForTripStayOnTheSameLine}>

            <TouchableOpacity 
                style={[
                    styles.ReasonForTripButton, 
                    selectedReason === 'Leisure' && styles.ReasonForTripIsPressed
                ]}
                onPress={() => setSelectedReason('Leisure')}
                >
                <Text>Leisure</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[
                    styles.ReasonForTripButton, 
                    selectedReason === 'Work' && styles.ReasonForTripIsPressed
                ]}
                onPress={() => setSelectedReason('Work')}
                >
                <Text>Work</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={[
                    styles.ReasonForTripButton, 
                    selectedReason === 'Other' && styles.ReasonForTripIsPressed
                ]}
                onPress={() => setSelectedReason('Other')}
                >
                <Text>Other</Text>
            </TouchableOpacity>

        </View>






        <View>
            <TouchableOpacity style={styles.NextButton}
                onPress={ () => {next.push("../../tripDetails");}}
            >
                <Text style={{color: 'white',textAlign: 'center', fontSize : 20,fontWeight:'300'}}>
                Next
                </Text>
            </TouchableOpacity>
        </View>

    </SafeAreaView>
);
}


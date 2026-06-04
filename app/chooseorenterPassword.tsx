import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../Styles/main';

export default function HomeScreen() {
    const [inputValueofPassword, setInputValueofPassword] = useState("");
    const [inputValueofConfirmPassword, setInputValueofConfirmPassword] = useState("");
    const navigator3 = useRouter();
    const [showPassword, setShowPassword]=useState(true);
    const [showPassword1, setShowPassword1]=useState(true);

    const togglePassword=()=>{
      setShowPassword(!showPassword);  
    };
    const togglePassword1=()=>{
      setShowPassword1(!showPassword1);  
    };


    
  return (
    <SafeAreaView>
        <View>
            <Text style={{textAlign: 'center',fontWeight: 'bold',fontSize: 30,marginBottom: 20,paddingTop:50,}}>
                Set a Strong Password
            </Text>

           <Image
            source={require('../assets/images/sequrity2.png')}
            style={{ width: 600, height: 150, alignSelf:'center'}}
           />

          <View>
            <Text style = {styles.textforinput}>  Password</Text>
            <View style ={styles.passwordContainer}>
              <TextInput   
                value={inputValueofPassword}
                onChangeText={(val) => {
                  setInputValueofPassword(val);
                }          
              }
                placeholder='*************'
                placeholderTextColor={'#8f949b'}
                style={styles.input}
                secureTextEntry ={showPassword}

              />
              <TouchableOpacity onPress={togglePassword} style = {styles.visibility}>             
                <Ionicons 
                name={showPassword ? "eye-outline" : "eye-off-outline"} 
                size={24} 
                color="black" 
              />
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <Text style = {styles.textforinput}>Confirm Password</Text>
            <View style ={styles.passwordContainer}>
              <TextInput   
                value={inputValueofConfirmPassword}
                onChangeText={(val3) => {
                  setInputValueofConfirmPassword(val3);
                }
              }
                placeholder='*************'
                placeholderTextColor={'#8f949b'}
                style={styles.input}
                secureTextEntry ={showPassword1}
              />
              <TouchableOpacity onPress={togglePassword1} style = {styles.visibility}>             
                <Ionicons 
                name={showPassword1 ? "eye-outline" : "eye-off-outline"} 
                size={24} 
                color="black" 
                />
              </TouchableOpacity>
            </View>  
          </View>

        <Text style = {{padding:10}}></Text>

            {inputValueofPassword.length >=8 &&(
            <View style={styles.criteria}>
            <Ionicons 
               name={"checkbox"} 
              size={24} 
              color="#b198d5" 
            />
             <Text style={{ fontSize : 15,paddingBottom : 20, paddingTop : 20}}>At least 8 characters</Text>
            </View>
            )}



            {/[^a-zA-Z]/.test(inputValueofPassword) &&(
                <View style={styles.criteria}>
                <Ionicons 
                name={"checkbox"} 
                size={24} 
                color="#b198d5" 
                />
                <Text style={{ fontSize : 15,paddingBottom : 20, paddingTop : 20}}>Includes a number or a symbol</Text>
                </View>
            )}


            {inputValueofPassword === inputValueofConfirmPassword && inputValueofPassword.trim() !== '' && inputValueofConfirmPassword.trim() !== ''&&(
                <View style={styles.criteria}>
                <Ionicons 
                name={"checkbox"} 
                size={24} 
                color="#b198d5" 
                />
                <Text style={{ fontSize : 15,paddingBottom : 20, paddingTop : 20}}>Password match</Text>
                </View>
            )}


            <TouchableOpacity style={styles.continueButton}
                onPress={ () => {navigator3.push("/login");}}
            >
                <Text style={{color: 'white',textAlign: 'center', fontSize : 20,fontWeight:'500',}}>
                    Continue
                </Text>
            </TouchableOpacity> 
            

        </View>
    </SafeAreaView>

  );
}


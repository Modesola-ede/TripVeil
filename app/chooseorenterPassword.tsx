import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../Styles/main';

export default function chooseorenterPasswordScreen() {
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

    const upto8 = inputValueofPassword.length >= 8;
    const hasNumberOrSymbol = /[^a-zA-Z]/.test(inputValueofPassword);
    const passwordsMatch = inputValueofPassword === inputValueofConfirmPassword && inputValueofPassword.trim() !== '';

    
  return (
    <SafeAreaView>
        <View>
            <Text style={{textAlign: 'center',fontWeight: 'bold',fontSize: 30,marginBottom: 20,paddingTop:50,}}>
                Set a Strong Password
            </Text>

           <Image
            source={require('../assets/images/sequrity2.png')}
            style={{ width: 550, height: 100, alignSelf:'center'}}
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

        <Text style = {{padding:5}}></Text>

            <View style={styles.criteria}>
              <Ionicons 
                name={upto8 ? "checkbox" : "square-outline"} 
                size={24} 
                color={upto8 ? "#b198d5" : "#grey"} 
             />
              <Text style={[styles.textForCriterias, { color: upto8 ? "black" : "grey" }]}>
                At least 8 characters
              </Text>
            </View>



            <View style={styles.criteria}>
              <Ionicons 
                name={hasNumberOrSymbol ? "checkbox" : "square-outline"} 
                size={24} 
                color={hasNumberOrSymbol ? "#b198d5" : "#grey"} 
             />
              <Text style={[styles.textForCriterias, { color: upto8 ? "black" : "grey" }]}>
                Includes a number or a symbol
              </Text>
            </View>


            <View style={styles.criteria}>
              <Ionicons 
                name={passwordsMatch ? "checkbox" : "square-outline"} 
                size={24} 
                color={passwordsMatch ? "#b198d5" : "#grey"} 
             />
              <Text style={[styles.textForCriterias, { color: upto8 ? "black" : "grey" }]}>
                Password match
              </Text>
            </View>


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


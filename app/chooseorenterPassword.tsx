import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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
                onPress={ () => {navigator3.push("/createAccount");}}
            >
                <Text style={{color: 'white',textAlign: 'center', fontSize : 20,fontWeight:'500',}}>
                    Continue
                </Text>
            </TouchableOpacity> 
            

        </View>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    padding:15,
    borderRadius:7,
    borderWidth:1.5,
    width: '100%',
    paddingRight: 50,
    alignSelf:'center',
    fontSize:15,
  },
  textforinput: {
    flexDirection: 'row',
    padding:10,
    fontWeight: '500',
    fontSize:20,
  },
  continueButton:{
    backgroundColor: '#6730c5',
    padding: 15,
    borderRadius:10,
    marginTop: 50,
    width : 300,
    borderWidth:1,
    alignSelf :'center',
  },
  output: {
    borderWidth: 1,
    padding: 50,
    marginTop: 100,
    color: 'white',
    alignSelf: 'center',
  },
  criteria:{ 
    paddingHorizontal: 20,
    flexDirection: 'row', 
    alignItems: 'center'
  },
  passwordContainer:{
    width: 350,
    alignSelf: 'center',
    position: 'relative',
    justifyContent: 'center',
  },
  visibility:{
    position: 'absolute',
    right: 15,
    height: '100%',
    justifyContent: 'center',
  },
});
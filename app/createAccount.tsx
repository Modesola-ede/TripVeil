import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../Styles/main';

export default function HomeScreen() {
    const [inputValueofEmail, setInputValueofEmail] = useState("");
    const [inputValueofPassword, setInputValueofPassword] = useState("");
    const [inputValueoFullname, setInputValueofFullname] = useState("");
    const [inputValueofConfirmPassword, setInputValueofConfirmPassword] = useState("");
    const navigator2 = useRouter();
    const router = useRouter();
    const [termsand, settermsand] = useState(false);
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
          <Text style = {styles.createAccounttextdesignfortop}>Create Account</Text>

          <View>
            <Text style = {styles.textforinput}>  Full Name</Text>
            <TextInput
              value={inputValueoFullname}
              onChangeText={(val) => {
                setInputValueofFullname(val);
              }}
              autoCorrect={false}
              placeholder='Alex Damola'
              placeholderTextColor={'#8f949b'}
              style={styles.input}
            />
          </View>

          <View>
            <Text style = {styles.textforinput}>  Email</Text>
            <TextInput
              value={inputValueofEmail}
              onChangeText={
                (val2) => {
                setInputValueofEmail(val2.toLowerCase());
              }}
              autoCapitalize='none'
              autoCorrect={false}
              placeholder='alexdamola@gmail.com'
              placeholderTextColor={'#8f949b'}
              style={styles.input}
            />
          </View>

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
            <Text style = {styles.textforinput}>  Confirm Password</Text>
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



          <TouchableOpacity onPress={() => settermsand(!termsand)}
            style={{ 
              paddingHorizontal: 20,
              marginTop:25,
              flexDirection: 'row', 
              alignItems: 'center',
            }}>
              <Ionicons 
               name={termsand ? "checkbox" : "square-outline"} 
              size={24} 
              color="#b198d5" 
              style={{ marginRight: 8 }}
            />
              <Text style={{textAlign:'center',}}>I agree to the 

              <Text onPress={() => router.push('/createAccount')}>
                <Text style={{textAlign:'center',color:'#7c3aed',}}>
                  Terms & Privacy Policy
                </Text>
              </Text>
          </Text>
          </TouchableOpacity>
          


          <TouchableOpacity style={styles.createAccountButton}
            onPress={ () => {navigator2.push("/chooseorenterPassword");}}
          >
            <Text style={{color: 'white',textAlign: 'center', fontSize : 20,fontWeight:'500'}}>
              Create Account
            </Text>
          </TouchableOpacity> 
            
          <View style={styles.loginContainer}>
            <Text style={styles.Alreadysignedup}>Already have an account? 
            <Text
              onPress={() => router.push('/login')}
              style={styles.loginlink}>
                Log In
            </Text>
            </Text>
          </View>

        </View>
    </SafeAreaView>

  );
}

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

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

const styles = StyleSheet.create({
  input: {
    flexDirection: 'row',
    padding:15,
    alignItems:'center',
    borderRadius:7,
    borderWidth:1.5,
    alignSelf:'center',
    width:350,
    fontSize:15,
    position:'relative',
  },
  textforinput: {
    flexDirection: 'row',
    padding:10,
    fontWeight: 'bold',
    fontSize:20,
  },
  createAccounttextdesignfortop:{
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
    paddingTop:50,
  },
  createAccountButton:{
    backgroundColor: '#6730c5',
    padding: 12,
    borderRadius:10,
    marginTop: 10,
    width : 350,
    borderWidth:1,
    alignSelf :'center',
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
loginlink: {
    color: '#7c3aed',
    fontWeight: '600',
  },
  loginContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
  },
  Alreadysignedup: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
});
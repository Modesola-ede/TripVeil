import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    const [inputValueofEmail, setInputValueofEmail] = useState("");
    const [inputValueofPassword, setInputValueofPassword] = useState("");
    const navigator2 = useRouter();
    const router = useRouter();
    const [termsand, settermsand] = useState(false);
    const [showPassword, setShowPassword]=useState(true);
    const [showPassword1, setShowPassword1]=useState(true);

    const togglePassword=()=>{
      setShowPassword(!showPassword);  
};


  return (
    <SafeAreaView>
        <View>
          <Text style = {styles.welcomebacktextdesignfortop}>Welcome Back!</Text>
          <Text style = {styles.loginttextdesignfortop}>Login to continue.</Text>

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
                autoCapitalize='characters'
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


          <Text onPress={() => router.push('/chooseorenterPassword')}>
           <Text style={{color:'#7c3aed',textAlign:'right',}}>
              Forgot Password?
           </Text>
          </Text>

          

          <TouchableOpacity style={styles.loginbutton}
            onPress={ () => {navigator2.push("/chooseorenterPassword");}}
            >
            <Text style={{color: 'white',textAlign: 'center', fontSize : 20,fontWeight:'500'}}>
              Login
            </Text>
          </TouchableOpacity> 
            
          <View style={styles.loginContainer}>
            <Text style={styles.signup}>Don't have an account? 
              <Text
                onPress={() => router.push('/createAccount')}
                style={styles.loginlink}>
                  Sign up
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
  welcomebacktextdesignfortop:{
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
    paddingTop:50,
  },
  loginttextdesignfortop:{
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 20,
  },
  loginbutton:{
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
  signup: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
});
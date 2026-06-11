import { Ionicons } from "@expo/vector-icons";
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from '../Styles/main';


export default function LoginScreen() {
    const [inputValueofEmail, setInputValueofEmail] = useState("");
    const [inputValueofPassword, setInputValueofPassword] = useState("");
    const navigator2 = useRouter();
    const router = useRouter();
    const [showPassword, setShowPassword]=useState(true);

    const togglePassword=()=>{
      setShowPassword(!showPassword);  
};


  return (
    <SafeAreaView>
        <View>
          <Text style = {styles.welcomebacktextdesignfortop}>Welcome back!</Text>
          <Text style = {styles.loginttextdesignfortop}>Login to Continue</Text>



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
                placeholder='you@email.com'
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



          <View >
            <Text onPress={() => router.push('/chooseorenterPassword')} style={styles.forgotpasswordstyle}>
                Forgot Password?
            </Text>
          </View>
          


          <TouchableOpacity style={styles.loginbutton}
            onPress={ () => {navigator2.push("../trips");}}
            >
            <Text style={{color: 'white',textAlign: 'center', fontSize : 25,fontWeight:'500'}}>
              Log in
            </Text>
          </TouchableOpacity> 



          <View style = {styles.orblockdesign}>
            <View style = {styles.orlines}/>
            <Text style = {styles.ortextdesigh}>or</Text>
            <View style = {styles.orlines}/>
          </View>



          <View>
            <TouchableOpacity style={styles.appleAndGoogleContainer}>
                <Image
                  source={require('../assets/images/goo1.png')}
                  style={{ width: 25, height: 25, alignSelf:'flex-start'}}
                />
                    <Text style={styles.appleAndGoogleTextcontainer}>Continue with Google</Text>
            </TouchableOpacity>    
          </View>    



          < View>
            <TouchableOpacity style={styles.appleAndGoogleContainer}>
              <Image
                source={require('../assets/images/app2.png')}
                style={{ width: 25, height: 25, alignSelf:'flex-start'}}
              />
                  <Text style={styles.appleAndGoogleTextcontainer}>Continue with Apple</Text>
            </TouchableOpacity>
          </View>


            
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
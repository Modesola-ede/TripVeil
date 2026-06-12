import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout(){
     return (
        <Tabs screenOptions={{tabBarActiveTintColor : '#7c3aed',}}>
            <Tabs.Screen
                name="trips"   
                options={{
                    title : 'trips',
                    tabBarIcon:({color}) => (
                        <Ionicons name="compass-outline" size = {30} color = {color}/>
                    ),
                }}
            />

            <Tabs.Screen
                name="emergencyContacts"   
                options={{
                    title : 'Contacts',
                    tabBarIcon:({color}) => (
                        <Ionicons name="person-circle-outline" size = {30} color = {color}/>
                    ),
                }}
            />



        </Tabs>
  );
}

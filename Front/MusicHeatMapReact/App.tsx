//React Imports
import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//Page Imports EG: Login Page, Profile Page ect...
import LoginPage from "./LoginPage"



//Button and Color Imports
import {
  Text,
  View
} from 'react-native';


const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
          <View>
            <Image source={require('./assets/map.png')} style={{height: 700, width: 'auto'}}></Image>
          </View>
    );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Customize Your Profile!</Text>
    </View>
    
  );
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {height: 120},
    }}>
      <Tab.Screen name="Home" component={HomeScreen} options={{
        title: 'MAP!',
        tabBarIcon:()=>{
          return(
            <Image style={{width: 'auto', height: "auto"}}
            source={require('./assets/map.png')}>
            </Image>
          )
        }}}/>
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        title: 'Settings',
        tabBarIcon:({})=>{
          return(
            <Image style={{width: 'auto', height: "auto"}}
            source={require('./assets/settingsicon.png')}>
            </Image>
          )
        }
      }
    }/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{
        title: 'Profile',
        tabBarIcon:({})=>{
          return(
            <Image style={{width: 'auto', height: "auto"}}
            source={require('./assets/guy with headphones no music.jpg')}>
            </Image>
          )
        }
      }
    }/>
    </Tab.Navigator>
  );
}




function App(): React.JSX.Element {
  //<LoginPage /> goes in navCont when wanting home page
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  ); 
}

export default App;

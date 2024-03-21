//React Imports
import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//Page Imports EG: Login Page, Profile Page ect...
import LoginPage from "./src/screens/LoginScreens/LoginPage.tsx"


//adding this line for a reason i cannot disclose at this time


//Button and Color Imports
import {
  Text,
  View,
} from 'react-native';


const Tab = createBottomTabNavigator();

function HomeScreen() {
    return (
          <View>
            <Image source={require('./src/assets/map.png')}
              style={{
                resizeMode: 'contain',
                aspectRatio: '435/648'
              }}
            >
            </Image>
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

function ListenHistoryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Listen History!!!</Text>
    </View>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        position: 'absolute',
        height: 100,
        bottom: 25,
        left: 10,
        right: 10,
        elevation: 0,
        borderRadius: 15,
        backgroundColor: 'rgba(137, 196, 244, 1)'
      },
      tabBarShowLabel: false
    }}>
      <Tab.Screen name="Map"
        component={HomeScreen} 
        options={{
          tabBarIcon:() => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image 
              source={require('./src/assets/maybe_the_one.png')}
              style={{
                aspectRatio: '3/2',
                width: 70,
                height: 50
              }}
              >
              </Image>
              <Text>
                Music Map!
              </Text>
            </View>
            )
        }}
      />
      <Tab.Screen name="Listen History"
        component={ListenHistoryScreen} 
        options={{
          tabBarIcon:() => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image 
              source={require('./assets/listen_history_icon.png')}
              style={{
                aspectRatio: '456/470',
                width: 50,
                height: 50
              }}
              >
              </Image>
              <Text>
                Listen History
              </Text>
            </View>
            )
        }}
      />
      <Tab.Screen 
        name="Settings"
        component={SettingsScreen} 
        options={{
          tabBarIcon:() => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image 
              source={require('./src/assets/settingsicon.png')}
              style={{
                aspectRatio: '512/512',
                width: 50,
                height: 50
              }}
              >
              </Image>
              <Text>
                Settings
              </Text>
            </View>
            )
        }}
    />
      <Tab.Screen 
        name="Profile"
        component={ProfileScreen} 
        options={{
          tabBarIcon:() => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image 
              source={require('./assets/even_thicker_line_profile_image.png')}
              style={{
                aspectRatio:'9/16',
                width: 50,
                height: 50
              }}
              >
              </Image>
              <Text>
                Profile
              </Text>
            </View>
            )
        }}
    />
    </Tab.Navigator>
  );
}




function App(): React.JSX.Element {
  //<LoginPage /> <MyTabs /> goes in navCont when wanting home page
  return (
    <NavigationContainer>
      <LoginPage />
    </NavigationContainer>
  ); 
}

export default App;

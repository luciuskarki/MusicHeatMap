//React Imports
import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//Page Imports EG: Login Page, Profile Page ect...
import LoginPage from "./src/screens/LoginScreens/LoginPage.tsx"


//adding this line for a reason i cannot disclose at this time


//Button and Color Imports
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  FlatListComponent,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

const dummySongs = [
  {
    id: 1,
    username: 'Karki',
    title: 'Horse with no name',
    artist: 'America',
    genre: 'something'
  },
  {
    id: 2,
    username: 'Karki',
    title: 'Im a gummy bear',
    artist: 'gummy bear',
    genre: 'Best music ever'
  },
  {
    id: 3,
    username: 'Karki',
    title: 'Sweden',
    artist: 'C418',
    genre: 'Minecraft'
  },
  
  {
    id: 4,
    username: 'Karki',
    title: 'Sweden',
    artist: 'C418',
    genre: 'Minecraft'
  },
  {
    id: 5,
    username: 'Karki',
    title: 'Sweden',
    artist: 'C418',
    genre: 'Minecraft'
  },
  {
    id: 6,
    username: 'Karki',
    title: 'Sweden',
    artist: 'C418',
    genre: 'Minecraft'
  },
  {
    id: 7,
    username: 'Karki',
    title: 'Sweden',
    artist: 'C418',
    genre: 'Minecraft'
  }
  
]
const Tab = createBottomTabNavigator();

function HistoryElement(){
  const songArray = dummySongs.map(dummySongs =>
    <View key={dummySongs.id} style={{
      alignItems: 'center',
      justifyContent: 'center',
      padding: 5,
    }}>
      <View
      style={{
        flexDirection: 'row',
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
      }}>
          <View style={{
            flex:3
          }}>
            <Text style={styles.HistoryText}>
              {dummySongs.username}
            </Text>
            <Text style={styles.HistoryText}>
              {dummySongs.title}
            </Text>
            <Text style={styles.HistoryText}>
              {dummySongs.artist}
            </Text>
            <Text style={styles.HistoryText}>
              {dummySongs.genre}
            </Text>
          </View>
          <View style={{
              alignContent: 'center',
              flexDirection: 'row',
              flex:1
            }}>
              <Image 
              source={require('./src/assets/settingsicon.png')}
              style={{
                width:100,
                height:100
              }}>
              </Image>
          </View>
    </View>
  </View>
    )
  return (
      <View>
      {songArray}
      </View>
  )
}

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

function HistoryScreen() {
  return (
    <HistoryElement>
    </HistoryElement>
  );
}


function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        position: 'absolute',
        height: 100,
        elevation: 0,
        backgroundColor: 'rgba(137, 196, 244, 1)'
      },
      tabBarShowLabel: false
    }}>
      <Tab.Screen name="Map"
        component={HomeScreen} 
        options={{
          headerShown: false,
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
      <Tab.Screen name="History"
        component={HistoryScreen} 
        options={{
          headerShown: false,
          tabBarIcon:() => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image 
              source={require('./src/assets/listen_history_icon.png')}
              style={{
                aspectRatio: '456/470',
                width: 50,
                height: 50
              }}
              >
              </Image>
              <Text>
                History
              </Text>
            </View>
            )
        }}
      />
      <Tab.Screen 
        name="Settings"
        component={SettingsScreen} 
        options={{
          headerShown: false,
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
          headerShown: false,
          tabBarIcon:() => (
            <View style={{alignItems: 'center', justifyContent: 'center', top: 10}}>
              <Image 
              source={require('./src/assets/even_thicker_line_profile_image.png')}
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


const styles = StyleSheet.create({
  HistoryText: {
    fontSize: 20,
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

function App(): React.JSX.Element {
  //<LoginPage /> <MyTabs /> goes in navCont when wanting home page
  return (
    <NavigationContainer>
      <LoginPage />
    </NavigationContainer>
  ); 
}

export default App;

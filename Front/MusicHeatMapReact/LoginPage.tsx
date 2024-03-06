//React Imports
import React from 'react';
import { TextInput } from "react-native";
//import Icon from 'react-native-vector-icons/FontAwesome' for later

//Button and Color Imports
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Alert
} from 'react-native';


function LandingPage(){

    return (
      <View style={styles.container} >
          <Text style={styles.heading}>Welcome to HeatMaps</Text>
          <Text style={styles.LoginText}>Login</Text>
            
          <View style={styles.inputContainer}>
            <TextInput style ={styles.input}
             placeholder="Enter Username" placeholderTextColor={'red'}>
            </TextInput>

            <TextInput style ={styles.input}
            placeholder="Enter Password" placeholderTextColor={'red'}>
            </TextInput>

          </View>
      </View>
    );
    
    }
    export default LandingPage


       {/* <Button
    onPress={() => Alert.alert('Simple Button pressed')}
    title="Learn More"
    color="#841584"
    accessibilityLabel="Learn more about this purple button"
    /> */}

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'

        },
        heading: {
          fontSize: 30,
          paddingBottom: 100,
          fontWeight: 'bold',
          color: 'red',
          justifyContent: 'center'

        },
        LoginText: {
          fontSize: 25,
          marginBottom: 20,
          fontWeight: 'bold',
          color: 'red',
        },
        inputContainer:{
          borderWidth: 1,
          marginBottom:300,
          borderColor: 'red',
          justifyContent: 'center'
        },
        input:{
          flexDirection: 'row',
          width: '80%',
          borderWidth: 1,
          padding: 10,
          fontSize: 20,
          borderColor: 'red'
        },
    });
//React Imports
import React from 'react';
import { TextInput } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons'
//import Icon from 'react-native-vector-icons/FontAwesome' for later
//color changes 
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
  Alert,
  TouchableOpacity
} from 'react-native';


function LandingPage(){

    return (
      <View style={styles.container} >
          <Text style={styles.heading}>Welcome to HeatMaps</Text>
          <Text style={styles.LoginText}>Login</Text>
            
          <View style={styles.inputContainer}>
            <View style={styles.iconContainer}> 
              <View style={styles.icon}> 
                <Icon style={styles.iconStyle} name="user" size={60} color="black"/>
              </View> 
              <TextInput style ={styles.input}
                placeholder="Enter Username" placeholderTextColor={textColor}>
              </TextInput>
            </View>
            <View style={styles.iconContainer}>
              <View style={styles.icon}>  
                <Ionicons style={styles.iconStyle} name="eye" size={60} color="black"/>
                </View> 
              <TextInput style ={styles.input}
                placeholder="Enter Password" placeholderTextColor={textColor}>
              </TextInput>
            </View>
            <TouchableOpacity>
              <Text style={styles.login}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text style={styles.register}>Register</Text>
            </TouchableOpacity>
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

    var textColor = "#52b788" //b864b9 pink 95d5b2 green
    var bgColor = "#1b2021"
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: bgColor,
        justifyContent: 'center',
        alignItems: 'center'

        },
        heading: {
          fontSize: 30,
          marginTop: 120,
          fontWeight: 'bold',
          color: textColor,
          justifyContent: 'center'
        },
        LoginText: {
          marginTop: 150,
          fontSize: 25,
          marginBottom: 20,
          fontWeight: 'bold',
          color: textColor,
        },
        inputContainer:{

          marginBottom:300,
          borderColor: textColor,
          padding: 5,
        },
        input:{
          flexDirection: 'row',
          width: '80%',
          padding: 10,
          fontSize: 20,
          borderColor: textColor,
          borderWidth: 1,
          borderBottomRightRadius: 10,
          borderTopStartRadius: 10, 
        },
        iconContainer:{
          flexDirection: 'row',
          margin: 10,
        },
        icon:{
          backgroundColor: textColor,
          width: '20%',
          height: 60,
          borderTopLeftRadius: 10,
          
        },
        iconStyle:{
          marginTop: 2,
          alignSelf: 'center'
        },
        login: {
          fontSize: 30,
          textAlign: 'center',
          fontWeight: 'bold',
          backgroundColor: textColor,
          width: 150,
          padding: 10,
          color: bgColor,
          borderRadius: 10,
          alignSelf: 'center'
        },
        register: {
          marginTop: 10,
          fontSize: 30,
          textAlign: 'center',
          fontWeight: 'bold',
          backgroundColor: textColor,
          width: 150,
          padding: 10,
          color: bgColor,
          borderRadius: 10,
          alignSelf: 'center'
        }
        
    });

//###############################

// Created by Yahor Senichak(xsenic00)


// ###############################


import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { Icon } from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo';
import {  Picker } from "react-native";
import { Button , TouchableOpacity} from 'react-native';


export default class MyPrivacy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 'en',
      isNotificationsWorks: true,
      mode:true,
   };
  }

  buttonPressed(page){
    this.props.navigator.replace({
      id: page,
    })
  }

  render(){
  return (
    
    <View style={styles.container}>
      <View style={styles.positions}>
      <Icon name='lock-open' style={styles.leftIcon}/>
      <Text style={styles.text}> 
      
        Privacy</Text>
        <TouchableOpacity > 
        <Entypo  name='cross' style={{ fontSize: 25, alignSelf:"flex-end", paddingLeft:'60%',paddingTop:10}}/>
        </TouchableOpacity>
      </View>
      <View style={{ borderBottomColor: 'black',borderBottomWidth: 1, }} />
      
      <View style={styles.message}>
        <Text style={{fontSize:20, paddingBottom:25}}>
          Dear Customer !
        </Text>
        <Text style={{fontSize:20, paddingBottom:25,width:'80%'}}>
        To reset security data, please click the button below and go through email verification.
        </Text>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
        >
         <Text style={{fontSize: 24}}>Reset</Text>
        </TouchableOpacity>

      </View>
      
        
        <StatusBar style="auto" />
    </View>
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbd3d8',
    paddingTop:80,
    paddingLeft:20,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#D77a61',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    
  },
  positions:{
    flexDirection: "row",
    width:"80%",
    paddingTop:20
  },
  message: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  leftIcon: {
    marginRight: 1,
    paddingTop:5,
  },
  
  text:{
    fontSize: 24, 
    alignSelf: "flex-start" , 
  },

  icon:{
    fontSize: 24,
    paddingTop:5
  }

});
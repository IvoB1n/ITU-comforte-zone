import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { Icon } from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo';
import {  Picker } from "react-native";
import { Button , TouchableOpacity} from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      want_to_change_pass:false,
   };
  }

  onPress = () => {
    this.setState({
      want_to_change_pass: !this.state.selectedValue
    })
  }

  render(){
  return (
    
    <View style={styles.container}>
      <Text style={styles.text}> 
      <Icon name='lock-open' style={styles.leftIcon}/>
        Privacy
        <TouchableOpacity > <Entypo  name='cross' style={{ fontSize: 25, alignSelf:"flex-end", paddingLeft:120,}}/> </TouchableOpacity>
        </Text>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, }}/>
        
      <View style={styles.message}>
        <Text style={{fontSize:20, paddingBottom:25}}>
          Dear Customer !
        </Text>
        <Text style={{fontSize:20, paddingBottom:25}}>
        To reset security data, please click the button below and go through email verification.
        </Text>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPress}
        >
         <Text style={{fontSize: 24}}>Reset</Text>
        </TouchableOpacity>
        <View>
          <Text style={{paddingBottom:60}}>
            For other question contact us 
            <TouchableOpacity style={styles.button} 
            onPress={this.onPress}
        >
         <Text style={{fontSize: 24}}>Reset</Text>
        </TouchableOpacity>
          </Text>
        </View>
      </View>



      <StatusBar style="auto" />
    </View>
    
  );}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbd3d8',
    paddingTop:20,
    paddingLeft:20,
  },

  leftIcon: {
    marginRight: '1em',
  },
  
  text:{
    fontSize: 24, 
    alignSelf: "flex-start" , 
    paddingTop: 40
  },
  message: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#D77a61',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    
  }

});
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Switch, TextInput } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {  Picker } from "react-native";
import { Button , TouchableOpacity} from 'react-native';
import MyDatePicker from './datepicker';

export default class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 'Belarus',
      Gender: 'Female',
      day: '12',
      month:'03',

   };
  }

 

  render(){
  return (
    <View style={styles.container}>
     <View style={styles.positions}>
        <Entypo  name='user' style={styles.icon}/>
        <Text style={styles.text}> 
        
          Personal Information</Text>
          <TouchableOpacity > 
          <Entypo  name='cross' style={{ fontSize: 25, alignSelf:"flex-end", paddingLeft:20,paddingTop:5}}/>
          </TouchableOpacity>
      </View>
      
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, }} />
        <View style={{paddingTop:30}}>
          <Text style={styles.text}>
            First Name: 
          </Text>
          <View style={{paddingBottom:15,}}>
          <TextInput style={styles.input} >

          </TextInput>
        </View>

        </View>
         
        <View style={{paddingTop:30}}>

          <Text style={styles.text}>
            Last Name: 
          </Text>
          <View style={{paddingBottom:15,}}>
          <TextInput style={styles.input} >

          </TextInput>
          </View>
        </View>
        <View style={{paddingTop:30}}>
          <Text style={styles.text}>
            Country: 
          </Text>

          <View style={{paddingBottom:15,}}>
          <Picker selectedValue={this.state.selectedValue} style={{ height: 40, width: "40%", fontSize:24,backgroundColor:"#d77a61" }} onValueChange={(itemValue,itemIndex) => this.setState({selectedValue: itemValue})}>
                <Picker.Item style={styles.text} label='Czech Republic'  value="Czech Republic" />
                <Picker.Item label='England'  value="England" />
                <Picker.Item label='Belarus'  value="Belarus" />
                <Picker.Item label='Moldova'  value="Moldova" />
                <Picker.Item label='Zimbabve'  value="Zimbabve" />
                <Picker.Item label='Dominikana'  value="Dominikana" />
                <Picker.Item label='Japan'  value="Japan" />

          </Picker>

          </View>
          <Text style={styles.text}>
           Gender: 
          </Text>

          <View style={{paddingBottom:15,}}>
          <Picker Gender={this.state.Gender} style={{ height: 40, width: '40%',  fontSize:24 }} onValueChange={(itemValue,itemIndex) => this.setState({Gender: itemValue})}>
              <Picker.Item label='Mail'  value="Mail" />
              <Picker.Item label='Female'  value="Femail" />
          </Picker>
          </View>

          <Text style={styles.text}>
           Date of birth: 
          </Text>
          <MyDatePicker/>


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
    paddingBottom:10,
  },
  positions:{
    flexDirection: "row",
    width:"80%",
    paddingTop:40
  },
  icon:{
    fontSize: 24,
    paddingTop:5
  },


  leftIcon: {
    marginRight: '1em',
  },   

  text: {
    fontSize: 24, 
    alignSelf: "flex-start" , 
  },

  input:{
    borderBottomColor:'black', 
    borderBottomWidth:2,
    width:'80%',
    fontSize:24,
  },

  monthPicker:{
    height:40,
    width:'50%',
    flex:1,
    flexDirection:'row'
  },

  dayPicker:{
    height:40,
    width:'50%',
    flex:1,
    flexDirection:'row'
  },

  yearPicker:{
    height:40,
    width:'50%',
    flex:1,
    flexDirection:'row'

  },
  
});

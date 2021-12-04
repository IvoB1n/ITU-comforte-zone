import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Switch, TextInput } from 'react-native';
import { Icon } from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo';
import {  Picker } from "react-native";
import { Button , TouchableOpacity} from 'react-native';
import { style } from 'dom-helpers';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedValue: 'Belarus',
      Gender: 'Female',
      day: 12,
      month:3,
   };
  }

 

  render(){
  return (
    <View style={styles.container}>
      
      <Text style={{ fontSize: 24, alignSelf: "flex-start",  }}> 
      <Entypo name='user' style={{ fontSize:24, }}/>
        Personal Information
      <TouchableOpacity > <Entypo  name='cross' style={{ fontSize: 25, alignSelf:"flex-end", paddingLeft:60,}}/> </TouchableOpacity>
      </Text>
      <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, }} />

        <Text style={styles.text}>
           First Name: 
        </Text>
        <View style={{paddingBottom:15,}}>
        <TextInput style={styles.input} >

        </TextInput>
        </View>
        
         <Text style={styles.text}>
           Last Name: 
        </Text>
        <View style={{paddingBottom:15,}}>
        <TextInput style={styles.input} >

        </TextInput>
        </View>

        <Text style={styles.text}>
           Country: 
        </Text>
        <View style={{paddingBottom:15,}}>
        <Picker selectedValue={this.state.selectedValue} style={{ height: 40, width: '10em',fontFamily:'Indie Flower, cursive', fontSize:24 }} onValueChange={(itemValue,itemIndex) => this.setState({selectedValue: itemValue})}>
              <Picker.Item label='Czech Republic'  value="Czech Republic" />
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
        <Picker Gender={this.state.Gender} style={{ height: 40, width: '10em', fontFamily:'Indie Flower, cursive', fontSize:24 }} onValueChange={(itemValue,itemIndex) => this.setState({Gender: itemValue})}>
              <Picker.Item label='Mail'  value="Mail" />
              <Picker.Item label='Female'  value="Femail" />
        </Picker>
        </View>

        <Text style={styles.text}>
           Date of birth: 
        </Text>
        <View style={{paddingBottom:15,flexDirection:'row', paddingRight:20,}}>

          <Picker style={styles.dayPicker} day={this.state.day}  onValueChange={(itemValue,itemIndex) => this.setState({day: itemValue})} >
              <Picker.Item label='1' value='0'/>
              <Picker.Item label='2' value='1'/>
              <Picker.Item label='3' value='2'/>
              <Picker.Item label='4' value='3'/>
              <Picker.Item label='5' value='4'/>
              <Picker.Item label='6' value='5'/>
              <Picker.Item label='7' value='6'/>
              <Picker.Item label='8' value='7'/>
              <Picker.Item label='9' value='8'/>
              <Picker.Item label='10' value='9'/>
              <Picker.Item label='11' value='10'/>
              <Picker.Item label='12' value='11'/>
              <Picker.Item label='13' value='12'/>
              <Picker.Item label='14' value='13'/>
              <Picker.Item label='15' value='14'/>
              <Picker.Item label='16' value='15'/>
              <Picker.Item label='17' value='16'/>
              <Picker.Item label='18' value='17'/>
              <Picker.Item label='19' value='18'/>
              <Picker.Item label='20' value='19'/>
              <Picker.Item label='21' value='20'/>
              <Picker.Item label='22' value='21'/>
              <Picker.Item label='23' value='22'/>
              <Picker.Item label='24' value='23'/>
              <Picker.Item label='25' value='24'/>
              <Picker.Item label='26' value='25'/>
              <Picker.Item label='27' value='26'/>
              <Picker.Item label='28' value='27'/>
              <Picker.Item label='29' value='28'/>
              <Picker.Item label='30' value='29'/>
              <Picker.Item label='31' value='30'/>
            </Picker>

            <Picker style={styles.monthPicker} month={this.state.month}  onValueChange={(itemValue,itemIndex) => this.setState({month: itemValue})}>
              <Picker.Item label='January' value='0'/>
              <Picker.Item label='February' value='1'/>
              <Picker.Item label='March' value='2'/>
              <Picker.Item label='April' value='3'/>
              <Picker.Item label='May' value='4'/>
              <Picker.Item label='June' value='5'/>
              <Picker.Item label='July' value='6'/>
              <Picker.Item label='August' value='7'/>
              <Picker.Item label='September' value='8'/>
              <Picker.Item label='October' value='9'/>
              <Picker.Item label='Novemder' value='10'/>
              <Picker.Item label='December' value='11'/>
            </Picker>
            
            <Picker style={styles.yearPicker}>
              <Picker.Item label='1993' value='1'/>
              <Picker.Item label='1994' value='2'/>
              <Picker.Item label='1995' value='3'/>
              <Picker.Item label='1996' value='4'/>
              <Picker.Item label='1997' value='5'/>
              <Picker.Item label='1998' value='6'/>
              <Picker.Item label='1999' value='7'/>
              <Picker.Item label='2000' value='8'/>
              <Picker.Item label='2001' value='9'/>
              <Picker.Item label='2002' value='10'/>
              <Picker.Item label='2003' value='11'/>
              <Picker.Item label='2004' value='12'/>
            </Picker>
          
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

  text: {
    fontSize: 24, 
    alignSelf: "flex-start" , 
    paddingTop: 40
  },

  input:{
    borderBottomColor:'black', 
    borderBottomWidth:2,
    width:'80%',
    fontFamily: 'Indie Flower, cursive',
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

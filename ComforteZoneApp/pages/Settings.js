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
      <Text style={styles.text}> 
      <Icon name='settings' style={styles.leftIcon}/>
        Settings
        <TouchableOpacity > <Entypo  name='cross' style={{ fontSize: 25, alignSelf:"flex-end", paddingLeft:120,}}/> </TouchableOpacity>
        </Text>
        <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
        />
        <Text style={styles.text}>
         <Entypo  name='bell' style={{ fontSize: 24,}}/>
           Notifications
          <Switch
            style={{marginLeft: '1em'}}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={this.state.isNotificationsWorks ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => this.setState({ isNotificationsWorks: !this.state.isNotificationsWorks})}
            value={this.state.isNotificationsWorks}
          />
        </Text>
         <Text style={styles.text}>
         <Entypo  name='dribbble' style={{ fontSize: 24,}}/>
           Language
           <View style={{alignSelf:'flex-end', paddingLeft:20,}}>
            
           <Picker selectedValue={this.state.selectedValue} style={{ height: 30, width: '7em' }} onValueChange={(itemValue, itemIndex) => this.setState({selectedValue: itemValue})}>
              <Picker.Item label="English" value="en" />
              <Picker.Item label="Czech" value="cz" />
              <Picker.Item label="Russian" value="ru" />

              </Picker>
         </View>
           </Text>
          
         
         
         <Text style={styles.text}>
         <Entypo  name='user' style={{ fontSize: 24,}}/>
         <TouchableOpacity>Personal Information</TouchableOpacity>
         </Text>
         <Text style={styles.text}>
         <Entypo  name='light-up' style={{ fontSize: 24, }}/>
           Mode 
           {this.state.mode ? 
           <Entypo  onClick={() => {this.setState({mode: !this.state.mode})}} name='moon' style={{ fontSize: 24, marginLeft:"1em"}}/>
           :
           <Entypo onClick={() => {this.setState({mode: !this.state.mode})}} name='light-up' style={{ fontSize: 24, marginLeft:"1em" }}/>
            }
         </Text>
         <Text style={styles.text}>
         <Entypo  name='lock-open' style={{ fontSize: 24, }}/>
         <TouchableOpacity>Privacy</TouchableOpacity>
         </Text>
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
  }

});
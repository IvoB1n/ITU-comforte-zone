import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { Icon } from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo';
import {  Picker } from "react-native";
import { Button , TouchableOpacity} from 'react-native';


export default class MySettings extends React.Component {
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
      <Icon name='settings' style={styles.leftIcon}/>
      <Text style={styles.text}> 
      
        Settings</Text>
        <TouchableOpacity > 
        <Entypo  name='cross' style={{ fontSize: 25, alignSelf:"flex-end", paddingLeft:120,}}/>
        </TouchableOpacity>
        
        <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
        /><Entypo  name='bell' style={styles.icon}/>
        <Text style={styles.text}>
         
           Notifications</Text>
          <Switch
            style={{marginLeft: 1}}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={this.state.isNotificationsWorks ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => this.setState({ isNotificationsWorks: !this.state.isNotificationsWorks})}
            value={this.state.isNotificationsWorks}
          />
        
         <Entypo  name='dribbble' style={styles.icon}/>
         <Text style={styles.text}>
           Language

         
           </Text>
                     <View style={{alignSelf:'flex-end', }}>
            
           <Picker selectedValue={this.state.selectedValue} style={{ height: 30, width: 7 }} onValueChange={(itValue, itIndex) => this.setState({selectedValue: itValue})}>
              <Picker.It label="English" value="en" />
              <Picker.It label="Czech" value="cz" />
              <Picker.It label="Russian" value="ru" />

            </Picker>
         </View>
         
         
         <Entypo  name='user' style={styles.icon}/>
         <TouchableOpacity>
           <Text style={styles.text}>Personal Information </Text>
          </TouchableOpacity>
        
         
         <Entypo  name='light-up' style={styles.icon}/>
           <Text style={styles.text}>Mode </Text>
           {this.state.mode ? 
           <Entypo  onClick={() => {this.setState({mode: !this.state.mode})}} name='moon' style={{ fontSize: 24, marginLeft:1}}/>
           :
           <Entypo onClick={() => {this.setState({mode: !this.state.mode})}} name='light-up' style={{ fontSize: 24, marginLeft:1 }}/>
            }
         
        
         <Entypo  name='lock-open' style={styles.icon}/>
         <TouchableOpacity> 
           <Text style={styles.text}>Privacy </Text>
           </TouchableOpacity>
        
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
    marginRight: 1,
  },
  
  text:{
    fontSize: 24, 
    alignSelf: "flex-start" , 
    paddingTop: 40
  },

  icon:{
    fontSize: 24,
  }

});
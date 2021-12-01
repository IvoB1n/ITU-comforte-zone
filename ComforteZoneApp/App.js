import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { IconFill, IconOutline } from "@ant-design/icons-react-native";
import { Icon } from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {  Picker } from "react-native";
import { useState } from "react";

export default function App() {

  const [selectedValue, setSelectedValue] = useState("en");
  const [isNotificationsWorks, switchNotification] = useState(true);
  const [mode, switchMode] = useState(true);


  const toggleSwitch = () => switchNotification(previousState => !previousState);
  return (
    
    <View style={styles.container}>
      <Text style={{ fontSize: 24, alignSelf: "flex-start" }}> 
      <Icon name='settings' style={styles.leftIcon}/>
        Settings
        </Text>
        <View
        style={{
          borderBottomColor: 'black',
          borderBottomWidth: 1,
        }}
        />
        <Text style={{ fontSize: 24, alignSelf: "flex-start" , paddingTop: 40}}>
         <Entypo  name='bell' style={{ fontSize: 24,}}/>
           Notifications
          <Switch
            style={{marginLeft: '1em'}}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={isNotificationsWorks ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isNotificationsWorks}
          />
        </Text>
         <Text style={{ fontSize: 24, alignSelf: "flex-start" , paddingTop: 40}}>
         <Entypo  name='dribbble' style={{ fontSize: 24,}}/>
           Language
           <View style={{alignSelf:'flex-end', paddingLeft:20,}}>
            
           <Picker selectedValue={selectedValue} style={{ height: 30, width: '7em' }} onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
              <Picker.Item label="English" value="en" />
              <Picker.Item label="Czech" value="cz" />
              <Picker.Item label="Russian" value="ru" />

              </Picker>
         </View>
           </Text>
          
         
         <Text style={{ fontSize: 24, alignSelf: "flex-start" , paddingTop: 40}}>
         <Entypo  name='user' style={{ fontSize: 24,}}/>
           Personal Information 
         </Text>
         <Text style={{ fontSize: 24, alignSelf: "flex-start" , paddingTop: 40}}>
         <Entypo  name='light-up' style={{ fontSize: 24, }}/>
           Mode 
           {mode ? 
           <Entypo  onClick={() => {switchMode(ps => !ps);}} name='moon' style={{ fontSize: 24, marginLeft:"1em"}}/>
           :
           <Entypo onClick={() => {switchMode(ps => !ps);}} name='light-up' style={{ fontSize: 24, marginLeft:"1em" }}/>
            }
         </Text>
         <Text style={{ fontSize: 24, alignSelf: "flex-start" , paddingTop: 40}}>
         <Entypo  name='lock-open' style={{ fontSize: 24, }}/>
           Privacy
         </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dbd3d8',
    padding:'80 20 0 20',
  },

  leftIcon: {
    marginRight: '1em',
  }    
});


// ###############################

// // Created by Yahor Senichak(xsenic00)


// // ###############################



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

  onPressPersonalInfo = () => {
    this.props.navigation.navigate('PersonalInfo')
  }
  
  onPressPrivacy = () => {
    this.props.navigation.navigate('MyPrivacy')
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
      <Icon name='settings' style={styles.leftIcon}/>
      <Text style={styles.text}> 
      
        Settings</Text>
        <TouchableOpacity > 
        <Entypo  name='cross' style={{ fontSize: 25, alignSelf:"flex-end", paddingLeft:'60%',paddingTop:10}}/>
        </TouchableOpacity>
      </View>
      <View style={{ borderBottomColor: 'black',borderBottomWidth: 1, }} />
      <View style={styles.positions}>
      <Entypo  name='bell' style={styles.icon}/>
        <Text style={styles.text}>
         
           Notifications</Text>
          <Switch
            style={{marginLeft: 1, paddingLeft:100}}
            trackColor={{ false: "#767577", true: "#81b0ff" }}
            thumbColor={this.state.isNotificationsWorks ? "#f5dd4b" : "#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={() => this.setState({ isNotificationsWorks: !this.state.isNotificationsWorks})}
            value={this.state.isNotificationsWorks}
          />

      </View >

      <View style={styles.positions}>
      <Entypo  name='dribbble' style={styles.icon}/>
         <Text style={styles.text}>
           Language
          </Text>
      </View>
      <View  >
            
      <Picker selectedValue={this.state.selectedValue} style={{ height: 40, width: '40%',  fontSize:24 }} onValueChange={(itemValue,itemIndex) => this.setState({selectedValue: itemValue})}>
              <Picker.Item label='English'  value="en" />
              <Picker.Item label='Russian'  value="ru" />
              <Picker.Item label='Czech'  value="cz" />

          </Picker>
      </View>
         
      <View style={styles.positions}>
        <Entypo  name='user' style={styles.icon}/> 
          <TouchableOpacity onPress={this.onPressPersonalInfo}>
            <Text style={styles.text}>Personal Information </Text>
          </TouchableOpacity>

      </View>

        
      <View style={styles.positions}>
          <Entypo  name='light-up' style={styles.icon}/>
           <Text style={styles.text}>Mode </Text>
           {this.state.mode ? 
           <Entypo  onClick={() => {this.setState({mode: !this.state.mode})}} name='moon' style={{ fontSize: 24, marginLeft:1, paddingLeft:180}}/>
           :
           <Entypo onClick={() => {this.setState({mode: !this.state.mode})}} name='light-up' style={{ fontSize: 24, marginLeft:1 }}/>
            }
      </View>
 
       
         
      <View style={styles.positions}>
      <Entypo  name='lock-open' style={styles.icon}/>
         <TouchableOpacity onPress={this.onPressPrivacy}> 
           <Text style={styles.text}>Privacy </Text>
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
  positions:{
    flexDirection: "row",
    width:"80%",
    paddingTop:20
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
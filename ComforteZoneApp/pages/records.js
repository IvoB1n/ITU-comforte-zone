// created by Senichak Yahor (xsenic00)
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Switch, Image } from 'react-native';
import { Icon } from 'react-native-elements'
import Entypo from 'react-native-vector-icons/Entypo';
import {  Picker } from "react-native";
import { Button , TouchableOpacity} from 'react-native';
import { height, style, text } from 'dom-helpers';



export default class MyRecords extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      want_to_change_pass:false,
   };
  }

  

  render(){
  return (
    
    <View style={styles.container}>
      <View style={styles.positions}>
      <Entypo name='medal' style={{ fontSize:30}}/>
      <Text style={styles.text}> 
      
        Records</Text>
        {/* <TouchableOpacity > 
        <Entypo  name='cross' style={{ fontSize: 25, alignSelf:"flex-end", paddingLeft:'60%',paddingTop:5}}/>
        </TouchableOpacity> */}
      </View>
      <View style={{ borderBottomColor: 'black', }} />
      
      <View>
      <Image style={styles.image}  source={require("../images/pedestal.png")}/>
      </View>

      <View style={styles.usersPosition}>

        <View style={{alignItems:'center', flexDirection:"row", paddingLeft:50}}>
          <View style={{paddingRight:30}}>
            <TouchableOpacity>
              <Image style={{height:50,width:50, alignSelf:"flex-start",paddingHorizontal:15}}  source={require("../images/user.png")}/>
            </TouchableOpacity>
          </View>
          <View style={{paddingRight:30}}>
            <TouchableOpacity>
              <Image style={{height:50,width:50, alignSelf:"flex-start",paddingHorizontal:15}}  source={require("../images/user.png")}/>
            </TouchableOpacity>
          </View>
          <View style={{paddingRight:30}}>
            <TouchableOpacity>
              <Image style={{height:50,width:50, alignSelf:"flex-start",paddingHorizontal:15}}  source={require("../images/user.png")}/>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.usersPosition}>

        <View style={{alignItems:'center', flexDirection:"row", paddingLeft:40}}>
            <View style={{paddingRight:30, width:'33%'}}>
              <Text style={{fontSize:12, fontWeight:'bold'}}>   You</Text>
              <Text style={{fontSize:12, }}> Level:7</Text>
            </View>
          <View style={{paddingRight:30, width:'33%'}}>
            <Text style={{fontSize:12, fontWeight:'bold'}}> Caroline</Text>
            <Text style={{fontSize:12, }}> Level:10</Text>
          </View>
          <View style={{paddingRight:30, width:'33%'}}>
            <Text style={{fontSize:12, fontWeight:'bold'}}>  Alexa</Text>
            <Text style={{fontSize:12, }}> Level:6</Text>
          </View>
        </View>
      </View>
      <View style={{paddingTop:20}}></View>
      <TouchableOpacity style={styles.button} onPress={this.onPress}>
        <Text>4</Text>
        <View style={{paddingLeft:10}}>
          <Image style={{height:20,width:20, alignSelf:"flex-start",paddingLeft:0}}  source={require("../images/user.png")}/>
        </View>
        <View style={{paddingLeft:10}}>
          <Text style={{fontSize:12, fontWeight:'bold'}}>Homer Simpson</Text>
        </View>
        <View style={{alignSelf:'flex-end', paddingLeft:40}}>
          <Text style={{fontSize:12, fontWeight:'bold', color:"#d77a61"}}>   Score: 532</Text>
        </View>
      </TouchableOpacity>

      <View style={{paddingTop:10}}></View>
      <TouchableOpacity style={styles.button} onPress={this.onPress}>
        <Text>5</Text>
        <View style={{paddingLeft:10}}>
          <Image style={{height:20,width:20, alignSelf:"flex-start",paddingLeft:0}}  source={require("../images/user.png")}/>
        </View>
        <View style={{paddingLeft:10}}>
          <Text style={{fontSize:12, fontWeight:'bold'}}>Donald Trump</Text>
        </View>
        <View style={{alignSelf:'flex-end', paddingLeft:50}}>
          <Text style={{fontSize:12, fontWeight:'bold', color:"#d77a61"}}>   Score: 530</Text>
        </View>
      </TouchableOpacity>

      <View style={{paddingTop:10}}></View>
      <TouchableOpacity style={styles.button} onPress={this.onPress}>
        <Text>6</Text>
        <View style={{paddingLeft:10}}>
          <Image style={{height:20,width:20, alignSelf:"flex-start",paddingLeft:0}}  source={require("../images/user.png")}/>
        </View>
        <View style={{paddingLeft:10}}>
          <Text style={{fontSize:12, fontWeight:'bold'}}>Nikolaj Baskov</Text>
        </View>
        <View style={{alignSelf:'flex-end', paddingLeft:50}}>
          <Text style={{fontSize:12, fontWeight:'bold', color:"#d77a61"}}>  Score: 498</Text>
        </View>
      </TouchableOpacity>

      <View style={{paddingTop:10}}></View>
      <TouchableOpacity style={styles.button} onPress={this.onPress}>
        <Text>7</Text>
        <View style={{paddingLeft:10}}>
          <Image style={{height:20,width:20, alignSelf:"flex-start",paddingLeft:0}}  source={require("../images/user.png")}/>
        </View>
        <View style={{paddingLeft:10}}>
          <Text style={{fontSize:12, fontWeight:'bold'}}>Adam Lambert</Text>
        </View>
        <View style={{alignSelf:'flex-end', paddingLeft:60}}>
          <Text style={{fontSize:12, fontWeight:'bold', color:"#d77a61"}}>Score: 42</Text>
        </View>
      </TouchableOpacity>

      
    </View>
    
  );}
}

const styles = StyleSheet.create({
  colom:{
    width:"33%"

  },

  button: {
    flexDirection:'row',
    alignItems: 'center',
    backgroundColor: '#d8b4a0',
    height:40,
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    width:'80%',
    
  },
  container: {
    flex: 1,
    backgroundColor: '#dbd3d8',
    paddingTop:20,
    alignItems:"center"    
  },
  positions:{
    flexDirection: "row",
    width:"80%",
    paddingTop:40,
    paddingBottom:40,

  },
  usersPosition:{
    flexDirection: "row",
    width:"80%",
    paddingTop:40,
    alignItems:"center"

  },

  text: {
    fontSize: 24, 
    alignItems:'center',
  },
  image:{
    alignItems:'center',
    height:150,
    width:150,
    paddingTop:80
  },
  users:{
    flex:1,
    alignItems:'center',
    height:5,
    width:5,
    
    paddingTop:80
  }
});
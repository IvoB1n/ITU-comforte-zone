import React, { useState } from 'react';
import { Component } from 'react';
import { StyleSheet, TouchableHighlight, Image, Text, SafeAreaView, View, TouchableOpacity } from 'react-native';

const tasks = [
    {
        id: 1,
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam eget nisl. In enim a arcu imperdiet malesuada. Morbi scelerisque luctus velit. Curabitur bibendum justo non orci. Etiam posuere lacus quis dolor. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris dictum facilisis augue. Integer vulputate sem a nibh rutrum consequat. Phasellus faucibus molestie nisl. Nulla non arcu lacinia neque faucibus fringilla."
    },
    {
        id: 2,
        title: "Lorem Ipsum 2",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam eget nisl. In enim a arcu imperdiet malesuada. Morbi scelerisque luctus velit. Curabitur bibendum justo non orci. Etiam posuere lacus quis dolor. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Mauris dictum facilisis augue. Integer vulputate sem a nibh rutrum consequat. Phasellus faucibus molestie nisl. Nulla non arcu lacinia neque faucibus fringilla."
    },
    {
        id: 3,
        title: "Lorem Ipsum 3",
        description: "Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Donec iaculis gravida nulla. Praesent id justo in neque elementum ultrices. Quisque porta. Integer pellentesque quam vel velit. Nullam faucibus mi quis velit. Integer rutrum, orci vestibulum ullamcorper ultricies, lacus quam ultricies odio, vitae placerat pede sem sit amet enim. Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Nulla non lectus sed nisl molestie malesuada. Duis bibendum, lectus ut viverra rhoncus, dolor nunc faucibus libero, eget facilisis enim ipsum id lacus. Duis ante orci, molestie vitae vehicula venenatis, tincidunt ac pede."
    },

]

const users = [
    {
        id: 1,
        nickname: "Adam",
        avatarLink: "../assets/man_avatar.png",
        level: 7,
        maxXP: 500,
        userXP: 100,
    },
    {
        id: 2,
        nickname: "Caroline",
        avatarLink: "../assets/woman_avatar.jpeg",
        level: 10,
        maxXP: 1000,
        userXP: 650,
    },
    {
        id: 3,
        nickname: "Alexa",
        avatarLink: "../assets/blue_avatar.png",
        level: 3,
        maxXP: 100,
        userXP: 0
    }
]


class TaskDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernumber : 0,
            taskID: 2,
        }
    }

    render() {
        return (
        <SafeAreaView style={styles.container}>
            <View style={styles.middle}>
                <View style={{alignItems: 'center'}}>
                    <TouchableHighlight
                        style={styles.avatarContainer}>
                    <Image 
                    style={styles.avatar}
                    source={require('../assets/man_avatar.png')} />
                    </TouchableHighlight>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>{users[this.state.usernumber].nickname}</Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>Level {users[this.state.usernumber].level}</Text>
                </View>
                <TouchableOpacity>
                    <Text style={{padding: 30}}>Click me</Text>
                </TouchableOpacity>
                <View>
                    <Text style={{fontSize: 22, fontWeight: 500}}>{tasks[this.state.taskID].title}</Text>
                    <Text style={{fontSize: 22}}>{tasks[this.state.taskID].description}</Text>
                </View>
            </View>
            <View style={styles.bottom} />

        </SafeAreaView>
        )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "space-between",
    backgroundColor: "#fff",
    color: "#223843"
    // padding: 20,
  },
  middle: {
    flex: 0.9,
    backgroundColor: "#dbd3d8",
  },
  bottom: {
    flex: 0.1,
    backgroundColor: "#d77a61",
  },

  avatarContainer: {
          

    margin: 10,
    height: 130,
    width: 130,
    borderRadius: 65,
    borderWidth: 5,
    borderColor: "#223843",
    overflow: 'hidden'
  },
  avatar: {
      resizeMode: "contain",
      width: 120,
      height: 120,
      borderRadius: 40,

  }
});

export default TaskDescription;
import React, { useState } from 'react';
import { Component } from 'react';
import { StyleSheet, TouchableHighlight, Image, Text, FlatList, SafeAreaView, View, TouchableOpacity, Pressable } from 'react-native';
import {Ionicons} from 'react-native-vector-icons';
import { tasks } from '../../data/tasks.json';
import { users } from '../../data/users.json';
import NavigationMain from '../homepage/navigation';

const links = [
    {
        avatar: require('../../assets/man_avatar.png')
    },
    {
        avatar: require('../../assets/woman_avatar.jpeg')
    },
    {
        avatar: require('../../assets/man_avatar2.jpeg')
    },
    {
        avatar: require('../../assets/blue_avatar.png')
    }  
]

class FriendBox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userID,
        }
    }

    render() {
        return (
            <View>
                <TouchableHighlight
                    style={styles.friendAvatarContainer}>
                    <Image 
                        style={styles.friendAvatar}
                        source={links[this.state.user].avatar} />
                </TouchableHighlight>
                <View style={{alignItems: 'center'}}>
                    <Text style={styles.friendInfo}>
                        {users[this.state.user].nickname}
                    </Text>
                    <Text style={styles.friendInfo}>
                        Level {users[this.state.user].level}
                    </Text>
                </View>
            </View>
        )
    }
}


class UserPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernumber: 0,
            friend1: 1,
            friend2: 2,
            friend3: 3,
            taskID: 2,
            navigation: this.props.navigation,
        }
    }

    render() {
        return (
        <SafeAreaView style={styles.container}>
            <View style={styles.middle}>
                <View style={{alignSelf: 'flex-end', margin: 5}}>
                    <Ionicons name="settings-outline" size={35} />
                </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableHighlight
                        style={styles.avatarContainer}>
                    <Image 
                    style={styles.avatar}
                    source={links[this.state.usernumber].avatar} />
                    </TouchableHighlight>
                    <Text style={styles.userInfo}>{users[this.state.usernumber].nickname}</Text>
                    <Text style={styles.userInfo}>Level {users[this.state.usernumber].level}</Text>
                </View>
                {/* <TouchableOpacity>
                    <Text style={{padding: 30}}>Click me</Text>
                </TouchableOpacity> */}
                <View style={styles.task}>
                    <Text style={styles.taskTitle}>Main Task: {tasks[this.state.taskID].title}</Text>
                    <Text style={styles.taskDescription}>{tasks[this.state.taskID].description}</Text>
                </View>
                <View style={{justifyContent: "flex-end"}}>
                    <View>
                    <Text style={styles.taskTitle}>Friends</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <FriendBox userID={this.state.friend1} />
                        <FriendBox userID={this.state.friend2} />
                        <FriendBox userID={this.state.friend3} />
                    </View>
                </View>
            </View>
            <NavigationMain navigation={this.props.navigation}/>

        </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: "space-between",
        backgroundColor: "#dbd3d8",
        color: "#223843",
    },
    middle: {
        flex: 0.9,
        backgroundColor: "#dbd3d8",
        padding: 10,
        alignContent: 'stretch',
    },
    bottom: {
        flex: 0.1,
        backgroundColor: "#d77a61",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    navIcon: {
        alignItems: 'center',
        color: '#eff1f3',
        paddingVertical: 15,
        marginHorizontal: 30,
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
    },
    friendAvatarContainer: {
        margin: 10,
        height: 100,
        width: 100,
        borderRadius: 50,
        borderWidth: 5,
        borderColor: "#223843",
        overflow: 'hidden'
    },
    friendAvatar: {
        resizeMode: "contain",
        width: 90,
        height: 90,
    },
    task: {
        // padding: "0 20 0 20",
        minHeight: 200,
        paddingVertical: 20,
        alignContent: 'flex-start',
    },
    userInfo: {
        alignContent: 'flex-end',
        fontSize: 18,
        fontWeight: 'bold'
    },
    friendInfo: {
        alignContent: 'flex-end',
        fontSize: 16,
        fontWeight: 'bold'
    },
    taskTitle: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    taskDescription: {
        fontSize: 16,
    },
});

export default UserPage;
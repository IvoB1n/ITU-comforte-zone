import React, { useState } from 'react';
import { Component } from 'react';
import { StyleSheet, TouchableHighlight, Image, Text, FlatList, SafeAreaView, View, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {FontAwesome5} from 'react-native-vector-icons';


const tasks = [
    {
        id: 1,
        title: "Lorem Ipsum",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam eget nisl. "
    },
    {
        id: 2,
        title: "Lorem Ipsum 2",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam eget nisl. In enim a."
    },
    {
        id: 3,
        title: "Lorem Ipsum 3",
        description: "Mauris dolor felis, sagittis at, luctus sed, aliquam non, tellus. Donec iaculis gravida nulla. Praesent id justo in neque elementum ultrices. "
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
        avatarLink: require("../assets/woman_avatar.jpeg"),
        level: 10,
        maxXP: 1000,
        userXP: 650,
    },
    {
        id: 3,
        nickname: "Vasilis",
        avatarLink: require("../assets/man_avatar2.jpeg"),
        level: 3,
        maxXP: 100,
        userXP: 0
    },
    {
        id: 4,
        nickname: "Alexa",
        avatarLink: require("../assets/blue_avatar.png"),
        level: 6,
        maxXP: 450,
        userXP: 50
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
                        source={users[this.state.user].avatarLink} />
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


class TaskDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernumber: 0,
            friend1: 1,
            friend2: 2,
            friend3: 3,
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
            <View style={styles.bottom}>
                <FontAwesome name="home" size={35} color='#eff1f3' style={styles.navIcon} />
                <FontAwesome5 name="tasks" size={35} color='#eff1f3' style={styles.navIcon} />
                <FontAwesome name="star" size={35} color='#eff1f3' style={styles.navIcon} />
            </View>

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
        paddingVertical: 10,
        marginHorizontal: 30
        // paddingHorizontal: 40,
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

export default TaskDescription;
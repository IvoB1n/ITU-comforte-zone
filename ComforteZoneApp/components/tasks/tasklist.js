import React, { useState } from 'react';
import { Component } from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView, ScrollView, View, Pressable } from 'react-native';
import NavigationMain from '../homepage/navigation';
import { ProgressBar } from 'react-native-paper';
import { Foundation } from 'react-native-vector-icons';
import { Ionicons } from 'react-native-vector-icons';



class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userID,
            userExp: 350,
            maxExp: 500,
            numOfTasks: 5,
        }
    }

    render() {
        return (
            <SafeAreaView style={styles.container} >
                <View style={styles.middle}>
                    <View style={styles.userInfo}>
                        <Text style={styles.text}>Level 7</Text>
                        <Text style={styles.text}>{this.state.userExp}/{this.state.maxExp} XP</Text>
                        
                    </View>
                    <View style={styles.progress}>
                        <ProgressBar
                            style={styles.progressBar}
                            indeterminate={false}
                            progress={this.state.userExp/this.state.maxExp}
                            color="#d77a61" />
                    </View>
                    <View style={styles.tasks}>
                        <View>
                            <Text style={{fontSize: 22, fontWeight: 'bold'}}>
                                Current tasks:
                            </Text>
                        </View>
                        <View style={{marginVertical: 5}}>
                            <ScrollView 
                                showsVerticalScrollIndicator={false}
                                fadingEdgeLength={100}
                                style={{flexGrow: 0.8}}>
                            <Pressable style={styles.task}>
                                <Foundation name="list" size={40} style={styles.taskIcon} />
                                <View style={{margin: 5}}>
                                    <Text style={styles.taskTitle}>Task Title</Text>
                                    <Text>Category: Society</Text>
                                </View>

                            </Pressable>
                            <Pressable style={styles.task}>

                            </Pressable>
                            <Pressable style={[styles.task, {backgroundColor: "#d77a61"}]}>
                                <Ionicons name="checkmark-done-sharp" size={40} style={styles.taskIcon} />
                                <View style={{margin: 5}}>
                                    <Text style={styles.taskTitle}>Task Title</Text>
                                    <Text>Category: Relatives</Text>
                                </View>
                            </Pressable>
                            <Pressable style={[styles.task, {backgroundColor: "#d77a61"}]}>
                                <Ionicons name="checkmark-done-sharp" size={40} style={styles.taskIcon} />
                                <View style={{margin: 5}}>
                                    <Text style={styles.taskTitle}>Task Title</Text>
                                    <Text>Category: Relatives</Text>
                                </View>
                            </Pressable>
                            <Pressable style={styles.task}></Pressable>
                             <Pressable style={[styles.task, {backgroundColor: "#d77a61"}]}>
                                <Ionicons name="checkmark-done-sharp" size={40} style={styles.taskIcon} />
                                <View style={{margin: 5}}>
                                    <Text style={styles.taskTitle}>Task Title</Text>
                                    <Text>Category: Relatives</Text>
                                </View>
                            </Pressable>
                            <Pressable style={styles.task}></Pressable>
                            <Pressable style={styles.task}></Pressable>
                            <Pressable style={styles.task}></Pressable>
                            <Pressable style={styles.task}></Pressable>
                            <Pressable style={styles.task}></Pressable>
                            <Pressable style={styles.task}></Pressable>
                            </ScrollView>
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
        justifyContent: "space-between",
        backgroundColor: "#dbd3d8",
        color: "#223843",
    },
    middle: {
        flex: 0.9,
        backgroundColor: "#dbd3d8",
        marginTop: 50,
        padding: 10,
        // justifyContent: 'center',
        alignItems: 'center'
    },
    bottom: {
        flex: 0.1,
        backgroundColor: "#d77a61",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    userInfo: {
        alignItems: 'center',
    },
    text: {
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold',
    },
    progress: {
        marginTop: 5,
        width: 250
    },
    progressBar: {
        alignSelf: 'center',
        height: 15,
    },
    tasks: {
        marginTop: 20,
        justifyContent: 'flex-start'
    },
    task: {
        marginVertical: 3,
        height: 70,
        minWidth: 350,
        maxWidth: 500,
        backgroundColor: '#eff1f3',
        borderRadius: 20,
        borderColor: '#223843',
        borderWidth: 2,
        alignContent: 'stretch',
        flexDirection: 'row',
        flexShrink: 1,
        flexWrap: 'wrap'
    },
    taskTitle: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: "bold"
    },
    taskIcon: {
        margin: 10
    }
});

export default TaskList;
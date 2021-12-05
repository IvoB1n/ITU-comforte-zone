import React, { useState } from 'react';
import { useEffect } from 'react';
import { Component } from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView, ScrollView, View, Pressable, ActivityIndicator } from 'react-native';
import NavigationMain from '../homepage/navigation';
import { ProgressBar } from 'react-native-paper';
import { Foundation } from 'react-native-vector-icons';
import { Ionicons } from 'react-native-vector-icons';
import { MaterialIcons } from 'react-native-vector-icons';
import { createPortal } from 'react-dom';


class TaskList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: 7,
            userExp: 35,
            maxExp: 100,
            numOfTasks: 5,
            tasklist: null,
            resolved: this.props.route.params.resolved,
        }
    }

    componentDidMount = () => {
        console.log("MOUNT", this.state.resolved, this.props.route.params.resolved)
        this.tasklist()
    }
 
    componentDidUpdate = (prevProps) => {
        console.log("UPDATE", prevProps.route.params.resolved, this.props.route.params.resolved, prevProps.route.params.taskId,this.props.route.params.taskId)
        if((prevProps.route.params.resolved !== this.props.route.params.resolved) || this.props.route.params.taskId) {
            this.tasklist()
            console.log('RESOLVED', this.state.resolved)
        }
        
    }

    tasklist = async () => {
        if (this.state.resolved > 0) {
            console.log('TASKLIST')
            try {
                const response = await fetch('https://itu-comforte-zone.herokuapp.com/api/task/get_user_tasks', {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                    id: this.state.user,
                    })
                });
                const json = await response.json();
                // console.log(json);
                if (json) {
                    this.setState({tasklist: json.task_list})
                    this.setState({resolved: 0})
                    console.log("LIST", this.state.tasklist)
                }
            } catch (err) {
                console.log('error while downloading tasks', err)
            }
        }
    }

    convertCategory = (task) => {
        let category;
        if (task.category === 1) {
            category = "Myself"
        } else if (task.category === 2) {
            category = "Social"
        } else if (task.category === 3) {
            category = "Relatives"
        }
        return category
    }
    
    chooseIconOnStatus = (status) => {
        let icon;
        if (status === 0) {
            icon = <Foundation name="list" size={40} style={styles.taskIcon} />
        } else if (status === 1) {
            icon = <MaterialIcons name="done" size={40} style={styles.taskIcon} />
        } else if (status === 2) {
            icon = <MaterialIcons name="not-interested" size={40} style={styles.taskIcon} />
        }
        return icon
    }

    renderItem = ({item}) => {
        return (
            <Pressable style={styles.task} 
                onPress={() => this.props.navigation.navigate('Task', 
                {userId: this.state.user,
                task: item})}>
                {this.chooseIconOnStatus(item.resolved)}
                <View style={{margin: 5, flex: 0.8}}>
                    <Text style={styles.taskTitle}>{item.header}</Text>
                    <Text>Category: {this.convertCategory(item)}</Text>
                </View>
                <Text style={{alignSelf:'center', fontWeight: 'bold'}}>+{item.points} XP</Text>
            </Pressable>
        )
    }

    keyExtractor = (item, index) => {
        return item.id;
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
                            {this.state.tasklist ? 
                            <FlatList
                                style={{flexGrow: 0.8}}
                                showsVerticalScrollIndicator={false}
                                fadingEdgeLength={200}
                                data={this.state.tasklist}
                                // keyExtractor={this.keyExtractor}
                                renderItem={this.renderItem}
                            />                                
                            : <ActivityIndicator size="large" color="#d77a61" style={{marginTop: 50}} />  }
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
        flex: 0.15,
        margin: 10
    }
});

export default TaskList;
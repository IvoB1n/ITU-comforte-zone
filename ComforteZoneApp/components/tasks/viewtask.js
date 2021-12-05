// created by Carasec Elena (xcaras00)
import React, { useState } from 'react';
import { Component } from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView, ScrollView, View, Pressable, Image, Alert } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';
import ConfettiCannon from 'react-native-confetti-cannon';



class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: this.props.route.params.userId,
            taskId: this.props.route.params.task.id,
            exp: this.props.route.params.task.points,
            // animate: false,
        }
    }

    onDecline = async () => {
        try {
            const response = await fetch('https://itu-comforte-zone.herokuapp.com/api/task/update_user_task', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: this.state.userId,
                    taskId: this.state.taskId,
                    resolved: 2,
                })
            });
            const json = await response.json();
                console.log("DECLINE", json)
            if (json) {
                console.log(json)
                Alert.alert(
                "Task was declined",
                "Would you like our psychologist connect with you?",
                [
                    {
                    text: "No",
                    onPress: () => this.props.navigation.navigate('TaskList', 
                                        {taskId: this.state.taskId, resolved: 2}),
                    },
                    { text: "Yes",
                    onPress: () => this.props.navigation.navigate('TaskList', 
                                        {taskId: this.state.taskId, resolved: 2}) }
                ]
                );

                
            }
        } catch (err) {
            console.log('error while declining', err)
        }
    }

//     performTimeConsumingTask = async() => {
//     return new Promise((resolve) =>
//       setTimeout(
//         () => { resolve('result') },
//         5000
//       )
//     );
//   }

    onMarkAsDone = async () => {
        // this.setState({ animate: true })
        console.log("USERID", this.state.userId)
        try {
            const response = await fetch('https://itu-comforte-zone.herokuapp.com/api/task/update_user_task', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    userId: this.state.userId,
                    taskId: this.state.taskId,
                    resolved: 1,
                })
            });
            const json = await response.json();
                console.log("DONE", json)
            if (json) {
                console.log(json)
                
                // const data = await this.performTimeConsumingTask()
                this.props.navigation.navigate('Congrats', 
                {
                    exp: this.state.exp
                })
            }
        } catch (err) {
            console.log('error while declining', err)
        }
    }

    render() {
        const { userId, task} = this.props.route.params;

        let category;
        let img;
        if (task.category === 1) {
            category = "Myself"
            img = <Image style={styles.img} source={require('../../assets/selfimg.jpeg')} />
        } else if (task.category === 2) {
            category = "Social"
            img = <Image style={styles.img} source={require('../../assets/taskimg.jpeg')} />
        } else if (task.category === 3) {
            category = "Relatives"
            img = <Image style={styles.img} source={require('../../assets/family.jpeg')} />
        } 
        return (
            <SafeAreaView style={styles.container} >
                
                <View style= {styles.main}>
                    <Text style={styles.taskTitle}>{task.header}</Text>
                    <Text style={styles.taskCategory}>Category: {category}</Text>
                    {img}
                    <Text style={styles.taskDescription}>{task.description}</Text>
                </View>
                <View style={styles.bottom}>
                    <Pressable style={styles.pressable} onPress={this.onDecline}>
                        <MaterialIcons name="not-interested" size={30}/>
                        <Text style={styles.button}>Decline</Text>
                    </Pressable>
                    <Pressable style={styles.pressable} onPress={this.onMarkAsDone}>
                        <MaterialIcons name="done" size={30}/>
                        <Text style={styles.button}>Mark as Done</Text>
                        
                    </Pressable>
                    
                       
                </View>
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
    main: {
        marginTop: 50,
        marginHorizontal: 20
    },
    bottom: {
        margin: 30,
        flexDirection: 'row',
        justifyContent: 'center'
    },
    taskTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        marginTop: 50
    },
    taskCategory: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20
    },
    taskDescription: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    pressable: {
        flexDirection: 'row',
        marginHorizontal: 20
    },
    img: {
        height: 300,
        alignSelf: 'center',
        marginVertical: 25,
    },
    button: {
        fontSize: 20,
        fontWeight: 'bold',
    }
});

export default Task;
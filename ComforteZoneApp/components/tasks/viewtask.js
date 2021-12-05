import React, { useState } from 'react';
import { Component } from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView, ScrollView, View, Pressable, Image } from 'react-native';
import { MaterialIcons } from 'react-native-vector-icons';



class Task extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: this.props.userID,
            userExp: 35,
            maxExp: 100,
            numOfTasks: 5,
        }
    }

    render() {
        const { user, task} = this.props.route.params;

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
                    <Pressable style={styles.pressable}>
                        <MaterialIcons name="not-interested" size={30}/>
                        <Text style={styles.button}>Decline</Text>
                    </Pressable>
                    <Pressable style={styles.pressable}>
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
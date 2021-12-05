// created by Carasec Elena (xcaras00)
import React, { useState } from 'react';
import { Component } from 'react';
import { StyleSheet, Text, FlatList, SafeAreaView, ScrollView, View, Pressable, Image, Alert } from 'react-native';
import ConfettiCannon from 'react-native-confetti-cannon';



class Congrats extends Component {


    render() {
        return (
            <SafeAreaView style={styles.container} >
                
                <View style={styles.main}>
                    
                    <Text style={[styles.text, {marginTop: 200}]}>Congratulations!</Text>
                    <Text style={styles.text}>+{this.props.route.params.exp} XP</Text>
                </View>
                <ConfettiCannon
                    count={200}
                    origin={{x: 0, y: 0}}
                    onAnimationEnd={() => this.props.navigation.navigate('TaskList', {taskId: null, resolved: 4})}
                    />
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
        marginVertical: 60,
        marginHorizontal: 20,
        alignItems: 'center'
    },
    text: {
        alignSelf: 'auto',
        fontSize: 24,
        fontWeight: 'bold'
    }
});

export default Congrats;
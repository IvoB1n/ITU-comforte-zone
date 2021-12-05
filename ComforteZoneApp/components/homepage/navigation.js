import React from 'react';
import { Component } from 'react';
import { View, StyleSheet, Pressable, Image, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from 'react-native-vector-icons';

class NavigationMain extends Component {
    render() {
        return (
            <View style={styles.bottom}>
                <Pressable 
                onPress={() => this.props.navigation.navigate('HomePage')}
                >
                <FontAwesome name="home" size={35} color='#eff1f3' style={styles.navIcon} />
                </Pressable>
                <Pressable
                    onPress={() => this.props.navigation.navigate('TaskList')}>
                <FontAwesome5 name="tasks" size={35} color='#eff1f3' style={styles.navIcon} />
                </Pressable>
                <Pressable>
                <FontAwesome name="star" size={35} color='#eff1f3' style={styles.navIcon} />
                </Pressable>
            </View>
        )
    }
}

const styles = StyleSheet.create({
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
});

export default NavigationMain;
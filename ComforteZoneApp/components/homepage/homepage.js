// created by Carasec Elena (xcaras00)
import React from 'react';
import { Component } from 'react';
import { View, StyleSheet, Pressable, Image, Text} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { FontAwesome5 } from 'react-native-vector-icons';
import { users } from '../../data/users.json';
import NavigationMain from './navigation';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usernumber: 0,
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.middle}>
                    <View style={styles.box}>
                        <Pressable
                            style={styles.avatarContainer}
                            onPress={() => this.props.navigation.navigate('UserPage')}
                            > 
                            <Image 
                            style={styles.avatar}
                            source={require('../../assets/man_avatar.png')} />
                        </Pressable>
                        <Text style={styles.text}>User Profile</Text>
                    </View>
                    <View style={styles.box}>
                        <Pressable
                            style={styles.avatarContainer}
                            onPress={() => this.props.navigation.navigate('Achievement')}
                            >
                            <Image 
                            style={styles.achievement}
                            source={require('../../assets/trophy.png')} />
                        </Pressable>
                        <Text style={styles.text}>Level: 7</Text>
                    </View>
                    <View style={styles.box}>
                        <Pressable
                            style={styles.avatarContainer}
                            onPress={() => this.props.navigation.navigate('MyRecords')}
                            >   
                            <FontAwesome5 style={styles.friends} size={70} name='user-friends' color='#223843' />
                        </Pressable>
                        <Text style={styles.text}>Friends</Text>
                    </View>
                
                </View>
                <NavigationMain navigation={this.props.navigation}/>
            </View>
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
        justifyContent: 'center',
        alignContent: 'space-between',
        alignItems: 'center',
    },
    bottom: {
        flex: 0.1,
        backgroundColor: "#d77a61",
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    box: {
        alignItems: 'center',
        marginVertical: 10
    },
    navIcon: {
        alignItems: 'center',
        color: '#eff1f3',
        paddingVertical: 15,
        marginHorizontal: 30,
    },
    avatarContainer: {
        margin: 5,
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
        borderRadius: 60,
        alignItems: 'center'
    },
    achievement: {
        margin: 15,
        resizeMode: "contain",
        width: 90,
        height: 90,
        borderRadius: 45,
        alignSelf: 'center',
    },
    friends: {
        margin: 17,
        alignSelf: 'center'
    },
    text: {
        alignItems: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
});

export default HomePage;
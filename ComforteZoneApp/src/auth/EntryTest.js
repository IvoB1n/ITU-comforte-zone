// created by Bobrov Ivan (xbobro01)
import React from 'react'
import Slider from "react-native-slider";
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'

export default class EntryTest extends React.Component {
    state = {
        q1: 0.5, q2: 0.5, q3: 0.5, q4: 0.5, q5: 0.5
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    
    entry_test = async () => {
        var { q1, q2, q3, q4, q5} = this.state
        q1 = Math.round(q1*100)
        q2 = Math.round(q2*100)
        q3 = Math.round(q3*100)
        q4 = Math.round(q4*100)
        q5 = Math.round(q5*100)
        try {
            const response = await fetch('https://itu-comforte-zone.herokuapp.com/api/user/user_info', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  email: "user@user.com",
                })
            });
            const json = await response.json();
            const response2 = await fetch('https://itu-comforte-zone.herokuapp.com/api/user/update', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: json.name,
                    password: 'user',
                    email: "user@user.com",
                    age: json.age,
                    gender: json.gender,
                    points: json.points,
                    weight_relatives: Math.round((q2 + q3 + q5)/3),
                    weight_self: Math.round((q1 + q2 + q3 +q4 +q5)/5),
                    weight_social: Math.round((q2 + q3 + q4)/3)
                })
            });
            var json2 = await response2.json();
            this.props.navigation.navigate('HomePage')
        } catch (err) {
            console.log('error signing up: ', err)
        }
    }
 
    render() {
        const { navigation } = this.props
        return (
        <View style={{justifyContent: 'center', flex: 1, backgroundColor: '#dbd3d8'}}>
            <View style={styles.container}>
                <View style={styles.huge_font}>
                    <Text style={styles.huge_font}>Entry Psychological Test</Text>
                </View>
                <View style={styles.slider_container}>
                    <Text style={styles.text_style}>How are you?</Text>
                    <Slider
                        minimumTrackTintColor = {'#d8b4a0'}
                        maximumTrackTintColor = {'#d8b4a0'}
                        thumbTintColor={"#d77a61"}
                        value={this.state.q1}
                        onValueChange={q1 => this.setState({ q1 })}
                    />
                </View>
                <View style={styles.slider_container}>
                    <Text style={styles.text_style}>Do you feel lonely?</Text>
                    <Slider
                        minimumTrackTintColor = {'#d8b4a0'}
                        maximumTrackTintColor = {'#d8b4a0'}
                        thumbTintColor={"#d77a61"}
                        value={this.state.q2}
                        onValueChange={q2 => this.setState({ q2 })}
                    />
                </View>
                <View style={styles.slider_container}>
                    <Text style={styles.text_style}>How is your relationship with relatives?</Text>
                    <Slider
                        minimumTrackTintColor = {'#d8b4a0'}
                        maximumTrackTintColor = {'#d8b4a0'}
                        thumbTintColor={"#d77a61"}
                        value={this.state.q3}
                        onValueChange={q3 => this.setState({ q3 })}
                    />
                </View>
                <View style={styles.slider_container}>
                    <Text style={styles.text_style}>Do you like talking to strangers?</Text>
                    <Slider
                        minimumTrackTintColor = {'#d8b4a0'}
                        maximumTrackTintColor = {'#d8b4a0'}
                        thumbTintColor={"#d77a61"}
                        value={this.state.q4}
                        onValueChange={q4 => this.setState({ q4 })}
                    />
                </View>
                <View style={styles.slider_container}>
                    <Text style={styles.text_style}>Do you need help?</Text>
                    <Slider
                        minimumTrackTintColor = {'#d8b4a0'}
                        maximumTrackTintColor = {'#d8b4a0'}
                        thumbTintColor={"#d77a61"}
                        value={this.state.q5}
                        onValueChange={q5 => this.setState({ q5 })}
                    />
                </View>
                <View style={styles.button_container}>
                    <Pressable
                        onPress={this.entry_test}
                        style={({ pressed }) => [
                            { backgroundColor: pressed ? '#d8b4a0' : '#d77a61' },
                            styles.button_container,
                            styles.wrapperCustom
                        ]}>
                            <Text style={styles.button}>
                                Submit
                            </Text>
                    </Pressable>
                </View>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    text_style: {
        fontSize: 18,
        color: '#223843',
        marginHorizontal: 10,
    },
    huge_font: {
        marginHorizontal: 10,
        fontSize: 35,
        color: '#223843',
        flex: 0,
        flexDirection: 'row',
        alignSelf: 'flex-start',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'stretch',
        marginHorizontal: 40
    },
    button: {
        fontSize: 18,
        textAlign: 'center',
        color: '#223843',
    },
    button_container: {
        marginBottom: '2%',
        marginTop: 30,
        marginHorizontal: 0,
        alignSelf: 'stretch',
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6
    },
    slider_container: {
        marginTop: 10,
        marginBottom: 10,
    },
    slider: {
        flex: 1,
        marginLeft: 30,
        marginRight: 30,
        alignItems: "stretch",
    }
})
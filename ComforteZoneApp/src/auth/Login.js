import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Alert} from 'react-native'

export default class Login extends React.Component {
    state = {
        password: '', email: ''
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    login = async () => {
        const { password, email, } = this.state
        try {
        // check pass and usrname
            console.log('user successfully logged in!: ', email, password)
            this.props.navigation.navigate('Home')
            console.log('Really&!: ', email, password)
        } catch (err) {
            console.log('error signing up: ', err)
        }
    }

    google_api_alert = () =>
    Alert.alert(
      "Registration",
      "Error with google api",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
 
    render() {
        const { navigation } = this.props
        return (
        <View style={{justifyContent: 'center', flex: 1, backgroundColor: '#dbd3d8'}}>
            <View style={styles.container}>
                <View style={styles.huge_font}>
                    <Text style={styles.huge_font}>Sing In</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    autoCapitalize="none"
                    placeholderTextColor='#223843'
                    onChangeText={val => this.onChangeText('email', val)}
                />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='#223843'
                    onChangeText={val => this.onChangeText('password', val)}
                />
                <View style={styles.button_container} onPress={this.login}>
                    <Pressable
                        onPress={this.login}
                        style={({ pressed }) => [
                            { backgroundColor: pressed ? '#d8b4a0' : '#d77a61' },
                            styles.button_container,
                            styles.wrapperCustom
                        ]}>
                            <Text style={styles.button}>
                                Sing In
                            </Text>
                    </Pressable>
                    <Pressable
                        onPress={this.google_api_alert}
                        style={({ pressed }) => [
                            { backgroundColor: pressed ? '#d8b4a0' : '#d77a61' },
                                styles.button_container,
                                styles.wrapperCustom
                            ]}>
                            <Text style={styles.button}>
                                Sing In with Google
                            </Text>
                    </Pressable>
                </View>
                <View style={styles.row_button_container} onPress={this.login}>
                <Pressable onPress={this.login} style= {styles.row_button_container}>
                        <Text style={styles.row_button}>
                            Forgot password?
                        </Text>
                    </Pressable>
                    <Pressable onPress={() => navigation.navigate('Registration')} style= {styles.row_button_container}>
                        <Text style={styles.row_button}>
                            Sing Up
                        </Text>
                    </Pressable>
                </View>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    huge_font: {
        marginHorizontal: 10,
        fontSize: 35,
        color: '#223843',
        flex: 0,
        flexDirection: 'row',
        alignSelf: 'flex-start',
    },
    input: {
        width: 350,
        height: 55,
        backgroundColor: '#d8b4a0',
        margin: 10,
        padding: 8,
        color: '#223843',
        borderRadius: 8,
        fontSize: 18,
        fontWeight: '500',
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        fontSize: 18,
        textAlign: 'center',
        color: '#223843',
    },
    row_button: {
        fontSize: 14,
        textAlign: 'center',
        color: '#223843',
    },
    button_container: {
        marginBottom: '2%',
        marginHorizontal: 10,
        alignSelf: 'stretch',
    },
    row_button_container: {
        fontSize: 18,
        marginBottom: '2%',
        marginHorizontal: 60,
        flex: 0,
        flexDirection: 'row',
    },
    wrapperCustom: {
        borderRadius: 8,
        padding: 6
    }
})
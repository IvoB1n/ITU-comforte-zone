// created by Bobrov Ivan (xbobro01)
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
            const response = await fetch('https://itu-comforte-zone.herokuapp.com/api/user/login', {
                method: 'POST',
                headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  password: password,
                  email: email,
                })
            });
            const json = await response.json();
            console.log('output', JSON.stringify({
                password: password,
                email: email,
            }))
            console.log('intput:', json)
            if (json.token) {
                console.log('user successfully registered!: ', email, password)
                this.props.navigation.navigate('HomePage')
            } else {
                this.login_alert
            }
        } catch (err) {
            console.log('error signing up: ', err)
        }
    }

    login_alert = () =>
    Alert.alert(
      "Login",
      "User does not exists or mssing required data",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );
    
    forget_password_alert = () =>
    Alert.alert(
      "Forget password",
      "We've srnd you an email, check your mailbox",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => console.log("OK Pressed") }
      ]
    );

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
                    <Text style={styles.huge_font}>Break yourself</Text>
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
                <Pressable onPress={this.forget_password_alert} style= {styles.row_button_container}>
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
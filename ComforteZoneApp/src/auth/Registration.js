import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'

export default class Registration extends React.Component {
    state = {
        name: '', password: '', email: '', age: 0, gender: ''
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    
    registration = async () => {
        const { name, password, email, age, gender} = this.state
        try {
        // check pass and usrname
            console.log('user successfully registered!: ', email, password)
            this.props.navigation.navigate('Home')
            console.log('Really&!: ', email, password)
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
                    <Text style={styles.huge_font}>Registration</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder='Name'
                    autoComplete='username'
                    autoCapitalize="none"
                    placeholderTextColor='#223843'
                    onChangeText={val => this.onChangeText('name', val)}
                    />
                <TextInput
                    style={styles.input}
                    placeholder='Email'
                    autoComplete='email'
                    keyboardType='email-address'
                    autoCapitalize="none"
                    placeholderTextColor='#223843'
                    onChangeText={val => this.onChangeText('email', val)}
                    />
                <TextInput
                    style={styles.input}
                    placeholder='Password'
                    autoComplete='password'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='#223843'
                    onChangeText={val => this.onChangeText('password', val)}
                    />
                <TextInput
                    style={styles.input}
                    placeholder='Age'
                    keyboardType='numeric'
                    autoCapitalize="none"
                    placeholderTextColor='#223843'
                    onChangeText={val => this.onChangeText('age', val)}
                    />
                <TextInput
                    style={styles.input}
                    placeholder='Gender'
                    autoComplete='gender'
                    autoCapitalize="none"
                    placeholderTextColor='#223843'
                    onChangeText={val => this.onChangeText('gender', val)}
                />
                <View style={styles.button_container} onPress={this.registration}>
                    <Pressable
                        onPress={this.registration}
                        style={({ pressed }) => [
                            { backgroundColor: pressed ? '#d8b4a0' : '#d77a61' },
                            styles.button_container,
                            styles.wrapperCustom
                        ]}>
                            <Text style={styles.button}>
                                Register
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
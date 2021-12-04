import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'

export default class EntryTest extends React.Component {
    state = {
        q1: '', q2: '', q3: '', q4: '', q5: ''
    }
    onChangeText = (key, val) => {
        this.setState({ [key]: val })
    }
    
    entry_test = async () => {
        const { q1, q2, q3, q4, q5} = this.state
        try {
        // check pass and usrq1
            console.log('user successfully registered!: ', q3, q2)
            this.props.navigation.navigate('HomePage')
            console.log('Really&!: ', q3, q2)
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
                <Text style={styles.text_style}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</Text>
                <TextInput
                    style={styles.input}
                    placeholder='type your answer'
                    autoCapitalize="none"
                    placeholderTextColor='#223843'
                    onChangeText={val => this.onChangeText('q1', val)}
                    />
                <Text style={styles.text_style}>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Text>
                <TextInput
                    style={styles.input}
                    placeholder='type your answer'
                    autoCapitalize="none"
                    placeholderTextColor='#223843'
                    onChangeText={val => this.onChangeText('q3', val)}
                    />
                <Text style={styles.text_style}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
                <TextInput
                    style={styles.input}
                    placeholder='type your answer'
                    secureTextEntry={true}
                    autoCapitalize="none"
                    placeholderTextColor='#223843'
                    onChangeText={val => this.onChangeText('q2', val)}
                    />
                <Text style={styles.text_style}>Aliquam ornare wisi eu metus.</Text>
                <TextInput
                    style={styles.input}
                    placeholder='type your answer'
                    autoCapitalize="none"
                    placeholderTextColor='#223843'
                    onChangeText={val => this.onChangeText('q4', val)}
                    />
                <Text style={styles.text_style}>Etiam egestas wisi a erat.</Text>
                <TextInput
                    style={styles.input}
                    placeholder='type your answer'
                    autoCapitalize="none"
                    placeholderTextColor='#223843'
                    onChangeText={val => this.onChangeText('q5', val)}
                />
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
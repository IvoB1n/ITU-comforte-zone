// created by Bobrov Ivan (xbobro01)
import React from 'react'
import NavigationMain from '../components/homepage/navigation'
import { View, Text, FlatList, StyleSheet, Pressable, ActivityIndicator } from 'react-native'

export default class Achievement extends React.Component {
    constructor() {
        super()
        this.state = {resolved : 1}
    }

    componentDidMount = () => {
        console.log("MOUNT")
        this.get_achieves()
    }
    
    get_achieves = async () => {
        if (this.state.resolved) {
            try {
                const response = await fetch('https://itu-comforte-zone.herokuapp.com/api/achievement/get_user_achievments', {
                    method: 'POST',
                    headers: {
                      Accept: 'application/json',
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      id: 7,
                    })
                });
                const json = await response.json();
                if (json) {
                    this.setState({achieve_list : json.achievement_list})
                    this.setState({resolved: 0})
                }
                console.log(this.state.achieve_list)
            } catch (err) {
                console.log('error signing up: ', err)
            }
        }
    }
 
    renderItem = ({item}) => {
        return (
            <Pressable >
                <View >
                    <Text style={item.has ? styles.text_big : styles.text_big_false}>{item.header + ':'}</Text>
                    <Text style={item.has ? styles.text_small : styles.text_small_false}> {item.description}</Text>
                </View>
            </Pressable>
        )
    }

    render() {
        this.get_achieves()
        return (
        <View style={{justifyContent: 'center', flex: 1, backgroundColor: '#dbd3d8'}}>
            <View style={styles.container}>
                <View style={styles.huge_font}>
                    <Text style={styles.huge_font}>Achievements</Text>
                </View>
                <View style={{marginVertical: 15, alignSelf: 'stretch',}}>
                            {this.state.achieve_list ? 
                            <FlatList
                                style={{flexGrow: 1}}
                                showsVerticalScrollIndicator={false}
                                fadingEdgeLength={200}
                                data={this.state.achieve_list}
                                renderItem={this.renderItem}
                            />                                
                            : <ActivityIndicator size="large" color="#d77a61" style={{marginTop: 50}} />  }
                </View>
            </View>
            <NavigationMain navigation={this.props.navigation}/>
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
    text_small: {
        fontSize: 16,
        color: '#223843',
        // marginHorizontal: 10,
        marginLeft: 30,
    },
    text_big: {
        fontSize: 22,
        color: '#223843',
        marginHorizontal: 10,
    },
    text_small_false: {
        fontSize: 16,
        color: '#d8b4a0',
        // marginHorizontal: 10,
        marginLeft: 30,
    },
    text_big_false: {
        fontSize: 22,
        color: '#d8b4a0',
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
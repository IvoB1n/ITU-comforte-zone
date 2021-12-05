// created by Bobrov Ivan (xbobro01)
import React from 'react'
import { View, Text} from 'react-native'

export default class Home extends React.Component {
    render() {
        const { navigation } = this.props
        return (
        <View style={{justifyContent: 'center', flex: 1, backgroundColor: '#dbd3d8'}}>
            <Text>HOME PAGE</Text>
        </View>
        )
    }
}
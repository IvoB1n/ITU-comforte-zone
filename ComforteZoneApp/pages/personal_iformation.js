import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class PersonalInfo extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add friends here!</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#dbd3d8',
      padding:'80 20 0 20',
    }
});


export default PersonalInfo;

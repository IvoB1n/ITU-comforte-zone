import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

class info extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to MySocialNetwork!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default info;
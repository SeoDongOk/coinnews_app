import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.home}>
        <Text>Home</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  home: {},
});

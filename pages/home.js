import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class Home extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.pageName}>Welcome to LENONET  !!</Text>

        <TouchableOpacity onPress={() => navigate('Login')} style={styles.btn1}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate('Register')}
          style={styles.btn2}>
          <Text style={styles.btnText}>Register</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn1: {
    backgroundColor: 'green',
    padding: 10,
    margin: 10,
    width: '25%',
  },
  btn2: {
    backgroundColor: 'green',
    padding: 10,
    margin: 10,
    width: '25%',
  },
  pageName: {
    margin: 10,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
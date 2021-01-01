import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
//import Config from '/config';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      userEmail: '',
      userType:'', //added
      userPassword: '',
    };
  }

  userRegister = () => {
    const { userName } = this.state;
    const { userEmail } = this.state;
    const { userType } = this.state;
    const { userPassword } = this.state;

    fetch('https://hardeepwork.000webhostapp.com/react/login.php', {
      method: 'post',
      header: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        name: userName,
        email: userEmail,
        name: userType,
        password: userPassword,
      }),
    })
      .then((response) => response.json())
      .then((responseJson) => {
        alert(responseJson);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.pageName}>Create Account</Text>
        <TextInput
          placeholder="Enter Name"
          style={{
            width: 250,
            color:"green",
            height: 50,
            margin: 10,
            borderColor: '#333',
            borderWidth: 1,
          }}
          underlineColorAndroid="transparent"
          onChangeText={(userName) => this.setState({ userName })}
        />

        <TextInput
          placeholder="Enter Email"
          style={{
            width: 250,
            color:"green",
            height: 50,
            margin: 10,
            borderColor: '#333',
            borderWidth: 1,
          }}
          underlineColorAndroid="transparent"
          onChangeText={(userEmail) => this.setState({ userEmail })}
        />

<TextInput
          placeholder="User Type"
          style={{
            color:"green",
            width: 250,
            height: 50,
            margin: 10,
            borderColor: '#333',
            borderWidth: 1,
          }}
          underlineColorAndroid="transparent"
          onChangeText={(userName) => this.setState({ userType })}
        />

        <TextInput
          placeholder="Enter Password"
          style={{
            color:"green",
            width: 250,
            height: 50,
            margin: 10,
            borderColor: '#333',
            borderWidth: 1,
          }}
          underlineColorAndroid="transparent"
          onChangeText={(userPassword) => this.setState({ userPassword })}
        />

        <TouchableOpacity
          onPress={this.userRegister}
          style={{
            width: 250,
            padding: 10,
            height: 50,
            backgroundColor: 'green',
            alignItems: 'center',
          }}>
          <Text style={{ color: '#fff' }}>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  pageName: {
    color: 'green',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

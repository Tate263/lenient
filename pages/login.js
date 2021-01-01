import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Keyboard,
  Image,
} from 'react-native';
//import config from './pages/config';

const Logo = () => {
  return (
    <Image
      source={require('./logo.jpg')}
      style={{
        position: 'center',
        top: 0,
        left: 0,
        width: 100,
        height: 100,
      }}
    />
  );
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userEmail: '',
      userPassword: '',
    };
  }

  login = () => {
    const { userEmail, userPassword } = this.state;
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    // if (userEmail === '') {
    //   //alert("Please enter Email address");
    //   this.setState({ email: 'Please enter Email address' });
    // } else if (reg.test(userEmail) === false) {
    //   //alert("Email is Not Correct");
    //   this.setState({ email: 'Email is Not Correct' });
    //   return false;
    // } else if (userPassword === '') {
    //   this.setState({ email: 'Please enter password' });
    // } else {
    //   const requestBody = {
    //     email: userEmail,
    //     password: userPassword,
    //   };

    //   fetch('https://hardeepwork.000webhostapp.com/react/login.php', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(requestBody),
    //   })
    //     .then(response => response.json())
    //     .then(responseJson => {
    //       if (responseJson === 'ok') {
    //         // redirect to profile page
    //         alert('Successfully Login');
    //         this.props.navigation.navigate('Profile');
    //       } else {
    //         alert('Wrong Login Details');
    //       }
    //     })
    //     .catch(error => {
    //       console.error(error);
    //     });
    // }

    Keyboard.dismiss();
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Logo />
        <Text style={{ padding: 10, margin: 10, color: 'red' }}>
          {this.state.email}
        </Text>

        <TextInput
          placeholder="Enter Email"
          textAlign={'center'}
          style={{ width: 200, margin: 10, zIndex: 1 }}
          onChangeText={(userEmail) => this.setState({ userEmail })}
        />

        <TextInput
          placeholder="Enter Password"
          textAlign={'center'}
          style={{ width: 200, margin: 10, zIndex: 1 }}
          onChangeText={(userPassword) => this.setState({ userPassword })}
        />

<TouchableOpacity onPress={() => navigate('profile')} style={styles.btn1}>
          <Text style={styles.btnText}>Login</Text>
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
  btn1: {
    backgroundColor: 'green',
    padding: 10,
    margin: 10,
    width: '25%',
    alignText: 'center',
  },
  btnText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  }
});

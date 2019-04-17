import React, { Component } from "react";
import { registerUser } from '../services/service';
import { TextInput, Button, View, StyleSheet, Text, TouchableHighlight,ToastAndroid } from 'react-native';

const Toast = (props) => {
  if (props.visible) {
    ToastAndroid.showWithGravityAndOffset(
      props.message,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50,
    );
    return null;
  }
  return null;
};

export default class RegisterComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    navigation.title = "RegisterComponent"

  }
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      message: 'Registered Successfully',
      user: {
        username: '', password: '', email: '', phone_number: ''
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.AddUser=this.AddUser.bind(this)
  }
  AddUser() {
    registerUser(this.state.user).then(result => {
      this.setState({ message: 'User Created Successfully', visible: true });
    }).catch(err => {
      this.setState({ message: err.message, visible: true });
    });
    this.props.navigation.navigate('LoginPage');
  }
  handleChange(e, fieldName) {
    let currentState = this.state;
    currentState.user[fieldName] = e.nativeEvent.text;
    this.setState(currentState);
  }
  register() {
    registerUser(this.state.user);
   
  }
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder='Username'
          placeholderTextColor='black'
          onChange={(e) => {
            this.handleChange(e, 'username')
          }}
        />
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          placeholderTextColor='black'
          onChange={(e) => {
            this.handleChange(e, 'password')
          }}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          placeholderTextColor='black'
          onChange={(e) => {
            this.handleChange(e, 'email')
          }}
        />
        <TextInput
          style={styles.input}
          placeholder='Phone Number'
          placeholderTextColor='black'
          onChange={(e) => {
            this.handleChange(e, 'phone_number')
          }}
        />
        <TouchableHighlight style={[styles.buttonContainer, styles.registerButton]} onPress={this.AddUser}>
          <Text style={styles.signUpText}>Register</Text>
        </TouchableHighlight>
        <Toast visible={this.state.visible} message={this.state.message} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: 'white',
    margin: 10,
    padding: 8,
    color: 'black',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',

  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  registerButton: {
    backgroundColor: "blue",
  },
  signUpText: {
    color: 'white',
    fontSize: 20
  },
});
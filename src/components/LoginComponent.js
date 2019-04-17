import React, { Component } from "react";
import { TextInput, Button, View, StyleSheet, Text, TouchableHighlight, ToastAndroid} from 'react-native';
import { loginUser } from '../services/service';

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

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible:false,
      message:'User Logged In',
     user:{  password: '', email:""}
  }

  this.login=this.login.bind(this);
  this.handleChange=this.handleChange.bind(this)
}

static navigationOptions = ({ navigation }) => {
  navigation.title = "LoginComponent"     
}
login(){
  loginUser(this.state.user).then(result=>{
      this.setState({message:'User Logged Successfully',visible:true});
  }).catch(err=>{
      this.setState({message:err.message,visible:true});
  });
  this.props.navigation.navigate('ProfilePage');
}
handleChange(e,fieldName){
  let currentState=this.state;
  currentState.user[fieldName]=e.nativeEvent.text;
  this.setState(currentState);
}

  render() {
    return (
      <View style={styles.container}>
  
        <TextInput
          style={styles.input}
          placeholder='Email/Mobileno'
          autoCapitalize="none"
          placeholderTextColor='blue'
          onChange={(e)=>{
            this.handleChange(e,'email')
        }}

        />

        <TextInput
          style={styles.input}
          placeholder='Password'
          autoCapitalize="none"
          secureTextEntry={true}
          placeholderTextColor='blue'
          onChange={(e)=>{
            this.handleChange(e,'password')
        }}

        />
        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={this.login}>
          <Text style={styles.signUpText}>Login</Text>
        </TouchableHighlight>
        <TouchableHighlight style={[styles.buttonContainer, styles.signupButton]}>
          <Text style={styles.signUpText} onPress={()=>this.props.navigation.navigate('RegisterPage')}>Signup</Text>
        </TouchableHighlight>
        <Toast visible={this.state.visible} message={this.state.message} />

        </View>
      
    );
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
    backgroundColor:'black',
    justifyContent: 'center',
    alignItems: 'center'
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
  loginButton: {
    backgroundColor: "blue",
  },
  signupButton: {
    backgroundColor: "green",
    
  },
  signUpText: {
    color: 'white',
    fontSize:20
  },


});
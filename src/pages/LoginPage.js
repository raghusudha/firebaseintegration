import React, { Component } from 'react';
import LoginComponent from '../components/LoginComponent';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <LoginComponent navigation={this.props.navigation} />
        )
    }
}
import React, { Component } from 'react';
import RegisterComponent from '../components/RegisterComponent';

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <RegisterComponent navigation={this.props.navigation} />
        )
    }
}
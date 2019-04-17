import React, { Component } from 'react';
import ProfileComponent from '../components/ProfileComponent';



export default class ProfilePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ProfileComponent navigation={this.props.navigation} />
        )
    }
}
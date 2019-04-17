import React from 'react';
import { createStackNavigator, createAppContainer } from "react-navigation";

import LoginPage from '../pages/LoginPage';
import RegisterPage from '../pages/RegisterPage';
import ProfilePage from '../pages/ProfilePage';


const Route = createStackNavigator(
    {
        LoginPage: LoginPage,
        RegisterPage:RegisterPage,
        ProfilePage:ProfilePage
    },
    {

        initialRouteName: "LoginPage"
    }
);

const RouterConfig = createAppContainer(Route);

export default RouterConfig;
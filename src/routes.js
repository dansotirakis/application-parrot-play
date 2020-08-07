import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {Image} from 'react-native';

import Parrot from './pages/parrot';
import logo from './assets/logo.png';

export default createAppContainer(
    
    // Componente cabeçalho global
    createStackNavigator({
        Parrot,
    }, {
        initialRouteName: 'Parrot',
        defaultNavigationOptions: {
            headerStyle: { backgroundColor: '#adff2f'},
            headerTitle: <Image source={logo}/>,
            headerBackTitle: null,
        },
        mode: 'modal'
    }),

);
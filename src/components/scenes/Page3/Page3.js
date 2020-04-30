import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Picker, TextField } from '../../common';
import Ionicon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const Page3 = () => {
    const hello = [
        'aeLLo1#@',
        'béllo2',
        'cello3',
        'dello4',
        'eello5',
        'eello6',
        'fello7',
        'fello8',
        'fello9',
        'gello10',
        'Hello11',
        'Hello12',
        'Hello8',
        'tello9',
        'tello10',
        'uello11',
        'jello12',
        5
    ];
    return (
        <View style={styles.root}>
            <Picker
            onValueChange={ (value) => console.log('value', value)}
            leftIcon={ <Ionicon name='ios-arrow-down' size={25} /> }
            searchIcon={ <Ionicon name='ios-search' size={30} /> }
            >
                {
                    hello.map( ( hi, index) => {
                        return (
                            <Picker.Item key={index} label={hi} value={index} itemStyle={{ color: 'black', fontSize: 15 }} />
                        )
                    })
                }
            </Picker>
            
        </View>
    )
}

export default Page3;

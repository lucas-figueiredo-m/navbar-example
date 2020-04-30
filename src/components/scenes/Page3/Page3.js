import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Picker, TextField } from '../../common';
import Ionicon from 'react-native-vector-icons/Ionicons';

import { styles } from './styles';

const Page3 = () => {
    const [pickerState, setPickerState] = useState('')
    const hello = [
        'aeLLo1#@',
        'béllo2',
        'cêllo3',
        'dello4',
        'eellô5',
        'eellõ6',
        'fello7',
        'fellõ8',
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
            onValueChange={ (value) => setPickerState(value) }
            leftIcon={ <Ionicon name='ios-arrow-down' size={25} /> }
            searchIcon={ <Ionicon name='ios-search' size={30} /> }
            cleanupIcon={ <Ionicon name='ios-backspace' size={30} /> }
            labelStyle={{ fontSize: 18 }}
            searchStyle={{ fontSize: 18, borderBottomColor: '#37027D' }}
            pickerStyle={{ height: 50, width: 200 }}
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

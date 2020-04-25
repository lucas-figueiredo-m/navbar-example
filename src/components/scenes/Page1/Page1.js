import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import Ionicon from 'react-native-vector-icons/Ionicons';
// import { TextField } from 'react-native-component-lib';
import { ActionButton } from '../../common';

const Page1 = () => {

    const data = [
        {
            icon: <Ionicon name='ios-person' size={30} color='white' />,
            backgroundColor: 'blue',
            onPress: () => console.log('Item 1')
        },
        {
            icon: <Ionicon name='ios-brush' size={30} color='white' />,
            backgroundColor: 'green',
            onPress: () => console.log('Item 2')
        },
        {
            icon: <Ionicon name='ios-fitness' size={30} color='white' />,
            backgroundColor: 'yellow',
            onPress: () => console.log('Item 3')
        }
    ]
 
    return (
        <View style={{ flex: 1, backgroundColor: 'white'}}>
            <ActionButton
            mainIcon={ () => <Ionicon name='ios-add' size={48} color={'white'} /> }
            buttons={ data }
            >
                <Text>hi</Text>
            </ActionButton>
        </View>
        
    )
}

export default Page1
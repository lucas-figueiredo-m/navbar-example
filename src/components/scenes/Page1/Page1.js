import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Animated } from 'react-native';
import { styles } from './styles'
import Ionicon from 'react-native-vector-icons/Ionicons';
// import { TextField } from 'react-native-component-lib';
import { ActionButton } from '../../common';
import { AndroidIcon } from '../../icons';

const Page1 = () => {

    const data = [
        {
            icon: <Ionicon name='ios-person' size={30} color='white' />,
            backgroundColor: 'blue',
            onPress: () => console.log('Item 1'),
            label: 'Perfil'
        },
        {
            icon: <Ionicon name='ios-information' size={30} color='white' />,
            backgroundColor: 'green',
            onPress: () => console.log('Item 2'),
            label: 'Sobre o app'
        },
        {
            icon: <Ionicon name='ios-log-out' size={30} color='white' />,
            backgroundColor: 'black',
            onPress: () => console.log('Item 3'),
            label: 'Sair'
        }
    ]
 
    return (
        <View style={{ flex: 1, backgroundColor: 'white'}}>
            <ActionButton
            mainIcon={ () => <Ionicon name='ios-add' size={48} color={'white'} /> }
            mainBackgroundColor={'red'}
            buttons={ data }
            labelStyle={styles.labelStyle}
            >
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <TouchableOpacity>
                        <AndroidIcon />
                    </TouchableOpacity>
                </View>

            </ActionButton>
        </View>
        
    )
}

export default Page1
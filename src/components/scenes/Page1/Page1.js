import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Animated, StyleSheet } from 'react-native';
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
            onPress: () => console.log('Item 3') ,
            label: 'Sair'
        }
    ]
 
    return (
        <View style={{ flex: 1, backgroundColor: 'white'}}>
            <ActionButton
            mainIcon={ () => <Ionicon name='ios-add' size={48} color={'white'} /> }
            mainBackgroundColor={'#37027D'}
            buttons={ data }
            labelStyle={styles.labelStyle}
            >
                <View style={[{width: 50, flexDirection: 'row', overflow: "hidden", alignSelf: 'flex-start' }]}>
                    <AndroidIcon />
                </View>

                <View style={[{width: 50, flexDirection: 'row-reverse', overflow: "hidden", alignSelf: 'flex-end' }]}>
                    <AndroidIcon />
                </View>

                {/*<Animated.View>
                    <AndroidIcon active={true} />
                </Animated.View>*/}

            </ActionButton>
        </View>
        
    )
}

export default Page1
import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import Ionicon from 'react-native-vector-icons/Ionicons';
// import { TextField } from 'react-native-component-lib';
import { ActionButton } from '../../common';

const Page1 = () => {

    return (
        <View style={styles.root}>

            <ActionButton
            mainIcon={ () => <Ionicon name='ios-add' size={48} color={'white'} /> }
            />

            
            
        </View>
    )
}

export default Page1
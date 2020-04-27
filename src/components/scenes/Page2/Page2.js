import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity, Animated, StyleSheet } from 'react-native';
import { styles } from './styles'
import Ionicon from 'react-native-vector-icons/Ionicons';
// import { TextField } from 'react-native-component-lib';
import { Drawer } from '../../common';
import { MenuIcon, AndroidIcon } from '../../icons';

const Page2 = () => {

    const drawerChildren = () => {
        return (
            <TouchableOpacity>
                <AndroidIcon />
            </TouchableOpacity>
        )
    }
 
    return (
        <View style={{ flex: 1, backgroundColor: 'white'}}>
            <Drawer
            backgroundColor={'#37027D'}
            drawerRight={true}
            headerHeight={20}
            drawerIcon={ () => <MenuIcon fill={'black'} stroke={'white'} /> }
            headerText={ () => <Text style={{ color: 'white' }}>Component Lib</Text> }
            drawerChildren={ () => drawerChildren() }
            //secondaryIcon={ () => <MenuIcon fill={'black'} stroke={'white'} /> }
            >
                <TouchableOpacity>
                    <AndroidIcon />
                </TouchableOpacity>
            </Drawer>
        </View>
        
    )
}

export default Page2
import React, { useState } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { styles } from './styles'
import Ionicon from 'react-native-vector-icons/Ionicons';
// import { TextField } from 'react-native-component-lib';
import { TextField } from '../../common';

const ButtonScreen = () => {
    const [email, setEmail] = useState('');
    const [secureText, toggleSecureText] = useState(true)

    const secureTextComponent = (secured) => {
        return (
            <TouchableOpacity onPress={ () => toggleSecureText( !secureText )}>
                <Ionicon name={secured ? 'ios-eye' : 'ios-eye-off'} size={35}/>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.root}>
            <TextField label='E-mail' value={email}
            onChangeText={ (text) => setEmail(text) }
            focusColor={'#37027D'} blurColor={'#666666'}
            secureTextEntry={secureText}
            secureTextComponent={ (secured) => secureTextComponent(secured) }
            labelStyle={styles.labelStyle}
            containerStyle={styles.textContainerStyle}
            textStyle={styles.textStyle}
            highlightFontOnFocus={true}
            outline={false} borderRadius={6}
            error={'error'} errorIcon={ () => <Ionicon></Ionicon>}
            />
        </View>
    )
}

export default ButtonScreen
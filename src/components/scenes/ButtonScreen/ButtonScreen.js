import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { styles } from './styles'

class ButtonScreen extends Component {
    render() {
        return (
            <View style={[styles.root, { backgroundColor: this.props.backgroundColor}]}>
                <TouchableOpacity onPress={ () => this.props.onUpperPress('black') } style={styles.buttonContainer}>
                    <Text>Botão 1</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={ () => this.props.onUpperPress('white') } style={styles.buttonContainer}>
                    <Text>Botão 2</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

export default ButtonScreen
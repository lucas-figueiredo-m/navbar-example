import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableWithoutFeedback, TouchableOpacity, Animated, Dimensions } from 'react-native';
import { styles } from './styles'

const ActionButton = (props) => {

    return (
        <TouchableOpacity opacity={0.1} activeOpacity={0.6} style={styles.mainActionButton}>
            { props.mainIcon() }
        </TouchableOpacity>
    )
}

export default ActionButton;
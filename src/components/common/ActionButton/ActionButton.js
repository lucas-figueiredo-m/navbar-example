import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableWithoutFeedback, TouchableOpacity, Animated, Dimensions, Easing } from 'react-native';
import { styles } from './styles'

const ActionButton = ({ children, mainIcon}) => {
    const [active, setActive] = useState(false);
    const [rotateAnimation, setRotate] = useState( new Animated.Value(0) );

    useEffect( () => {
        Animated.timing(rotateAnimation, {
            toValue: active ? 1 : 0,
            duration: 200,
            useNativeDriver: true
        }).start()
    })

    const spinButton = rotateAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-45deg']
    })

    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                { children }
            </View>
            
            <Animated.View style={[ { transform: [{ rotate: spinButton }]}, styles.mainActionButton]}>
                <TouchableOpacity
                onPress={ () => setActive(!active) }
                activeOpacity={0.6}
                style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                >
                    { mainIcon() }
                </TouchableOpacity>
            </Animated.View>

            {/* <Animated.View opacity={0.5} style={styles.blackView} /> */}
            
        </View>
        
    )
}

export default ActionButton;
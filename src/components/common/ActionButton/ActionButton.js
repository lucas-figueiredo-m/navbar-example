import React, { useState, useEffect, useRef } from 'react';
import { Text, View, TouchableWithoutFeedback, TouchableOpacity, Animated, Dimensions, Easing } from 'react-native';
import { styles } from './styles'

const ActionButton = ({ children, mainIcon, buttons }) => {
    const [active, setActive]             = useState(false);
    const [rotateAnimation, setRotate]    = useState( new Animated.Value(0) );
    const [slideButtons, setSlideButtons] = useState( new Animated.Value(0) ); 

    useEffect( () => {
        Animated.timing(rotateAnimation, {
            toValue: active ? 1 : 0,
            duration: 200,
            useNativeDriver: true
        }).start();

        Animated.timing(slideButtons, {
            toValue: active ? 1 : 0,
            duration: 500,
            useNativeDriver: false
        }).start()
    })

    const spinButton = rotateAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '-45deg']
    })

    const slideButtonsCallback = (index) => {
        return {
            bottom: slideButtons.interpolate({
                inputRange: [0, 1],
                outputRange: [35, 140 + index*70]
            })
        }
    }

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

            {
                buttons
                ?
                buttons.map( (button, index) => {
                    return (
                        <Animated.View key={index} style={[ slideButtonsCallback(index), styles.secondaryActionButton, { backgroundColor: button.backgroundColor, zIndex: 2 }]}>
                            <TouchableOpacity
                            onPress={ button.onPress }
                            activeOpacity={0.6}
                            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                            >
                                { button.icon }
                            </TouchableOpacity>
                        </Animated.View>
                    )
                })
                :
                null
            }

            {/* <Animated.View opacity={0.5} style={styles.blackView} /> */}
            
        </View>
        
    )
}

export default ActionButton;
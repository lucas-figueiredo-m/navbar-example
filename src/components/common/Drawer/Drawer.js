import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Animated, PanResponder, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import { styles } from './styles'

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const Drawer = ({ backgroundColor, drawerIcon, headerText, secondaryIcon, drawerRight, children, drawerChildren }) => {
    const [dimensions, setDimensions]          = useState({ window, screen });
    const [active, setActive]                  = useState(false);
   
    const [rotateAnimation, setRotate]         = useState( new Animated.Value(0) );
    const [viewOpacity, setViewOpacity]        = useState( new Animated.Value(0) );
    const [drawerPosition, setDrawePosition]   = useState( new Animated.ValueXY({ x: -window.width * 0.8, y: 0}) );

    const onChange = ({ window, screen }) => {
        setDimensions({ window, screen });
    }

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponder: () => true,
        onPanResponderMove   : (event, gesture) => {
            if ( gesture.moveX < drawerWidth ) {
                drawerPosition.setValue({ x: gesture.moveX - drawerWidth, y: 0 })
            }
        },
        onPanResponderRelease: (event, gesture) => {
            if ( gesture.moveX < drawerWidth/2) {
                Animated.timing(
                    drawerPosition, {
                        toValue: { x: -drawerWidth, y: 0 },
                        duration: 250,
                        useNativeDriver: false,
                }).start()
                setActive(false)
            } else {
                Animated.timing(
                    drawerPosition, {
                        toValue: { x: 0, y: 0 },
                        duration: 250,
                        useNativeDriver: false,
                }).start()
            }
        }
        
    });

    useEffect( () => {

        Animated.timing(rotateAnimation, {
            toValue: active ? 1 : 0,
            duration: 250,
            useNativeDriver: true
        }).start();

        Animated.timing(viewOpacity, {
            toValue: active ? 1 : 0,
            duration: 250,
            useNativeDriver: false
        }).start();
    })

    useEffect( () => {
        Dimensions.addEventListener("change", onChange);

        return () => {
            Dimensions.removeEventListener("change", onChange);
        }
    }, [])

    const width  = dimensions.window.width;
    const height = dimensions.window.height;
    const drawerWidth = width * 0.8

    const spinButton = rotateAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    })

    const shaderOpacity = viewOpacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.8]
    })
    

    return (
        <View style={styles.root}>
            <View style={[ styles.header, { zIndex: 1, width, height: height * 0.075, backgroundColor: backgroundColor, flexDirection: drawerRight ? 'row-reverse' : 'row' }]}>
                
                <Animated.View style={{ transform: [{ rotate: spinButton }] }}>
                    <TouchableOpacity onPress={ () => {
                        setActive(!active)
                        Animated.timing(
                            drawerPosition, {
                                toValue: { x: 0, y: 0 },
                                duration: 500,
                                useNativeDriver: false,
                        }).start()
                    }}
                    >
                        { drawerIcon() }    
                    </TouchableOpacity>    
                </Animated.View>
                
                { headerText() }

                {
                    secondaryIcon
                    ?
                    secondaryIcon()
                    :
                    <View />
                }
            </View>

            <View style={{ flex: 1, zIndex: 1 }}>
                { children }
            </View>

            <Animated.View
            {...panResponder.panHandlers}
            style={[ styles.drawerView, { height: height, width: drawerWidth, transform: drawerPosition.getTranslateTransform() } ]}>
                { drawerChildren() }
            </Animated.View>

            <Animated.View opacity={shaderOpacity} style={[StyleSheet.absoluteFill, { backgroundColor: 'black', zIndex: active ? 2 : 0 }]}>
                <TouchableOpacity
                onPress={ () => {
                    setActive(false)
                    Animated.timing(
                        drawerPosition, {
                            toValue: { x: -drawerWidth, y: 0 },
                            duration: 500,
                            useNativeDriver: false,
                    }).start()
                }}
                style={{ flex: 1 }}
                />
            </Animated.View>
            
        </View>
    )
}

export default Drawer;
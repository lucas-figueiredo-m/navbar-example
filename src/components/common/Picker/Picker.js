import React, { useState, useEffect } from 'react';
import { Text, View, Animated,
    TouchableOpacity, Modal,
    Dimensions, ScrollView, TextInput
} from 'react-native';
import { styles } from './styles'

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const PickerItem = ({ label, value, searchLabel, itemStyle }) => {
    return (
        <View style={{ alignItems: 'center', marginVertical: 5 }}>
            <Text style={itemStyle}>{label}</Text>
        </View>
    )
}

const Picker = ({ children, onValueChange, leftIcon, searchIcon, cleanupIcon, pickerStyle, labelStyle, searchStyle }) => {
    const [active, setActive]             = useState(false);
    const [pickerLabel, setPickerLabel]   = useState('');
    const [filterString, setFilterString] = useState('');

    const [viewOpacity, setViewOpacity]   = useState( new Animated.Value(0) );
    const [slideView, setSlideView]       = useState( new Animated.ValueXY({ x: 0, y: screen.height }))
    const [rotateAnimation, setRotate]    = useState( new Animated.Value(0) );

    const shaderOpacity = viewOpacity.interpolate({
        inputRange: [0, 1],
        outputRange: [0, 0.8]
    })

    const spinIcon = rotateAnimation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg']
    })

    const pickerAnimation = (active) => {
        Animated.timing(viewOpacity, {
            toValue: active ? 1 : 0,
            duration: 500,
            useNativeDriver: false
        }).start()

        Animated.timing(rotateAnimation, {
            toValue: active ? 1 : 0,
            duration: 300,
            useNativeDriver: false
        }).start()

        Animated.timing(slideView, {
            toValue: { x: 0, y: active ? searchIcon ? screen.height * 0.4 : screen.height * 0.6 : screen.height},
            duration: 500,
            useNativeDriver: false
        }).start()
    }

    const activateModal = () => {
        setActive(true)
        setTimeout( () => {
            pickerAnimation(true)
        }, 100)
        
    }

    const dismissModal = () => {
        pickerAnimation(false)
        setTimeout( () => {
            setActive(false)
            setFilterString('')
        }, 500)
    }

    const onItemChoose = (label, value) => {
        setPickerLabel(label)
        onValueChange(value)

        pickerAnimation(false)
        setTimeout( () => {
            setActive(false)
            setFilterString('')
        }, 500)
    }

    const removeAccent = (text) => {
        text = text.toString().toLowerCase();
        text = text.replace(new RegExp('[ÁÀÂÃáàâã]','gi'), 'a');
        text = text.replace(new RegExp('[ÉÈÊéèê]','gi'), 'e');
        text = text.replace(new RegExp('[ÍÌÎíìî]','gi'), 'i');
        text = text.replace(new RegExp('[ÓÒÔÕóòôõ]','gi'), 'o');
        text = text.replace(new RegExp('[ÚÙÛúùû]','gi'), 'u');
        return text;  
    }

    return (
        <View>
            <TouchableOpacity style={[ pickerStyle, styles.pickerContainer]} onPress={ activateModal }>
                <Text style={labelStyle}>
                {
                    pickerLabel == ''
                    ?
                    React.Children.count(children) > 0
                    ?
                    React.Children.toArray(children)[0].props.label
                    :
                    pickerLabel
                    :
                    pickerLabel
                }
                </Text>
                
                {
                    leftIcon
                    ?
                    <Animated.View style={{ transform: [{ rotateX: spinIcon }] }}>
                        {leftIcon}
                    </Animated.View>
                    :
                    null
                }
                
                
            </TouchableOpacity>
            
            <Modal
            animationType='none'
            transparent={true}
            visible={active}
            statusBarTranslucent={true}
            >
                <Animated.View opacity={shaderOpacity} style={[ styles.shaderView, { zIndex: active ? 2 : 0 }]}>
                    <TouchableOpacity onPress={ dismissModal } style={{ flex: 1 }} />
                </Animated.View>

                <Animated.View style={[{ height: searchIcon ? screen.height * 0.6 : screen.height * 0.4, transform: slideView.getTranslateTransform() }, styles.listContainer ]}>
                    <View style={styles.searchContainer}>
                        <View style={{ flex: 1 }}>
                            {searchIcon}
                        </View>
                        
                        <TextInput
                        placeholder='Digite para pesquisar ...'
                        style={[styles.searchInput, searchStyle]}
                        value={filterString}
                        
                        onChangeText={ (text) => setFilterString(text) }
                        />
                        {
                            filterString == ''
                            ?
                            <View style={{ flex: 1 }} />
                            :
                            <TouchableOpacity onPress={ () => setFilterString('') } style={{ flex: 1 }}>
                                {cleanupIcon}
                            </TouchableOpacity>
                        }
                        
                    </View>
                    <View style={{ flex: 1 }}>
                        <ScrollView style={styles.scrollContainer}>
                            {
                                React.Children.map( children, (child, index) => {
                                    if ( filterString == '' ) {
                                        return (
                                            <TouchableOpacity
                                            key={index}
                                            style={styles.pickerItemContainer}
                                            onPress={ () => onItemChoose(child.props.label, child.props.value) }
                                            >
                                                { child }
                                            </TouchableOpacity>
                                        )
                                    } else {
                                        if ( removeAccent(child.props.label).includes( removeAccent(filterString) ) ) {
                                            return (
                                                <TouchableOpacity
                                                key={index}
                                                style={styles.pickerItemContainer}
                                                onPress={ () => onItemChoose(child.props.label, child.props.value) }
                                                >
                                                    { child }
                                                </TouchableOpacity>
                                            )
                                        }
                                    }
                                })
                            }
                        </ScrollView>
                    </View>
                    
                </Animated.View>
            </Modal>

            

        </View>
    )
}

Picker.Item = PickerItem;


export default Picker;
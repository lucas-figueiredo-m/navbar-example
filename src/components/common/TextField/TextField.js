import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, Animated, Dimensions } from 'react-native';
import { styles } from './styles';

const { width, height } = Dimensions.get('window');

const TextField = (props) => {
  console.log('height', 0.0218*height)
  const [isFocused, setFocus]            = useState(false);
  const [isAnimatedFocused, setAnimated] = useState( new Animated.Value(props.value === '' ? 0 : 1) )
  const [animatedView, setAnimatedView]  = useState( new Animated.Value(props.value === '' ? 0 : 1) )
  const [focusColor, setFocusColor]      = useState('#aaa');
  const [blurColor, setBlurColor]        = useState('#000');
  const [viewHeight, getViewHeight]      = useState(0)

  useEffect( () => {
    Animated.timing( isAnimatedFocused, {
      toValue: (isFocused || props.value !== '') ? 1 : 0,
      duration: 200,
      useNativeDriver: false
    }).start();

    Animated.timing( animatedView, {
      toValue: (isFocused || props.value !== '') ? 1 : 0,
      duration: 200,
      useNativeDriver: false
    }).start();

    if ( props.focusColor )  setFocusColor(props.focusColor) 
    if ( props.blurColor )  setBlurColor(props.blurColor)
  })

  const labelStyle = {
    position: 'absolute',
    left: props.outline ? width * 0.025 : 0,
    bottom: isAnimatedFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [0, props.outline ? viewHeight - 0.033 * height : viewHeight - 0.0218 * height ],
    }),
    fontSize: isAnimatedFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [20, 14],
    }),
    color: isAnimatedFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [blurColor, focusColor],
    }),
  }

  const outlineViewStyle = {
    borderWidth: animatedView.interpolate({
      inputRange: [0, 1],
      outputRange: [1, 1.5]
    }),
    borderRadius: props.borderRadius,
    borderColor: animatedView.interpolate({
      inputRange: [0, 1],
      outputRange: [blurColor, focusColor]
    })
  }

  const normalViewStyle = {
    borderBottomWidth: 1,
    borderRadius: props.borderRadius,
    borderBottomColor: animatedView.interpolate({
      inputRange: [0, 1],
      outputRange: [blurColor, focusColor]
    })
  }
  
  return (
    <Animated.View
    onLayout={ (event) => getViewHeight(event.nativeEvent.layout.height) }
    style={[ props.containerStyle, props.outline ? outlineViewStyle : normalViewStyle ]}
    >
      
      <Animated.Text style={[labelStyle, props.labelStyle]}>
        {props.label}
      </Animated.Text>

      <TextInput
      {...props}
      onFocus={ () => setFocus(true) }
      onBlur={ () => setFocus(false)}
      blurOnSubmit={true}
      style={[ props.textStyle, { flex: 1, color: (isFocused || props.value !== '') ? props.highlightFontOnFocus ? focusColor : blurColor : blurColor } ]}
      />
      {
        props.secureTextComponent
        ?
        <View style={[styles.secureComponent, props.outline ? { right: width * 0.02 } : null]}>
          { props.secureTextComponent(props.secureTextEntry) }
        </View>
        :
        null
      }

      
      
    </Animated.View>
  );
};

export default TextField;
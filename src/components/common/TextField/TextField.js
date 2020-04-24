import React, { useState, useEffect } from 'react'
import { Text, View, TextInput, Animated, Dimensions } from 'react-native';
import { styles } from './styles';

const { width, height } = Dimensions.get('window');

const TextField = (props) => {
  const [isFocused, setFocus]            = useState(false);
  const [focusColor, setFocusColor]      = useState('#aaa');
  const [blurColor, setBlurColor]        = useState('#000');
  const [errorColor, setErrorColor]      = useState('red');
  const [viewHeight, getViewHeight]      = useState(0)

  const animatedLabel = new Animated.Value(props.value === '' ? 0 : 1);
  const animatedView  = new Animated.Value(props.value === '' ? 0 : 1);

  useEffect( () => {
    Animated.timing( animatedLabel, {
      toValue: props.error ? 2 : (isFocused || props.value !== '') ? 1 : 0,
      duration: 200,
      useNativeDriver: false
    }).start();

    Animated.timing( animatedView, {
      toValue: props.error ? 2 : (isFocused || props.value !== '') ? 1 : 0,
      duration: 200,
      useNativeDriver: false
    }).start();

    if ( props.focusColor )  setFocusColor(props.focusColor) 
    if ( props.blurColor )  setBlurColor(props.blurColor)
    if ( props.errorColor )  setErrorColor(props.errorColor)
  })

  const labelStyle = {
    position: 'absolute',
    zIndex: 1,
    left: props.outline ? width * 0.025 : 0,
    bottom: animatedLabel.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [
        0,
        props.outline ? viewHeight - 0.033 * height : viewHeight - 0.0218 * height,
        props.outline ? viewHeight - 0.033 * height : viewHeight - 0.0218 * height
      ],
    }),
    fontSize: animatedLabel.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [20, 14, 14],
    }),
    color: animatedLabel.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [blurColor, focusColor, errorColor],
    }),
  }

  const outlineViewStyle = {
    borderWidth: animatedView.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [1, 1.5, 1.5]
    }),
    backgroundColor: props.backgroundColor,
    borderRadius: props.borderRadius,
    borderColor: animatedView.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [blurColor, focusColor, errorColor]
    })
  }

  const normalViewStyle = {
    borderBottomWidth: 1,
    backgroundColor: props.backgroundColor,
    borderRadius: props.borderRadius,
    borderBottomColor: animatedView.interpolate({
      inputRange: [0, 1, 2],
      outputRange: [blurColor, focusColor, errorColor]
    })
  }
  
  return (
    <View style={props.containerStyle}>
      <Animated.View
      onLayout={ (event) => getViewHeight(event.nativeEvent.layout.height) }
      style={[ { flex: 1 }, props.outline ? outlineViewStyle : normalViewStyle ]}
      >
        
        <Animated.Text style={[labelStyle, props.labelStyle]}>
          {props.label}
        </Animated.Text>

        <TextInput
        {...props}
        onFocus={ () => setFocus(true) }
        onBlur={ () => setFocus(false)}
        blurOnSubmit={true}
        style={[ props.textStyle, { flex: 1, color: props.error ? errorColor : (isFocused || props.value !== '') ? props.highlightFontOnFocus ? focusColor : blurColor : blurColor } ]}
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

      {
        props.error
        ?
        <View style={styles.errorContainer}>
          {
            props.errorIcon
            ?
            props.errorIcon()
            :
            null
          }
          <Text style={[ styles.errorText, props.errorStyle ]}>{props.error}</Text>
        </View>
        :
        null
      }
    </View>
    
  );
};

export default TextField;
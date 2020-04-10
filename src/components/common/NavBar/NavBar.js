import React, {Component} from 'react';
import { ScrollView, View, Text, TouchableOpacity, Dimensions, Image } from 'react-native';
import { styles } from './styles'
import Ionicon from 'react-native-vector-icons/Ionicons';

// const { width, height } = Dimensions.get('window');

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

class NavBar extends Component {
    state = {
        slideIndex: 0,
        dimensions: {
          window,
          screen
        }
    }

    onChange = ({ window, screen }) => {
        this.setState({ dimensions: { window, screen } });
    };

    componentDidMount() {
        Dimensions.addEventListener("change", this.onChange);
    }

    componentWillUnmount() {
        Dimensions.removeEventListener("change", this.onChange);
    }

    render() {
        const { dimensions } = this.state;
        const width = dimensions.window.width;
        return(
            <View style={styles.root}>
                <ScrollView
                style={styles.mainContainer}
                horizontal={true}
                pagingEnabled={true}
                keyboardDismissMode='interactive'
                ref={ (node) => this.scroll = node }
                onScroll={ (event) => {
                    if ( event.nativeEvent.contentOffset.x % width == 0 ) {
                        console.log(event.nativeEvent.contentOffset.x);
                        this.setState({ slideIndex: event.nativeEvent.contentOffset.x / width })
                    } 
                }} 
                >
                    {
                        React.Children.map( this.props.children, (child, index) => {
                            return (
                                <View key={index} style={{ width: width }}>
                                    {child}
                                </View>
                            ) 
                        })
                    }


                </ScrollView>
                
                <View style={[styles.navContainer, { backgroundColor: this.props.colors[2], width: width }]}>
                    {
                        this.props.type == 'icons'
                        ?
                        this.props.icons.map( (iconText, index) => {
                            return (
                                <TouchableOpacity
                                key={index}
                                onPress={ () => this.scroll.scrollTo({ x: index * width, animated: true })}
                                style={{ }}
                                >
                                    <Ionicon
                                    name={iconText}
                                    size={this.props.iconSize}
                                    color={
                                        index == this.state.slideIndex
                                        ?
                                        this.props.colors[0]
                                        :
                                        this.props.colors[1]
                                    }
                                    />
                                </TouchableOpacity>
                            )    
                        })
                        :
                        this.props.type == 'texts'
                        ?
                        this.props.texts.map( (text, index) => {
                            return (
                                <TouchableOpacity
                                key={index}
                                onPress={ () => this.scroll.scrollTo({ x: index * width, animated: true }) }
                                >
                                    <Text style={{ color: index == this.state.slideIndex ? this.props.colors[0] : this.props.colors[1] }}>{text}</Text>
                                    
                                </TouchableOpacity>
                            )    
                        })
                        :
                        this.props.type == 'images'
                        ?
                        this.props.texts.map( (image, index) => {
                            return (
                                <TouchableOpacity
                                key={index}
                                onPress={ () => this.scroll.scrollTo({ x: index * width, animated: true }) }
                                >
                                    <Image source={image} />
                                </TouchableOpacity>
                            )
                        })
                        :
                        null
                    }
                </View>
                
            </View>
        )
    }
}

export default NavBar;
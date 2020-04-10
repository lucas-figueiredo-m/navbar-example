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
                
                <View style={[styles.navContainer, { backgroundColor: this.props.backgroundColor, width: width }]}>
                    {
                        this.props.data.map( (item, index) => {
                            if ( item.type == 'icon' ) {
                                return (
                                    <TouchableOpacity key={index}
                                    onPress={ () => this.scroll.scrollTo({ x: index * width, animated: true })}
                                    >
                                        <Ionicon
                                        name={item.content}
                                        size={item.style.size}
                                        color={ index == this.state.slideIndex ? item.style.activeColor : item.style.inactiveColor }
                                        />
                                    </TouchableOpacity>
                                )  
                            } else if ( item.type == 'text' ) {
                                return (
                                    <TouchableOpacity key={index}
                                    onPress={ () => this.scroll.scrollTo({ x: index * width, animated: true }) }
                                    >
                                        <Text style={{ color: index == this.state.slideIndex ? item.style.activeColor : item.style.inactiveColor }}>{item.content}</Text>
                                    </TouchableOpacity>
                                ) 
                            } else if ( item.type == 'image' ) {
                                return (
                                    <TouchableOpacity
                                    key={index}
                                    onPress={ () => this.scroll.scrollTo({ x: index * width, animated: true }) }
                                    >
                                        <Image resizeMode='contain' style={{ width: 30}} source={index == this.state.slideIndex ? item.content.activeImage : item.content.inactiveImage} />
                                    </TouchableOpacity>
                                )
                            }
                        })
                    }
                </View>
                
            </View>
        )
    }
}

export default NavBar;
import React, {Component} from 'react';
import { ScrollView, View, TouchableOpacity, Dimensions } from 'react-native';
import { styles } from './styles'

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

class NavBar extends Component {
    state = {
        slideIndex: 0,
        xOffset: 0,
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
            <View style={[styles.root, { flexDirection: this.props.onTop ? 'column-reverse' : 'column'}]}>
                <ScrollView
                style={styles.mainContainer}
                horizontal={true}
                pagingEnabled={true}
                keyboardDismissMode='interactive'
                showsHorizontalScrollIndicator={false}
                ref={ (node) => this.scroll = node }
                onScroll={ (event) => {
                    this.setState({ xOffset: event.nativeEvent.contentOffset.x / this.props.data.length })
                    if ( (event.nativeEvent.contentOffset.x % width).toFixed(3) == 0 ) {
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
                {
                    this.props.showBar
                    ?
                    <View style={[styles.slideBackground, { backgroundColor: this.props.backgroundColor, width: width }]}>
                        <View style={[ styles.slideBackground, { width: width / this.props.data.length, backgroundColor: this.props.barColor, left: this.state.xOffset }]} />
                    </View>
                    :
                    null
                }
                
                <View style={[styles.navContainer, { backgroundColor: this.props.backgroundColor, width: width }]}>
                    {
                        this.props.data.map( (item, index) => {
                            console.log(item)
                            return (
                                <TouchableOpacity key={index}
                                onPress={ () => this.scroll.scrollTo({ x: index * width, animated: true })}
                                >
                                    { this.props.callbackRender(this.state.slideIndex, index, item) }
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                
            </View>
        )
    }
}

export default NavBar;
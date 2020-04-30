import React, { Component } from 'react';
import { Text, StatusBar, View } from 'react-native';
// import { NavBar } from 'react-native-component-lib';
import { NavBar } from './components/common';
import ButtonScreen from './components/scenes/ButtonScreen/ButtonScreen';
import Page1 from './components/scenes/Page1/Page1';
import Page2 from './components/scenes/Page2/Page2';
import Page3 from './components/scenes/Page3/Page3';
import Ionicon from 'react-native-vector-icons/Ionicons';

const testData = [
    'ios-home',
    'ios-pie',
    'ios-notifications',
    'ios-person',
]

class App extends Component {

  state = {
    barColor: 'white',
    highlightColor: 'green'
  }

  upperCallback = (childData) => {
    this.setState({ barColor: childData})
  }

  lowerCallback = (childData) => {
    this.setState({ highlightColor: childData})
  }

  icon = (slideIndex, index, content) => {
    return (
      <Ionicon name={content} size={35} color={ index == slideIndex ? '#37027D' : '#666666' } />
    )
  }

  text = (slideIndex, index, content) => {
    return (
      <Text style={{ color: index == slideIndex ? '#37027D' : '#666666'}}>{content}</Text>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor="#ddddddff" barStyle='dark-content' animated={true} />
        <NavBar
        data = {testData}
        callbackRender={this.icon}
        backgroundColor={'white'}
        onTop={false}
        barColor={'#37027D'}
        showBar={true}
        animatedEffect={{ tension: 200 }}
        >
          <Page1 />

          <Page2 />

          <ButtonScreen
          backgroundColor={'red'}
          onUpperPress={ this.upperCallback }
          onLowerPress={ this.lowerCallback }
          />

          <Page3 />
          
          
          
        </NavBar>
      </View>
      
    )
  }
}

export default App;
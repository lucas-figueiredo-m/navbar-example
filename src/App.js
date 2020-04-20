import React, { Component } from 'react';
import { Text } from 'react-native';
import NavBar from './components/common/NavBar/NavBar';
import ButtonScreen from './components/scenes/ButtonScreen/ButtonScreen';
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
      <NavBar
      data = {testData}
      callbackRender={this.icon}
      backgroundColor={'white'}
      onTop={false}
      barColor={'#37027D'}
      showBar={true}
      >
        <ButtonScreen
        backgroundColor={'red'}
        onUpperPress={ this.upperCallback }
        onLowerPress={ this.lowerCallback }
        />

        <ButtonScreen
        backgroundColor={'green'}
        />

        <ButtonScreen
        backgroundColor={'black'}
        />

        <ButtonScreen
        backgroundColor={'blue'}
        />
        
      </NavBar>
    )
  }
}

export default App;
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity } from 'react-native';
import { NavBar } from './components/common';
import ButtonScreen from './components/scenes/ButtonScreen/ButtonScreen';

const { width, height } = Dimensions.get('window')

const data = [
  {
    type: 'text',
    content: 'Conversas'
  },
  {
    type: 'icon',
    content: 'md-menu',
    size: 30
  },
  {
    type: 'image',
    content: {
      activeImage: require('../assets/img/industryActive.png'),
      inactiveImage: require('../assets/img/industryInactive.png'),
    }
  }
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

  render() {
    return (
      <NavBar
      icons={[ 'md-menu', 'md-notifications-outline', 'md-person' ]}
      texts={[ 'Conversas', 'Status', 'Chamadas' ]}
      data = {data}
      type='icons'
      iconSize={40}
      colors={[this.state.highlightColor, 'blue', this.state.barColor]}
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
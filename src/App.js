import React, { Component } from 'react';
import { NavBar } from './components/common';
import ButtonScreen from './components/scenes/ButtonScreen/ButtonScreen';

const data = [
  {
    type: 'text',
    content: 'Conversas',
    style: {
      fontSize: 16,
      activeColor: 'green',
      inactiveColor: 'blue'
    }
  },
  {
    type: 'icon',
    content: 'md-menu',
    style: {
      size: 40,
      activeColor: 'green',
      inactiveColor: 'blue'
    }
  },
  {
    type: 'image',
    content: {
      activeImage: require('../assets/img/industryActive.png'),
      inactiveImage: require('../assets/img/industryInactive.png'),
    }
  },
  {
    type: 'icon',
    content: 'md-person',
    style: {
      size: 40,
      activeColor: 'green',
      inactiveColor: 'blue'
    }
  },
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
      data = {data}
      backgroundColor={this.state.barColor}
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
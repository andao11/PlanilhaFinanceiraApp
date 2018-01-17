import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//--------------------------------------------- LIBRARIES
import { Scene, Router } from 'react-native-router-flux';
//-------------------------------------------------------

//------------------------------------------------ SCREENS
import Home from './screens/Home';
//--------------------------------------------------------

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Início" />
        </Scene>
      </Router>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

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
        <Scene key="tabbar" tabs initial animationEnabled={true} swipeEnabled={true}>
          <Scene key="Principal">
            <Scene key="inicio" component={Home} title="Início" />
          </Scene>

          <Scene key="Principal2">
            <Scene key="inicio2" component={Home} title="Início 2" />
          </Scene>
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

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//--------------------------------------------- LIBRARIES
import { Scene, Router } from 'react-native-router-flux';
//-------------------------------------------------------

//------------------------------------------------ SCREENS
import Home from './screens/Home';
import Gastos from './screens/Gastos';
//--------------------------------------------------------

//--------------------------------------------- COMPONENTS
import IconComponent from './components/IconComponent';
import ModalHome from './screens/modals/ModalHome';
import TestModal from './screens/TestModal';
//--------------------------------------------------------

/* TAB BAR SETTINGS */
const ANIMATION_ENABLED = true;
const SWIPE_ENABLED     = true;
const TAB_BAR_POSITION  = 'bottom';
const COLOR_ACTIVE_TAB  = 'green';
const COLOR_INACTIVE_TAB= 'black';
//--------------------------------------------------------

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Scene key="modal" modal>

          <Scene key="root" hideNavBar hideNavBar>

            <Scene 
              key="tabbar" 
              tabs initial 
              animationEnabled={ANIMATION_ENABLED} 
              swipeEnabled={SWIPE_ENABLED}
              tabBarPosition={TAB_BAR_POSITION}
              activeTintColor={COLOR_ACTIVE_TAB}
              inactiveTintColor={COLOR_INACTIVE_TAB}>

              <Scene key="Principal" title="Home" iconName="home" icon={IconComponent}>
                <Scene key="inicio" component={Home} title="Bem-vindo" />
              </Scene>

              <Scene key="Gastos" title="Gastos" iconName="line-chart" icon={IconComponent}>
                <Scene key="inicioGastos" component={Gastos} title="Financeiro"  />
              </Scene>

            </Scene>

            <Scene key="homeModal" component={TestModal} title="Modal" hideNavBar />

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

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

//--------------------------------------------- LIBRARIES
import { Scene, Router } from 'react-native-router-flux';
//-------------------------------------------------------

//------------------------------------------------ SCREENS
import Home from './screens/Home';
//--------------------------------------------------------

//--------------------------------------------- COMPONENTS
import IconComponent from './components/IconComponent';
import ModalHome from './screens/modals/ModalHome';
import CardStackStyleInterpolator from 'react-navigation/src/views/CardStack/CardStackStyleInterpolator';
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
        <Scene key="modal" modal
          transitionConfig={() => ({ screenInterpolator: CardStackStyleInterpolator.forFadeFromBottomAndroid })}>

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
                <Scene key="inicio" component={Home} title="Início" />
              </Scene>

              <Scene key="Gastos" title="Gastos" iconName="line-chart" icon={IconComponent}>
                <Scene key="inicio2" component={Home} title="Gastos"  />
              </Scene>

            </Scene>

            <Scene key="homeModal" component={ModalHome} title="Modal" hideNavBar />

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

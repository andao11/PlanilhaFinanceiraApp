import React, {Component} from 'react';
import { Header } from 'react-native-elements';

export default class Home extends Component {

    render(){
        return(
            <Header
                centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
            />
        )
    }
}
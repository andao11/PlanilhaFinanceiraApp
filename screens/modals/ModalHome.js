import React from 'react';
import {TouchableHighlight, Text, View} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class ModalHome extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            hide: props.hide
        }
    }

    dismissModal = () => {
        this.setState({ hide: true });
        Actions.pop();
    }

    render(){
        if (this.state.hide) {
            return (
                <View>
                </View>
            )
        } else {
            return (
                <View style={{ width: 300, height: 200 }}>
                    <TouchableHighlight style={{flex: 1}} onPress={() => this.dismissModal()}>
                        <Text>Modal Legal</Text>
                    </TouchableHighlight>
                </View>
            )
        }
    }
}
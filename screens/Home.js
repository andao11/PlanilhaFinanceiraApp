import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

//Components
import IconComponent from '../components/IconComponent';
//------------------------------------------------------

//Libraries
import { Card, Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
//import {Action} from 'react-native-router-flux';
//------------------------------------------------------
const testeMov = [
    {
        colorType: 'blue',
        price: 10.50,
        desc: 'Mc Donalds'
    },
    {
        colorType: 'green',
        price: 40.00,
        desc: 'Depósito Maria'
    },
    {
        colorType: 'red',
        price: 80.74,
        desc: 'Conta de Luz'
    },

    {
        colorType: 'yellow',
        price: 80.74,
        desc: 'Outro'
    },

    {
        colorType: 'black',
        price: 142.46,
        desc: 'C&A'
    },
]
export default class Home extends Component {

    render(){
        return(
            <View style={{flex: 1}}>
                <ScrollView>
                    <Card
                        image={{uri: 'https://images.theconversation.com/files/96112/original/image-20150924-17067-1g17suk.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1012&h=668&fit=crop'}}>
                        <View style={styles.containerCard}>
                            <Text style={[styles.textCard, {fontSize: 20, color: 'green'}]}>
                                    Saldo: R$ 50,00
                            </Text>

                            <Text style={[styles.textCard, { color: '#a6cc33'}]}>
                                Gasto Diário: R$ 5,00
                            </Text>
                        </View>
                    </Card>

                    <Card title="Últimas cinco movimentações:">
                        {
                            testeMov.map((u, i) => {
                                return (
                                    <View key={i} style={{ flex: 1, flexDirection: 'row', marginBottom: 5}}>
                                        <View style={{backgroundColor: u.colorType, width: 20, marginRight: 2}} /><Text style={{ flex: 1 }}>{u.desc}</Text><Text style={{ flex: 1, textAlign: 'right' }}>{u.price}</Text>
                                    </View>
                                );
                            })
                        }
                    </Card>
                    <Button
                        raised
                        icon={{ name: 'history', type: 'font-awesome' }}
                        backgroundColor="green"
                        title='ÚLTIMAS 24 HORAS'
                        onPress={() => Actions.homeModal({hide: false})}/>
                    <View style={{marginBottom: 15}} />
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerCard: {
        flex: 1
    },
    textCard: {
        flex: 1,
        textAlign: 'left'
    }
})
import React from 'react';
import {View} from 'react-native';

//React Vector Icons
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';
import IconMaterialCommunity from 'react-native-vector-icons/MaterialCommunityIcons';
//--------------------------------------------------------

class IconComponent extends React.Component {
    

    render(){
        var color = 'black';
        if (this.props.activeTintColor){
            color = this.props.focused
                ? this.props.activeTintColor
                : this.props.inactiveTintColor
        }else{
            color = this.props.colorIcon;
        }
        

        let size = this.props.size ? this.props.size : 30;
        switch (this.props.type) {
            case 'FontAwesome':
                return <IconFontAwesome name={this.props.iconName} color={color} size={size} />
                break;

            case 'Material':
                return <IconMaterial name={this.props.iconName} color={color} size={size} />
                break;

            case 'MaterialCommunity':
                return <IconMaterialCommunity name={this.props.iconName} color={color} size={size} />
                break;

            default:
                return <IconFontAwesome name={this.props.iconName} color={color} size={size} />
                break;
        }
    }
}

export default IconComponent;
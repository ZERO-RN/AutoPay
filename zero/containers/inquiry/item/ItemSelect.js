/**
 * Created by zerowolf on 2018/3/30.
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');
import dismissKeyboard from 'dismissKeyboard';


export default class ItemSelect extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '',
            header: null,
            headerBackTitle: null,
        }
    );

    constructor(props) {
        super(props);

    }

    render() {
        let props = this.props;

        return (
            <TouchableOpacity
                activeOpacity={0.5}
                style={{
                    marginLeft: props.marginLeft ? 10 : 0,
                    backgroundColor: props.backgroundColor,
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 5,
                    width: props.small_model?50:100,
                    height: 35

                }}
                onPress={() => {
                    dismissKeyboard();
                    props.onPress();
                }}>

                <Text style={{color: 'white', fontSize: 16}}>{props.title}</Text>
            </TouchableOpacity>
        );
    }
}
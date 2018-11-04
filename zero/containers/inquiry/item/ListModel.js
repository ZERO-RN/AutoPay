/**
 * Created by zerowolf on 2018/3/30.
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, ListView, Alert, View, TouchableOpacity, Image, Dimensions
} from 'react-native';
const {width, height} = Dimensions.get('window');

export default class ListModel extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '',
            header: null,
            headerBackTitle: null,
        }
    );

    constructor(props) {
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            dataSource: ds.cloneWithRows(this._renderList())
        };
        this.renderRow = this._renderRow.bind(this);


    }

    _renderList() {
        var row = [1, 2, 3];
        return row;
    }

    _renderRow(data) {a
        return (
            <Text>
                {data}
            </Text>
        )
    }

    render() {
        let props = this.props;
        return (
            <View style={{flex: 1, height:300,justifyContent: 'center', alignItems: 'center'}}>
                <ListView
                    style={props.style}
                    dataSource={this.state.dataSource}
                          renderRow={this.renderRow}/>
            </View>
        )
    }
}
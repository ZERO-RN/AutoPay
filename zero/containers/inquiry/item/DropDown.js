/**
 * Created by zerowolf on 2018/4/2.
 */
import React, {Component} from 'react';

import {
    Dimensions,
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    ScrollView,
} from 'react-native';
const {width, height} = Dimensions.get('window');

import ModalDropdown from 'react-native-modal-dropdown';

export  default class DropDown extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let props = this.props;
        return (
            <View style={props.style}>
                <ModalDropdown
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        alignSelf: 'center',
                        height: 35,
                        width: 50,
                        borderRadius: 5,
                        borderWidth: 1,
                        borderColor: 'grey',
                        backgroundColor: 'white',
                    }}

                    defaultIndex={0}
                    defaultValue={'2 ↕️'}
                    textStyle={{
                        fontSize: 18,
                        color: 'black',
                        textAlign: 'center',
                        textAlignVertical: 'center'
                    }}

                    dropdownStyle={{
                        alignSelf:'center',
                        width: 80,
                        height: 200,
                        marginRight:-15,
                        // left:20,
                        // top:20,
                        // borderColor: 'grey',
                        // borderWidth: 1,
                        bottom:60,
                        borderRadius: 20,
                        shadowColor: '#d7d9d9',
                        shadowOffset: {height: 5},
                        shadowOpacity: 0.6,
                        shadowRadius: 2,
                        elevation:5,
                    }}
                    onSelect={(idx, value)=>{
                        props.onSelect(idx,value)
                    }}
                    options={['2', '4', '5', '7', '8', '9', '10', '11', '12']}
                    renderButtonText={(rowData) => this._dropdown_2_renderButtonText(rowData)}
                    renderRow={this._dropdown_2_renderRow.bind(this)}
                />
            </View>
        );
    }

    /*
     * button上显示的内容
     * */
    _dropdown_2_renderButtonText(rowData) {
        console.log(rowData);

        return `${rowData} ↕️`;
    }

    /*
     * 条目的style
     * */
    _dropdown_2_renderRow(rowData, rowID, highlighted) {
        return (
            <TouchableHighlight underlayColor='cornflowerblue'>
                <View style={{
                    flexDirection: 'row',
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: 'white'
                }}>

                    <Text style={{
                        marginHorizontal: 4,
                        fontSize: 16,
                        textAlignVertical: 'center',
                        color: 'black'
                    }}>
                        {`${rowData}`}
                    </Text>
                </View>
            </TouchableHighlight>
        );
    }

    //
    // _dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    //     if (rowID == DEMO_OPTIONS_1.length - 1) return;
    //     let key = `spr_${rowID}`;
    //     return (<View style={styles.dropdown_2_separator}
    //                   key={key}
    //     />);
    // }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


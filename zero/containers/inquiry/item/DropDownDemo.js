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

// import ModalDropdown from 'react-native-modal-dropdown';
import ModalDropdown from 'react-native-modal-dropdown';
// import ModalDropdown from '../../../view/ModalDropdown';


const DEMO_OPTIONS_1 = ['option 1', 'option 2', 'option 3', 'option 4', 'option 5', 'option 6', 'option 7', 'option 8', 'option 9'];

export  default class DropDown extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dropdown_4_options: null,
            dropdown_4_defaultValue: 'loading...',
            dropdown_6_icon_heart: true,
        };
    }

    render() {
        const dropdown_6_icon = this.state.dropdown_6_icon_heart ? require('../../../AImages/heart.png') : require('../../../AImages/flower.png');
        var DEMO_OPTIONS_2 = [
            {"name": "Rex", "age": 30},
            {"name": "Mary", "age": 25},
            {"name": "John", "age": 41},
            {"name": "Jim", "age": 22},
            {"name": "Susan", "age": 52},
            {"name": "Brent", "age": 33},
            {"name": "Alex", "age": 16},
            {"name": "Ian", "age": 20},
            {"name": "Phil", "age": 24},
        ];

        return (
            <View style={styles.container}>
                <View style={styles.row}>
                    <View style={styles.cell}>
                        <ModalDropdown style={styles.dropdown_1}
                                       options={DEMO_OPTIONS_1}
                                       defaultValue='Try the Show button above'

                        />
                        <ModalDropdown style={styles.dropdown_6}
                                       options={DEMO_OPTIONS_1}
                                       onSelect={(idx, value) => this._dropdown_6_onSelect(idx, value)}>
                            <Image style={styles.dropdown_6_image}
                                   source={dropdown_6_icon}
                            />
                        </ModalDropdown>
                    </View>
                    <View style={styles.cell}>
                        <ModalDropdown ref="dropdown_2"
                                       style={{
                                           paddingLeft: 10,
                                           alignItems:'center',
                                           justifyContent:'center',
                                           alignSelf: 'center',
                                           height: 35,
                                           width: 60,
                                           borderRadius: 5,
                                           borderWidth: 1,
                                           borderColor: 'grey',
                                           backgroundColor: 'white',
                                       }}
                                       defaultIndex={0}
                                       defaultValue={'2 ↕'}
                                       textStyle={{
                                           fontSize: 18,
                                           color: 'black',
                                           textAlign: 'center',
                                           textAlignVertical: 'center'
                                       }}

                                       dropdownStyle={{
                                           width: 60,
                                           height: 300,
                                           borderColor: 'grey',
                                           borderWidth: 1,
                                           borderRadius: 5,
                                       }}
                                       options={['2', '4', '5', '7', '8']}
                                       renderButtonText={(rowData) => this._dropdown_2_renderButtonText(rowData)}
                                       renderRow={this._dropdown_2_renderRow.bind(this)}
                                       renderSeparator={(sectionID, rowID, adjacentRowHighlighted) => this._dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted)}


                        />
                        <TouchableOpacity onPress={() => {
                            this.refs.dropdown_2.select(0);
                        }}>
                            <Text style={styles.textButton}>
                                select Rex
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.row}>
                    <ScrollView ref={el => this._scrollView = el}
                                style={styles.scrollView}
                                contentContainerStyle={styles.contentContainer}
                                showsVerticalScrollIndicator={true}
                                scrollEventThrottle={1}>
                        <Text>
                            {'Scroll view example.'}
                        </Text>
                        <ModalDropdown ref={el => this._dropdown_3 = el}
                                       style={styles.dropdown_3}
                                       options={DEMO_OPTIONS_1}
                                       defaultIndex={-1}
                                       adjustFrame={style => this._dropdown_3_adjustFrame(style)}
                                       dropdownTextStyle={styles.dropdown_3_dropdownTextStyle}
                                       dropdownTextHighlightStyle={styles.dropdown_3_dropdownTextHighlightStyle}
                        />
                    </ScrollView>
                </View>
                <View style={styles.row}>
                    <View style={[styles.cell, {justifyContent: 'flex-end'}]}>
                        <ModalDropdown style={{
                            margin: 8,
                            width: 80,
                            alignSelf: 'center',
                            height: 40,
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderColor: 'lightgray',
                            borderWidth: 2,
                            borderRadius: 10,
                        }}
                                       dropdownStyle={{width: 100,}}
                                       textStyle={{
                                           textAlignVertical: 'center'
                                       }}
                                       options={this.state.dropdown_4_options}
                                       defaultIndex={-1}
                                       defaultValue={this.state.dropdown_4_defaultValue}
                                       onDropdownWillShow={this._dropdown_4_willShow.bind(this)}
                                       onDropdownWillHide={this._dropdown_4_willHide.bind(this)}
                                       onSelect={(idx, value) => this._dropdown_4_onSelect(idx, value)}
                        />
                    </View>
                    <View style={[styles.cell, {justifyContent: 'flex-end'}]}>
                        <TouchableOpacity onPress={this._dropdown_5_show.bind(this)}>
                            <Text style={styles.textButton}>
                                {'Show dropdown'}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._dropdown_5_select(2)}>
                            <Text style={styles.textButton}>
                                {'Select the 3rd option'}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._dropdown_5_select(-1)}>
                            <Text style={styles.textButton}>
                                {'Clear selection'}
                            </Text>
                        </TouchableOpacity>
                        <ModalDropdown ref={el => this._dropdown_5 = el}
                                       style={styles.dropdown_5}
                                       options={['Select me to hide', `I can't be selected`, 'I can only be selected outside']}
                                       defaultValue='Try the Show button above'
                                       onDropdownWillShow={this._dropdown_5_willShow.bind(this)}
                                       onDropdownWillHide={this._dropdown_5_willHide.bind(this)}
                                       onSelect={this._dropdown_5_onSelect.bind(this)}
                        />
                    </View>
                </View>
            </View>
        );
    }

    _dropdown_2_renderButtonText(rowData) {
        console.log(rowData);
        const {name, age} = rowData;
        return `${rowData} ↕️`;
    }

    _dropdown_2_renderRow(rowData, rowID, highlighted) {
        // let icon = highlighted ? require('../../../AImages/heart.png') : require('../../../AImages/flower.png');
        // let evenRow = rowID % 2;
        return (
            <TouchableHighlight underlayColor='cornflowerblue'>
                <View style={{
                    flexDirection: 'row',
                    height: 40,
                    alignItems: 'center',
                    justifyContent:'center',
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

    _dropdown_2_renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
        if (rowID == DEMO_OPTIONS_1.length - 1) return;
        let key = `spr_${rowID}`;
        return (<View style={styles.dropdown_2_separator}
                      key={key}
        />);
    }

    _dropdown_3_adjustFrame(style) {
        console.log(`frameStyle={width:${style.width}, height:${style.height}, top:${style.top}, left:${style.left}, right:${style.right}}`);
        style.top -= 15;
        style.left += 150;
        return style;
    }

    _dropdown_4_willShow() {
        setTimeout(() => this.setState({
            dropdown_4_options: DEMO_OPTIONS_1,
            dropdown_4_defaultValue: 'loaded',
        }), 2000);
    }

    _dropdown_4_willHide() {
        this.setState({
            dropdown_4_options: null,
            dropdown_4_defaultValue: 'loading',
        });
    }

    _dropdown_4_onSelect(idx, value) {
        // BUG: alert in a modal will auto dismiss and causes crash after reload and touch. @sohobloo 2016-12-1
        //alert(`idx=${idx}, value='${value}'`);
        console.debug(`idx=${idx}, value='${value}'`);
    }

    _dropdown_5_show() {
        this._dropdown_5 && this._dropdown_5.show();
    }

    _dropdown_5_select(idx) {
        this._dropdown_5 && this._dropdown_5.select(idx);
    }

    _dropdown_5_willShow() {
        return false;
    }

    _dropdown_5_willHide() {
        let idx = this._dropdown_5_idx;
        this._dropdown_5_idx = undefined;
        return idx == 0;
    }

    _dropdown_5_onSelect(idx, value) {
        this._dropdown_5_idx = idx;
        if (this._dropdown_5_idx != 0) {
            return false;
        }
    }

    _dropdown_6_onSelect(idx, value) {
        this.setState({
            dropdown_6_icon_heart: !this.state.dropdown_6_icon_heart,
        })
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flex: 1,
        flexDirection: 'row',
    },
    cell: {
        flex: 1,
        borderWidth: StyleSheet.hairlineWidth,
    },
    scrollView: {
        flex: 1,
    },
    contentContainer: {
        height: 500,
        paddingVertical: 100,
        paddingLeft: 20,
    },
    textButton: {
        color: 'deepskyblue',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'deepskyblue',
        margin: 2,
    },

    dropdown_1: {
        flex: 1,
        top: 32,
        left: 8,
    },
    dropdown_2: {
        alignSelf: 'center',
        width: 150,
        borderRadius: 18,
        backgroundColor: 'green',
    },
    dropdown_2_text: {
        marginVertical: 18,
        marginHorizontal: 16,
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    dropdown_2_dropdown: {
        width: 150,
        height: 300,
        borderColor: 'cornflowerblue',
        borderWidth: 2,
        borderRadius: 3,
    },
    dropdown_2_row: {
        flexDirection: 'row',
        height: 40,
        alignItems: 'center',
    },
    dropdown_2_image: {
        marginLeft: 4,
        width: 30,
        height: 30,
    },
    dropdown_2_row_text: {
        marginHorizontal: 4,
        fontSize: 16,
        color: 'navy',
        textAlignVertical: 'center',
    },
    dropdown_2_separator: {
        height: 1,
        backgroundColor: 'cornflowerblue',
    },
    dropdown_3: {
        width: 150,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 1,
    },
    dropdown_3_dropdownTextStyle: {
        backgroundColor: '#000',
        color: '#fff'
    },
    dropdown_3_dropdownTextHighlightStyle: {
        backgroundColor: '#fff',
        color: '#000'
    },
    dropdown_4: {
        margin: 8,
        width: 80,
        alignSelf: 'center',
        height: 40,
        borderColor: 'lightgray',
        borderWidth: 2,
        borderRadius: 10,
    },
    dropdown_4_dropdown: {
        width: 100,
    },
    dropdown_5: {
        margin: 8,
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 1,
    },
    dropdown_6: {
        flex: 1,
        left: 8,
    },
    dropdown_6_image: {
        width: 40,
        height: 40,
    },
});


/**
 * Created by zerowolf on 2018/3/28.
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, TouchableHighlight, Text, Alert, View, TouchableOpacity, Image, Dimensions, TextInput
} from 'react-native';
// import propTypes from 'prop-types';
const {width, height} = Dimensions.get('window');
import MyTabView from '../../view/MyTabView';
import MyTextInput from "../../view/MyTextInput";
import ButtonView from "../../view/ButtonView";
import TextItem from './item/TextItem';
import _TextInput from './item/_TextInput';
import ItemSelect from './item/ItemSelect';
import ModalDropDown from '../../view/ModalDropdown';
import ListModel from './item/ListModel';
import FuzzyQuery from './FuzzyQuery';
import DropDown from './item/DropDown';

import dismissKeyboard from 'dismissKeyboard';

//需要隐藏软键盘的时候 , 就执行下面这个函数


export default class Navigator extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '账单',
            header: null,
            headerBackTitle: null,
        }
    );

    constructor(props) {
        super(props);
        this.state = {
            isSelect_KZ: false,
            isSelect_KD: false,
            isSelect_MS: false,
            isSelect_OS: false,
            changeable: false,
            contract_price: 0,           //合约价
            principal: 0,//名义本金      100 : 100万   200 : 200万 300 : 300万
            TextInput_prince: 0,         //名义本金输入框的内容
            current_bg_color: '#d3cde0',//红或者蓝
            current_month: 0,//当前月份
            select_path: 0,//0表示看涨,() 1表示看跌
            select_type: 0,//0表示美式,1表示欧式
            // select_color: 'red' //'grey'  ////  'green'
        };
    }


    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <MyTabView titleColor={'black'} title={'询价'}
                           navigation={this.props.navigation}/>
                <View style={{height: height / 1.5, width: width, justifyContent: 'flex-start', alignItems: 'center'}}>

                    <View style={styles.flex_row}>
                        <TextItem title={'标的股票'}/>

                    </View>
                    <View style={styles.flex_row}>

                        <TextItem title={'期权方向'}/>
                        <ItemSelect title={'看涨'}
                                    backgroundColor={this.state.isSelect_KZ ? this.state.current_bg_color : '#d3cde0'}
                                    onPress={() => {
                                        this.state.changeable ?
                                            this.setState({
                                                current_bg_color: 'red',
                                                isSelect_KZ: true,
                                                isSelect_KD: false
                                            }) : null;
                                    }}/>
                        <ItemSelect marginLeft={true}
                                    title={'看跌'}
                                    backgroundColor={this.state.isSelect_KD ? this.state.current_bg_color : '#d3cde0'}
                                    onPress={() => {
                                        this.state.changeable ?
                                            this.setState({
                                                current_bg_color: 'blue',
                                                isSelect_KZ: false,
                                                isSelect_KD: true
                                            }) : null;

                                    }}/>
                    </View>
                    <View style={styles.flex_row}>
                        <TextItem title={'期权类型'}/>

                        <ItemSelect title={'美式'}
                                    type={2}
                                    backgroundColor={this.state.isSelect_MS ? this.state.current_bg_color : '#d3cde0'}
                                    onPress={() => {
                                        this.setState({
                                            isSelect_MS: true,
                                            isSelect_OS: false
                                        });

                                    }}/>
                        <ItemSelect marginLeft={true}
                                    title={'欧式'}
                                    backgroundColor={this.state.isSelect_OS ? this.state.current_bg_color : '#d3cde0'}
                                    onPress={() => {
                                        this.setState({
                                            isSelect_MS: false,
                                            isSelect_OS: true
                                        });
                                    }}/>
                    </View>
                    <View style={styles.flex_row}>
                        <TextItem title={'行权周期/月'}/>

                        <ItemSelect small_model={true}
                                    title={'1月'}
                                    backgroundColor={this.state.current_month === 1 ? this.state.current_bg_color : '#d3cde0'}
                                    onPress={() => {
                                        this.setState({
                                            current_month: 1
                                        });
                                    }}/>
                        <ItemSelect small_model={true}
                                    marginLeft={true}
                                    title={'3月'}
                                    backgroundColor={this.state.current_month === 3 ? this.state.current_bg_color : '#d3cde0'}
                                    onPress={() => {
                                        this.setState({
                                            current_month: 3
                                        });
                                    }}/>
                        <ItemSelect small_model={true}
                                    marginLeft={true}
                                    title={'6月'}
                                    backgroundColor={this.state.current_month === 6 ? this.state.current_bg_color : '#d3cde0'}
                                    onPress={() => {

                                        this.setState({
                                            current_month: 6
                                        });
                                    }}/>

                        <DropDown style={{marginLeft: 20}}
                                  onSelect={(idx, value) => {
                                      console.log(idx);
                                      console.log(value);
                                      console.log(typeof value);
                                      this.setState({
                                          current_month: value
                                      })
                                  }}/>

                        <Text style={{fontSize: 16, color: 'black', marginLeft: 5}}>月</Text>


                    </View>

                    <View style={styles.flex_row}>
                        <TextItem title={'合约价/元'}/>

                        <_TextInput width={60}
                                    value={this.state.contract_price === 0 ? '' : this.state.contract_price + ''}
                                    onChangeText={(text) => {
                                        this.setState({
                                            contract_price: text
                                        });
                                    }}/>

                        <TouchableOpacity activeOpacity={0.5}
                                          style={styles.addOrCut}
                                          onPress={() => {
                                              dismissKeyboard();
                                              this.setState({
                                                  contract_price: this._changeTwoDecimal_f(this.state.contract_price, 0)
                                              });
                                          }}>
                            <Text style={{color: 'black', fontSize: 22}}>+</Text>

                        </TouchableOpacity>
                        <TouchableOpacity activeOpacity={0.5}
                                          style={styles.addOrCut}
                                          onPress={() => {
                                              dismissKeyboard();
                                              this.setState({
                                                  contract_price: this._changeTwoDecimal_f(this.state.contract_price, 1)
                                              });
                                          }}>
                            <Text style={{color: 'black', fontSize: 22}}>-</Text>
                        </TouchableOpacity>

                    </View>


                    <View style={styles.flex_row}>
                        <TextItem title={'名义本金/元'}/>

                        <ItemSelect small_model={true}
                                    title={'100万'}
                                    backgroundColor={this.state.principal === 100 ? this.state.current_bg_color : '#d3cde0'}
                                    onPress={() => {
                                        this.setState({
                                            principal: 100,
                                            TextInput_prince: 0
                                        });
                                        // this.refs.textInput_prince.value()
                                    }}/>
                        <ItemSelect small_model={true}
                                    marginLeft={true}
                                    title={'200万'}
                                    backgroundColor={this.state.principal === 200 ? this.state.current_bg_color : '#d3cde0'}
                                    onPress={() => {
                                        this.setState({
                                            principal: 200
                                        });
                                    }}/>
                        <ItemSelect small_model={true}
                                    marginLeft={true}
                                    title={'500万'}
                                    backgroundColor={this.state.principal === 500 ? this.state.current_bg_color : '#d3cde0'}
                                    onPress={() => {
                                        this.setState({
                                            principal: 500
                                        });
                                    }}/>
                        <_TextInput marginLeft={20}
                                    value={this.state.TextInput_prince === 0 ? '' : this.state.TextInput_prince + ''}
                                    onChangeText={(text) => {
                                        this.setState({
                                            principal: text,
                                            TextInput_prince: text
                                        });
                                    }}/>

                        <Text style={{fontSize: 16, color: 'black', marginLeft: 5}}>万</Text>

                    </View>


                    <View style={{
                        marginTop: 10,
                        width: width,
                        height: 40,
                        justifyContent: 'flex-start',
                        alignItems: 'center',
                        flexDirection: 'row',
                    }}>
                        <TextItem title={'行  权  价'}/>

                        <TextInput
                            underlineColorAndroid={'transparent'}
                            style={{
                                borderRadius: 20,
                                width: width / 2 - 20,
                                height: 40,
                                backgroundColor: 'white',
                                marginBottom: 1,
                                textAlign: 'center',
                            }}
                            placeholder={'询价'}
                            onChangeText={(text) => {
                                console.log(text);
                            }}/>
                    </View>

                    <FuzzyQuery onPress={() => {
                        console.log('回调');
                        this.setState({
                            isSelect_KZ: true,
                            isSelect_KD: false,
                            isSelect_MS: true,
                            isSelect_OS: false,
                            current_month: 1,
                            contract_price: 6.66,
                            principal: 100,
                            TextInput_prince: 0,
                            current_bg_color: 'red',

                            changeable: true
                        });
                    }}
                                noTextState={() => {
                                    this.setState({
                                        changeable: false,
                                        isSelect_KZ: false,
                                        isSelect_KD: false,
                                        isSelect_MS: false,
                                        isSelect_OS: false,
                                        current_month: 0,
                                        contract_price: 0,
                                        principal: 0,
                                        TextInput_prince: 0,
                                        current_bg_color: '#d3cde0',
                                    })
                                }}
                    />

                    <TouchableOpacity activeOpacity={0.5}
                                      style={{
                                          marginTop: 10,
                                          width: width - 20,
                                          height: 50,
                                          backgroundColor: '#4e73ff',
                                          borderRadius: 25,
                                          // borderColor: 'yellow',
                                          // borderWidth:2,
                                          justifyContent: 'center',
                                          alignItems: 'center'
                                      }}
                                      onPress={() => {
                                          console.log('询价');
                                          console.log(this.state.current_month);
                                          console.log(typeof this.state.current_month);


                                          console.log(`
                                          --期权方向--  ${this.state.isSelect_KZ ? '看涨' : this.state.isSelect_KD ? '看跌' : '待定'}
                                          --期权类型--  ${this.state.isSelect_MS ? '美式' : this.state.isSelect_OS ? '欧式' : '待定'}
                                          --行权周期--  ${this.state.current_month + '月'}
                                          --合约价--    ${this.state.contract_price + '万'}
                                          --名义本金--   ${this.state.principal}`
                                          );
                                          // Alert.alert(`
                                          // --期权方向--  ${this.state.isSelect_KZ ? '看涨' : '看跌'}
                                          // --期权类型--  ${this.state.isSelect_MS ? '美式' : '欧式'}
                                          // --行权周期--  ${this.state.current_month + '月'}
                                          // --合约价--    ${this.state.contract_price}
                                          // --名义本金--   ${this.state.principal}`
                                          // );

                                      }}>
                        <Text style={{fontSize: 16, color: 'white'}}>
                            询价
                        </Text>
                    </TouchableOpacity>
                </View>
                {/*<View style={{width: width, height: height - height / 1.5, backgroundColor: 'yellow'}}>*/}
                {/*<ListModel style={{flex: 2, width: width, height: 300, backgroundColor: 'blue'}}/>*/}

                {/*</View>*/}
            </View>
        );
    }

    /*
     *将字符串转成两位小数的浮点型加减0.01 再返回运算后的字符串
     *  type 0:+0.01    1: -0.01
     * */
    _changeTwoDecimal_f(x, type) {
        var f_x = parseFloat(x);
        if (isNaN(f_x)) {
            // alert('function:changeTwoDecimal->parameter error');
            console.log('function:changeTwoDecimal->parameter error');
            return false;
        }
        var f_x = type === 0 ? Math.round(x * 100 + 1) / 100 : Math.round(x * 100 - 1) / 100;
        // console.log(f_x);
        var s_x = f_x.toString();
        // console.log(s_x);
        var pos_decimal = s_x.indexOf('.');
        if (pos_decimal < 0) {
            pos_decimal = s_x.length;
            s_x += '.';
            // console.log(s_x);
        }
        while (s_x.length <= pos_decimal + 2) {
            s_x += '0';
            // console.log(s_x);
        }
        // console.log(s_x);
        return s_x;
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
        alignSelf: 'flex-start',
        width: 80,
        height: 40,
        marginTop: 32,
        right: 8,
        borderWidth: 0,
        borderRadius: 3,
        backgroundColor: 'cornflowerblue',
    },
    dropdown_2_text: {
        marginVertical: 10,
        marginHorizontal: 6,
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        textAlignVertical: 'center',
    },
    dropdown_2_dropdown: {
        width: 100,
        height: 200,
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
        borderColor: 'lightgray',
        borderWidth: 1,
        borderRadius: 1,
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
    button: {
        marginLeft: 0,
        backgroundColor: '#d3cde0',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        width: 80,
        height: 35
    },
    flex_row: {
        marginTop: 10,
        width: width,
        height: 40,
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'row'
    },
    addOrCut: {
        width: 35,
        height: 35,
        marginLeft: 10,
        backgroundColor: '#d3cde0',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
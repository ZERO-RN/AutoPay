/**
 * Created by zerowolf on 2018/1/7.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text, Alert,
    View,
    TextInput,
    TouchableOpacity,
} from 'react-native';
// import PropTypes from 'prop-types'
import SizeUtil from '../../utils/SizeUtil';
import ButtonView from '../../view/ButtonView';

import MyTabView from '../../view/MyTabView';
import MyTextInput from '../../view/MyTextInput';
export default class ShiMing extends Component {

    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '实名认证',
            header: null,
            headerBackTitle: null,
        }
    );

    constructor(props) {
        super(props);

        this.state = {
            name: '',
            phone: '',
            card: '',
            ID: ''
        };
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center'}}>
                <MyTabView titleColor={'black'} title={'实名认证'} rightView={true}
                           leftView={true}

                           rightIcon={'md-settings'} navigation={this.props.navigation}/>

                {/*<View style={{height:40, marginTop: 30,marginLeft:20,marginRight:20,justifyContent:'space-between', alignItems:'center',flexDirection:'row'}}>*/}
                {/*<Text style={{fontSize:16, color:'black', flex:1,justifyContent:'space-around'}}>*/}
                {/*姓  名 :*/}
                {/*</Text>*/}
                <MyTextInput
                    placeholder={'姓名'}
                    marginTop={10}
                    onChangeText={(text) => {
                        this.setState({
                            name: text
                        });
                    }}
                />
                <MyTextInput
                    placeholder={'省份证号'}
                    onChangeText={(text) => {
                        this.setState({
                            ID: text
                        });
                    }}
                />
                <MyTextInput
                    placeholder={'银行卡号'}
                    onChangeText={(text) => {
                        this.setState({
                            card: text
                        });
                    }}
                />
                <MyTextInput
                    placeholder={'银行卡绑定手机号'}
                    onChangeText={(text) => {
                        this.setState({
                            phone: text
                        });
                    }}
                />

                <ButtonView title={'实名认证'}
                            onPress={() => {
                                Alert.alert('name:' + this.state.name + 'ID:' + this.state.ID +'card:' + this.state.card +'phone:' + this.state.phone);
                            }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    textInputStyle: {
        width: SizeUtil.width - 20,
        height: 40,
        backgroundColor: 'white',
        marginTop: 10,
    }
})
/**
 * Created by zerowolf on 2017/12/6.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image, ScrollView,
    Alert, Dimensions
} from 'react-native';
import s from '../AllStyles';
const {width, height} = Dimensions.get('window');
import  TopView from './Mine_TopView';
import  Item from './Item';
import Icon from 'react-native-vector-icons/Ionicons'
import MyTabView from '../../view/MyTabView';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import NavigationUtil from '../../utils/NavigationUtil';
import {Page_AutoPay, Pay_Navigator} from '../../actions/action_autopay';

import Icon1 from 'react-native-vector-icons/Entypo'
class Mine extends Component {

    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '我的',
            header: null,
            headerBackTitle: null,
        }
    );

    constructor(props) {
        super(props);

        this.props.initPayNavigatorAction(this.props.navigation);
    }

    render() {
        return (
            <View>


                <MyTabView titleColor={'black'} color1={'white'} color2={'white'} title={'我'} rightView={true}
                           rightIcon={'md-settings'} navigation={this.props.navigation}/>

                <ScrollView

                    contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                    style={{ backgroundColor: '#e7e9e9'}}>

                    <View style={{
                        marginTop: 70, width: width - 20, borderRadius: 5, top: -70
                    }}>

                        <View style={styles.topView}>
                            <TopView image={require('../../AImages/qianbao.png')} title={'实名认证'} onPress={() => {
                                // Alert.alert('444')
                                this.props.navigation.dispatch({
                                    type: 'ShiMing'
                                });
                            }}/>
                            <TopView image={require('../../AImages/renzheng.png')} title={'订单明细'} onPress={() => {
                                this.props.navigation.dispatch({
                                    type: 'DingDan'
                                });
                            }}/>
                            <TopView image={require('../../AImages/ziliao.png')} title={'卡号管理'}/>
                        </View>

                        <View style={styles.centerView}>
                            <Item onPress={() => {
                                Alert.alert('点击条目')
                            }}
                                  title={'邀请好友'}
                                  image={require('../../AImages/setting/Slice7x1.png')}
                            />
                            <Item onPress={() => {
                                Alert.alert('点击条目')
                            }}
                                  title={'参加活动'}
                                  image={require('../../AImages/setting/Slicex1.png')}/>
                            <Item onPress={() => {
                                Alert.alert('点击条目')
                            }}
                                  title={'优惠券'}
                                  image={require('../../AImages/setting/Slice2x1.png')}/>
                            <Item onPress={() => {
                                Alert.alert('点击条目')
                            }}
                                  title={'贝米商城'}
                                  image={require('../../AImages/setting/Slice3x1.png')}/>
                            <Item onPress={() => {
                                Alert.alert('点击条目')
                            }}
                                  title={'贝米实验室'}
                                  image={require('../../AImages/setting/Slice4x1.png')}/>
                            <Item onPress={() => {
                                Alert.alert('点击条目')
                            }}
                                  title={'贝米黑卡'}
                                  image={require('../../AImages/setting/Slice5x1.png')}/>

                        </View>
                        <View style={styles.centerView}>
                            <Item onPress={() => {
                                // Alert.alert('点击条目')

                                    NavigationUtil.reset(this.props.navigation, 'Set_account');
                                // this.props.navigation.dispatch({
                                //     type: 'Set_account'
                                // });
                            }}
                                  title={'账户设置'}
                                  image={require('../../AImages/setting/Slice6x1.png')}
                            />
                            <Item onPress={() => {
                                Alert.alert('点击条目')
                            }}
                                  title={'交易记录'}
                                  image={require('../../AImages/setting/Slicex2.png')}/>
                            <Item onPress={() => {
                                Alert.alert('点击条目')
                            }}
                                  title={'银行卡管理'}
                                  image={require('../../AImages/setting/Slice2x2.png')}/>

                        </View>

                        <View style={styles.centerView}>
                            <Item onPress={() => {
                                Alert.alert('点击条目')
                            }}
                                  title={'在线客服'}
                                  image={require('../../AImages/setting/Slice3x2.png')}
                            />
                            <Item onPress={() => {
                                Alert.alert('点击条目')
                            }}
                                  title={'帮助与反馈'}
                                  image={require('../../AImages/setting/Slice4x2.png')}/>
                            <Item onPress={() => {
                                Alert.alert('点击条目')
                            }}
                                  title={'公告'}
                                  image={require('../../AImages/setting/Slice5x2.png')}/>
                            <Item onPress={() => {
                                Alert.alert('点击条目')
                            }}
                                  title={'关于贝米'}
                                  image={require('../../AImages/setting/Slice6x2.png')}/>

                        </View>

                    </View>


                </ScrollView>
            </View>
        );
    }
}
const styles = {
    container: {
        height: 200,
        backgroundColor: '#CCCCCC',
        marginBottom: 10,
    },
    topView: {
        paddingBottom: 15,
        paddingTop: 10,
        width: width - 20,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#d7d9d9',
        shadowOffset: {height: 5},
        shadowOpacity: 0.6,
        shadowRadius: 2,
        alignItems: 'center',
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 10
    },
    centerView: {
        paddingBottom: 5,
        paddingTop: 5,
        width: width - 20,
        backgroundColor: 'white',
        borderRadius: 5,
        shadowColor: '#d7d9d9',
        shadowOffset: {height: 5},
        shadowOpacity: 0.6,
        shadowRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        marginTop: 10
    },
};
const mapStateToProps = (state) => {
    return {
        // RS_AutoPay: state.RS_AutoPay.data,
    }

};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        initPayNavigatorAction: Pay_Navigator,
    }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Mine);

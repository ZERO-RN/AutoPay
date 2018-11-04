/**
 * Created by zerowolf on 2017/12/6.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    Alert,
    View,
    Image,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import s from '../AllStyles';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import Swiper from 'react-native-swiper';
const {width, height} = Dimensions.get('window');
import {Pay_Navigator} from '../../actions/action_autopay'
import {State_Action} from '../../actions/NewAction'
import Item from './bill_center/Item';
import TextItem from './bill_center/TextItem';
import ListView from "realm/react-native/listview";
import MyTabView from '../../view/MyTabView';
// import NavigationUtil from '../../utils/NavigationUtil';

let swiper = null;
class Bills extends Component {

    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '账单',
            header: null,
            headerBackTitle: null,
        }
    );


    constructor(props) {
        super(props);
        console.log(this.props.nav);
        console.log(this.props.navigation);

        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.renderList = this._renderList.bind(this);
        this.state = {
            swiperShow: false,
            dataSource: ds.cloneWithRows(this.renderList('sad'))
        };
        this.renderRow = this._renderRow.bind(this);
    }

    componentDidMount() {
//系统自带方法只调用一次
        setTimeout(() => {
            // this.setTimeout = this.setState({swiperShow: true});
            this.props.initStateValue(true);
            this.setState({
                dataSource: this.state.dataSource.cloneWithRows(this._renderList())
            })
        }, 100);
    }
//移除定时器
    componentWillUnmount() {
      this.setTimeout && clearTimeout(this.setTimeout);
    }

    _renderList() {
        console.log(this.props.RS_State);
        var dataList = ['https://m.bmqb.com/a/lab', 'https://m.bmqb.com/financial/new_user_welfare', 'https://mp.weixin.qq.com/s/gts_sfR8UDPrp0R0NwOu9w', 'https://m.bmqb.com/news/251', 'http://wock.ishcloud.com/o2o/mall/b2iCardAction/b2iCardShow.do'];

        var row = [];
        row.push(this.props.RS_State ? <Swiper dotColor={'white'}

                                               showsPagination={true}
                                               activeDotColor={'#FF0A0A'}
                                               width={width}
                                               height={150} horizontal={true}
                                               loop={false} bounces={false}
                                               onMomentumScrollEnd={this._onMomentumScrollEnd}
        >
            <Image style={{resizeMode: 'stretch', width: width, height: 150}}
                   source={require("../../AImages/small/activity3x1.png")}/>
            <Image style={{resizeMode: 'stretch', width: width, height: 150}}
                   source={require("../../AImages/small/activity2x1.png")}/>
            <Image style={{width: width, height: 150}} source={require("../../AImages/small/activity1x1.png")}/>
            <Image style={{width: width, height: 150}} source={require("../../AImages/small/activity3x1.png")}/>
            <Image style={{width: width, height: 150}} source={require("../../AImages/small/activity2x1.png")}/>
            <Image style={{width: width, height: 150}} source={require("../../AImages/small/activity1x1.png")}/>
        </Swiper>
            : <Image style={{resizeMode: 'stretch', width: width, height: 150}}
                     source={require("../../AImages/small/activity3x1.png")}/>);
        row.push(<View style={{
            height: 60,
            width: width,
            flexDirection: 'row',
            backgroundColor: 'white',
            shadowColor: '#ffa3b6',
            shadowOffset: {width: 0, height: 5},
            shadowRadius: 10,
            shadowOpacity: 0.2,
            justifyContent: 'space-between'
        }}>
            <Item title={'新手引导'} image={require('../../AImages/small/Slice1_1x.png')} onPress={() => {
                this.props.navigation.dispatch({
                    type: 'HelpNews'
                });
            }}/>
            <Item title={'投资指南'} image={require('../../AImages/small/Slice2_2x.png')} onPress={() => this.guild()}/>
            <Item title={'资金安全'} image={require('../../AImages/small/Slice3_3x.png')} onPress={() => this.guild()}/>
            <Item title={'邀请好友'} image={require('../../AImages/small/Slice4_2x.png')} onPress={() => this.guild()}/>
        </View>)
        row.push(<TextItem title={'进行中的活动'}/>);
        for (var i = 0; i < dataList.length; i++) {
            let number = i;
            row.push(
                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                    console.log(i + '');
                    console.log(dataList[number]);

                    console.log(this.props.nav);
                    console.log(this.props.navigation);

                    this.props.navigation.dispatch({
                        type: 'WebView1',
                        webViewURL: dataList[number]
                    })
                }}>
                    <Image style={{width: width - 20, height: 150, marginLeft: 10, borderRadius: 5}}
                           source={require('../../AImages/small/activity1x1.png')}/>
                </TouchableOpacity>
            );
            row.push(
                <TouchableOpacity activeOpacity={0.5} onPress={() => {
                    console.log(dataList[number]);
                    this.props.navigation.dispatch({
                        type: 'WebView1',
                        webViewURL: dataList[number]
                    })
                }}>
                    <Image style={{width: width - 20, height: 150, marginLeft: 10, borderRadius: 5}}
                           source={require('../../AImages/small/activity2x1.png')}/></TouchableOpacity>);
            row.push(<TouchableOpacity activeOpacity={0.5} onPress={() => {
                console.log(dataList[number]);
                this.props.navigation.dispatch({
                    type: 'WebView1',
                    webViewURL: dataList[number]
                })
            }}>
                <Image style={{width: width - 20, height: 150, marginLeft: 10, borderRadius: 5}}
                       source={require('../../AImages/small/activity3x1.png')}/>
            </TouchableOpacity>);
        }
        return row;
    }

    _renderRow(data) {
        return (
            <View>
                {data}
            </View>
        );
    }

    componentWillMount() {
        this.props.initPayNavigatorAction(this.props.RS_Navigate)
    }

    render() {

        return (<View style={s.tab}>
            <MyTabView titleColor={'black'} color1={'white'} color2={'white'} title={'贝米钱包'}
                       navigation={this.props.navigation}/>
            <ListView
                enableEmptySections={true}
                removeClippedSubviews={false}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}/>

        </View>);
    }

    guild() {
        console.log('新手引导');
    }

    ren(a) {
        console.log('ren');
        return a;
    }
}
const mapStateToProps = (state) => {
    return {
        nav: state.nav,
        RS_Navigate: state.RS_Navigate.data,
        RS_State: state.RS_State.data,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        initPayNavigatorAction: Pay_Navigator,
        initStateValue: State_Action,

    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Bills);

/**
 * Created by zerowolf on 2017/12/11.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button,
    Alert
} from 'react-native';
import s from '../AllStyles';
import Icon from 'react-native-vector-icons/Ionicons';
export default class Navigator extends Component {


    static navigationOptions = ({navigation}) => {
        //设置滑动返回的距离
        // navigation.setParams({
        //     myTitle: 'ffffff'
        // });
        // const {params = {}} = navigation.state;
        return {
            gestureResponseDistance: {
                horizontal: 300
            }
            ,

            //是否开启手势滑动返回，android 默认关闭 ios打开
            gesturesEnabled: false,

            //设置跳转页面左侧返回箭头后面的文字，默认是上一个页面的标题
            // headerBackTitle: '123',
            //导航栏的样式
            headerStyle: s.headerStyle,
            //导航栏文字的样式
            headerTitleStyle: s.headerTitleStyle,
            //返回按钮的颜色
            headerTintColor: 'white',

            //隐藏顶部导航栏
            // header: null,


            //设置导航栏左边的视图

            headerLeft: (
                <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row'}}>

                    <Icon.Button
                        size={25}
                        left={5}
                        name={ 'md-arrow-back'}
                        backgroundColor={null}
                        color={'white'}
                        onPress={() => _this._reload()}>
                    </Icon.Button>

                    <Text style={{fontSize: 18, color: 'white'}}>
                        36658588
                    </Text>
                </View> ),


            //设置顶部导航栏右边的视图  和 解决当有返回箭头时，文字不居中
            // headerRight: (
            //     <Button title={'haha'} onPress={this.toggleShowSomething}>
            //         <Icon name="plus" size={22} color="#fff" backgroundColor="#fff"/>
            //     </Button>
            //
            // ),
        }

    }

    componentDidMount() {

    }

    _reload() {
        // Alert.alert('121121212')
        _this.setState({
            name:_this.state.name+'ppppp'
        })

    }
_reload1() {
        Alert.alert('121121212')
        // _this.setState={
        //     nameaa:_this.nameaa+'pppppp'
        // }
    }

    // componentDidMount() {
    //     this.props.navigation.setParams({
    //         handleThis: this.changeButtonColorHandler
    //     });
    // }


    constructor(props) {
        super(props);
        _this = this;
        _this.state={
            nameaa:'rrrrr',
            name:'wwww'
        }
    }

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Button title="777" onPress={()=>{
                    _this._reload();
                }} />
                <Text style={{color: 'blue', fontSize: 18}}>
                    操作步骤 !{this.state.name+''}
                </Text>
            </View>
        )
    }
}
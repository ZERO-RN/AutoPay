/**
 * Created by zerowolf on 2018/3/26.
 */
import React, {Component} from 'react';
import {
    Platform, StyleSheet, Text, Alert, View, TouchableOpacity, Image, Dimensions
} from 'react-native';
import MyTabView from '../../../view/MyTabView';
import NavigationUtil1 from '../../../utils/NavigationUtil1';
import ParentClass from '../../basic/ParentClass';
const {width, height} = Dimensions.get('window');
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

var pageUrls = ['../../../AImages/help/Help1x2.png',
    '../../../AImages/help/Help2x2.png',
    '../../../AImages/help/Help3x2.png',
    '../../../AImages/help/Help4x2.png',
    '../../../AImages/help/Help5x2.png']
 class HelpNews extends ParentClass {
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '账单',
            header: null,
            headerBackTitle: null,
        }
    );

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0
        };
    }

    render() {
        console.log(pageUrls[this.state.currentPage]);
        let pageUrl = pageUrls[this.state.currentPage];
        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <MyTabView titleColor={'black'} color1={'white'} color2={'white'} title={'新手指南'} leftView={true}
                           hasRight={true} rightView={<TouchableOpacity activeOpacity={1}
                                                                        style={{
                                                                            width: width / 3,
                                                                            justifyContent: 'center',
                                                                            alignItems: 'flex-end',
                                                                            paddingRight: 15

                                                                        }}
                                                                        onPress={() => {
                                                                            // Alert.alert('跳过');
                                                                            // this.props.navigation.dispatch({
                                                                            //     type:'Wealth'
                                                                            // });
                                                                            NavigationUtil1.reset(this.props.navigation, 'Wealth')
                                                                        }}><Text
                    style={{fontSize: 14, color: 'black', backgroundColor: 'transparent'}}>跳过</Text></TouchableOpacity>}

                           navigation={this.props.navigation}/>
                <TouchableOpacity activeOpacity={1}
                                  style={{flex: 1}}
                                  onPress={() => {
                                      // Alert.alert('12212')
                                      this.setState({
                                          currentPage: this.state.currentPage += 1
                                      });
                                      console.log(this.state.currentPage);
                                      if (this.state.currentPage === 5) {
                                          // this.props.navigation.dispatch({
                                          //     type:'Wealth'
                                          // });
                                          NavigationUtil1.reset(this.props.navigation, 'Wealth')
                                      }
                                  }}>

                    <Image style={{flex: 1, resizeMode: 'stretch', width: width}}
                           source={this.state.currentPage === 0 ? require('../../../AImages/help/Help1x2.png')
                               : this.state.currentPage === 1 ? require('../../../AImages/help/Help2x2.png')
                                   : this.state.currentPage === 2 ? require('../../../AImages/help/Help3x2.png')
                                       : this.state.currentPage === 3 ? require('../../../AImages/help/Help4x2.png')
                                           : require('../../../AImages/help/Help5x2.png')
                           }/>

                </TouchableOpacity>
            </View>
        );
    }
};
const mapStateToProps = (state) => {
    return {
        nav: state.RS_Nav,
    }

};

export default connect(mapStateToProps)(HelpNews);



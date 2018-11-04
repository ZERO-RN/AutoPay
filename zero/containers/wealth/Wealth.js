/**
 * Created by zerowolf on 2017/12/6.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View, ScrollView,
    Dimensions, ListView, TouchableOpacity
} from 'react-native';
import s from '../AllStyles';
import Item from './item/Item';
const {width, height} = Dimensions.get('window');
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import PlanItem from './item/PlanItem';
import MyTabView from '../../view/MyTabView';

import SizeUtil from '../../utils/SizeUtil';
import NavigationUtil1 from '../../utils/NavigationUtil1';
import LinearGradient from 'react-native-linear-gradient';
import {New_Action,New_Nav}from '../../actions/NewAction';
 class Wealth extends Component {
    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '理财',
            header: null,
            headerBackTitle: null,
        }
    );

    constructor(props) {
        super(props);
        console.log(this.props.navigation);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            dataSource: ds.cloneWithRows(this._renderList())
        }
        this.renderRow = this._renderRow.bind(this);

        // this.props.initNavigation(this.props.navigation);
    }

    _renderList() {
        var row = [];

        row.push(<Item type={1} title={'分红计划'} content={'兼顾灵活与收益'}/>);
        row.push(<PlanItem type={1} left1_title={'新手标'}
                           left2_number={'9.00%'}
                           center_top_big={15}
                           center_top_small={'天'}
                           center_bottom={'10万起投'}
                           right_top_type={1}
                           right_bottom={'剩余5万元可投'}
                           onPress={() => {
                               this.props.initData(1,'9.00%',15,'10万起投','剩余5万元可投');
                               console.log(this.props.nav);
                               console.log(this.props.navigation);
                               console.log(this.props.dispatch);
                                this.props.navigation.dispatch({
                                    type: 'RedPlan'
                                })
                                // NavigationUtil1.reset(this.props.navigation,'RedPlan')
                           }}
        />);
        row.push(<PlanItem type={1} left1_title={'新手标'}
                           left2_number={'11.00%'}
                           center_top_big={27}
                           center_top_small={'天'}
                           center_bottom={'100元起投'}
                           right_top_type={1}
                           right_bottom={'剩余50万元可投'}
                           onPress={() => {
                               this.props.initData(1,'11.00%',27,'100元起投','剩余50万元可投');
                               this.props.navigation.dispatch({
                                   type: 'RedPlan'
                               })
                           }}
        />);

        row.push(<Item type={2} title={'稳健计划'} content={'兼顾灵活与收益'}/>);
        row.push(<PlanItem type={2}
                           left2_number={'8.00%'}
                           center_top_big={'存取灵活'}
                           center_bottom={'15元起投'}
                           right_top_type={2}
                           right_bottom={'剩余25万元可投'}

        />);


        row.push(<Item type={3} title={'定存计划'} content={'长期高回报'}/>);
        row.push(<PlanItem type={3}
                           left2_number={'12.00%'}
                           center_top_big={3}
                           center_top_small={'个月'}
                           center_bottom={'100元起投'}
                           right_top_type={3}
                           right_bottom={'剩余300万元可投'}
        />);
        row.push(<PlanItem type={3}
                           left2_number={'9.50%'}
                           center_top_big={5}
                           center_top_small={'个月'}
                           center_bottom={'100元起投'}
                           right_top_type={3}
                           right_bottom={'剩余600万元可投'}
        />);
        row.push(<PlanItem type={3}
                           left2_number={'11.00%'}
                           center_top_big={3}
                           center_top_small={'个月'}
                           center_bottom={'100元起投'}
                           right_top_type={3}
                           right_bottom={'剩余500万元可投'}
        />);

        return row;
    }

    _renderRow(data) {
        return (
            <View>
                {data}
            </View>
        )
    }


    render() {
        {/*<ListView dataSource={this.state.dataSource}*/
        }
        //shadowRadius:5,,shadowOffset:{width:10,height:10}
        {/*renderRow={this.renderRow}/>*/
        }
        return (
            <View style={{backgroundColor: 'white'}}>


                <MyTabView titleColor={'black'} title={'贝米计划'} navigation={this.props.navigation}/>
                {/*<View style={{flex: 1, backgroundColor: '#00f'}}/>*/}
                {/*<View style={{height: 60}}/>*/}
                <ListView
                    style={{height: Platform.OS==='ios'?height - 105:height - 115, paddingLeft: 10, paddingRight: 10}}
                    contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}/>

            </View>
        );
    }

}
const styles = StyleSheet.create({
    linearGradient: {
        width: SizeUtil.width,
        height: 60,
        backgroundColor: '#00f',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    selectedText: {
        color: 'grey',
        fontSize: 14,
    }
});
const mapStateToProps = (state) => ({
    nav: state.RS_Nav
});

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        initData: New_Action,
        // initNavigation:New_Nav
    }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(Wealth);

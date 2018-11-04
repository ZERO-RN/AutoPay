/**
 * Created by zerowolf on 2017/12/6.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';
import s from '../AllStyles';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Page_Auto from './Page_Auto';
import {Page_AutoPay, Pay_Navigator} from '../../actions/action_autopay'

class AutoPay extends Component {

    static navigationOptions = ({navigation, screenProps}) => ({
            headerTitle: '还款',
            header: null,
            headerBackTitle: null,
        }
    );


    constructor(props) {
        super(props);
        var url = "https://api.douban.com/v2/movie/top250?start=0&count=10";

        this.props.initAutoPayAction(false);
        this.props.initPayNavigatorAction(this.props.navigation);

    }

    componentWillMount() {
        // var request = new XMLHttpRequest();
        // request.onreadystatechange = (e) => {
        //     if (request.readyState != 4) {
        //         return;
        //     }
        //
        //     if (request.status === 200) {
        //         console.log('success', request.responseText);
        //     } else {
        //         console.warn('error');
        //     }
        // }
        // request.open("POST", "/captcha", true);
        // request.open('GET', 'https://api.douban.com/v2/movie/top250?start=0&count=10');
        // request.open('POST', 'http://localhost:8080/PostServlet');
        // request.send();


    }

    render() {
        return (
            this.props.RS_AutoPay ?
                <Page_Auto />
                :
                <Text style={{marginTop: 200}}>pppppppp</Text>
        );


    }
}

const mapStateToProps = (state) => {
    return {
        RS_AutoPay: state.RS_AutoPay.data,
       // RS_Navigate:state.RS_Navigate.data,
    }

};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        initAutoPayAction: Page_AutoPay,
        initPayNavigatorAction: Pay_Navigator,
    }, dispatch);
};


export default connect(mapStateToProps, mapDispatchToProps)(AutoPay);

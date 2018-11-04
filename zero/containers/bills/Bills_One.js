/**
 * Created by zerowolf on 2017/12/8.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {connect} from 'react-redux';
class Navigator extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        return (
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

                <TouchableOpacity activeOpacity={0.5}
                                  onPress={() => {
                                      this.props.RS_Navigate.dispatch({
                                          type: 'Pay_Manage', data: 'hahahha'
                                      });
                                  }}>
                    <Text style={{color: 'blue', fontSize: 18}}>
                        New Page !
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        RS_Nav: state.RS_Nav.data,
        RS_Navigate: state.RS_Navigate.data,
    }

};


export default connect(mapStateToProps)(Navigator);

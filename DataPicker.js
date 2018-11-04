import React, {Component} from 'react';
import{
    StyleSheet,
    View,
    Text,
    Button,
    TouchableHighlight,
    Image,
    Dimensions,
    Platform,
} from 'react-native';
var {width, height}=Dimensions.get('window');
import DateTimePicker from 'react-native-modal-datetime-picker';
import moment from 'moment';
export default class DataPicker extends Component{

    // getDefaultProps(){
    //     return{
    //     }
    // }

    static defaultProps={
            title:'',//标题
            readOnly:'',//是否可以点击
            applyDate:'1',//网络数据拉取回传Date
    }
    getInitialState(){
        return{
            isDateTimePickerVisible:false,
            Date:this.props.applyDate,

        }
    }
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount(){
        // alert('跳转进来了');
    }
    // propTypes:{
    //     ...View.propTypes,
    //     handleDatePicked:React.PropTypes.func.isRequired,
    // },
    render(){
        return(
            <View>
                <View style={styles.backViewStyle}>
                    <View style={{flexDirection:'row',alignItems:'center'}} >
                        <Text style={styles.titleTextStyle}>{this.props.title}</Text>
                    </View>

                    {this.renderdateTimeBtnView()}
                    {this.renderDateTimePicker()}
                </View>
            </View>

        )
    }
    renderdateTimeBtnView(){
        return (
            <TouchableHighlight
                style={{backgroundColor: 'white', height: 40, width: width - 24, marginLeft: 12,}}
                underlayColor='#4577e9'
                onPress={() => this.showDateTimePicker()}
            >
                <View style={styles.touchBackViewStyle}>
                    <Text style={styles.btnText}>{this.state.Date}</Text>

                    <Text>45556445658485645521</Text>
                </View>
            </TouchableHighlight>
        );
    }
    renderDateTimePicker(){
        return(
            <DateTimePicker
                titleIOS={'选择时间'}
                mode={'date'}
                isVisible={this.state.isDateTimePickerVisible}
                onConfirm={this.handleDatePicked.bind(this)}
                onCancel={this.hideDateTimePicker.bind(this)}/>
        )
    }
    showDateTimePicker(){
        // console.warn(this.props.readOnly);
        //只读不显示
        if(this.props.readOnly=='true') {

        }
        else {
            // console.warn('显示时间');
            this.setState({ isDateTimePickerVisible: true })
        }

    }
    hideDateTimePicker(){
        // console.warn('安卓隐藏');
        this.setState({isDateTimePickerVisible: false})
    }
    handleDatePicked(date){
        this.hideDateTimePicker();
        var DateFormat =  moment(date).format("YYYY-MM-DD");
        this.setState({Date:DateFormat})
        console.log(this.state.Date)
    }


};
const styles=StyleSheet.create({
    backViewStyle: {
        width: width,
        marginBottom:10,
    },
    titleTextStyle: {
        fontSize:Platform.OS=='ios'?11:13,
        color: '#97979f',
        paddingLeft: 15,
        marginBottom: 10,
    },
    touchBackViewStyle:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        height:40,
    },
    btnText:{
        fontSize:16,
        marginLeft:10,
        textAlign:'center',

    },
    dateImageStyle: {
        width: 25,
        height: 25,
        marginRight:10,
    },
})

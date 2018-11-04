import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text, Alert,
    View,
    ListView,
    RefreshControl,
    ScrollView,
    Dimensions
} from 'react-native';
const {width, height}= Dimensions.get('window');
export default class Navigator extends Component {
    constructor(props) {
        super(props);

        this.dataSource = [];
        this.renderList = this._renderList.bind(this);
        // this.dataSource = ['0', '1', '2', '3', '4', '5'];
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            List: ds.cloneWithRows(this._renderList()),
            refreshing: false,
            height:40
        };
        this.renderRow = this._renderRow.bind(this);

    }

    _renderList() {
        // this.dataSource.push('条目0');
        // this.dataSource.push('条目1');
        // this.dataSource.push('条目2');
        // this.ataSource.push('条目3');
        this.dataSource = ['0', '1', '2', '3', '4', '5'];

        // setTimeout(() => {
        //     this.setState({
        //         List: this.state.List.cloneWithRows(this.dataSource)
        //     });
        // }, 1000);

        return this.dataSource;
    }

    _onRefresh() {
        this.setState({
            refreshing: true,
        })

        setTimeout(() => {
            // this.dataSource = ['0', '1', '2', '3', '4', '5', '6'];
            this.dataSource.push('6');
            this.dataSource.push('7');
            this.dataSource.push('8');
            this.setState({
                List: this.state.List.cloneWithRows(this.dataSource),
                refreshing: false
            });
        }, 5000);

    }

    _renderRow(rowData, selected, rowId, highlightRow) {
        console.log(highlightRow);

        if (parseInt(rowId) % 2 === 0) {

            return (
                <View style={{
                    margin: 20,
                    padding: 20,
                    width: width / 1.5,
                    height: this.state.height,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                    backgroundColor: 'blue'
                }}>
                    <Text style={{fontSize: 20, height:40, alignSelf: 'center', color: 'white'}}>
                        {rowData + selected + rowId + '=====' + highlightRow}
                    </Text>
                </View>)
        } else {
            return (

                <View style={{
                    margin: 20,
                    padding: 20,
                    width: width / 1.5,
                    height: this.state.height,
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                    backgroundColor: 'red'
                }}>
                    <Text style={{fontSize: 20, height:40, color: 'white'}}>
                        {rowData + selected + rowId + '=====' + highlightRow}
                    </Text>
                </View>
            )
                ;
        }
    }

    render() {
        return (
            <ScrollView style={{marginTop: 40}} refreshControl={
                <RefreshControl refreshing={this.state.refreshing}
                                onRefresh={this._onRefresh.bind(this)}
                                title={'zhengzaishuaxin'}/>
            }>

                <ListView horizontal={true} dataSource={this.state.List} renderRow={this.renderRow}
                    // onChangeVisibleRows={(visibleRows,changedRows) => {
                    //     console.log('111'+visibleRows+'===='+changedRows)
                    //     this.setState({
                    //         height:200
                    //     })
                    // }}
                        onChangeVisibleRows={(visibleRows,c)=>{
                        }}
                >

                </ListView>
                <Text style={{marginTop: 60, fontSize: 20, height: 40, color: 'white'}}>
                    {this.state.string}
                </Text>
            </ScrollView>

        );
    }
};
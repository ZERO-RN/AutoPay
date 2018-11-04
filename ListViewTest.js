import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Content,
    TouchableOpacity,
    ListView,
    PixelRatio,
} from 'react-native';
var apps = {
    "data": [
        {
            "shops": [
                {
                    "name": "商品一"
                },
                {
                    "name": "商品二"
                },
                {
                    "name": "商品三"
                },
            ],
            "title": "分类1"
        },
        {
            "shops": [
                {
                    "name": "商品一"
                },
                {
                    "name": "商品二"
                }
            ],
            "title": "分类2"
        },
        {
            "shops": [
                {
                    "name": "商品一"
                },
            ],
            "title": "分类3"
        }
    ]
};

export default class ListViewTest extends Component{
    constructor(props) {
        super(props);
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        };

        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        };

        this.state = {
            dataSource: new ListView.DataSource({
                getSectionData: getSectionData, // 获取组中数据
                getRowData: getRowData, // 获取行中的数据
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2
            })
        };
    }
    // 请求数据放在这
    componentDidMount(){
        // 加载数据
        this.loadData();
    }

// 加载数据
    loadData(){
        var json = apps.data;
        var dataBlob = {},sectionIDs = [],rowIDs = [],cars = [];
        for (var i in json) {
            //step 1、把组数据放入sectionIDs数组中
            sectionIDs.push(i);
            //step 2、把组中内容放dataBlob对象中
            dataBlob[i] = json[i].title;
            //step 3、取出该组中所有的商品
            shops = json[i].shops;
            //step 4记录每一行中的数据
            rowIDs[i] = [];
            //step 5、获取行中每一组数据
            for (var j in shops) {
                //把行号放入rowIDs中
                rowIDs[i].push(j);
                //把每一行中的内容放dataBlob对象中
                dataBlob[i + ':' + j] = shops[j];
            }
        }
        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob, sectionIDs, rowIDs)
        });
    }

    render(){
        return(
            <View style={styles.outerViewStyle}>
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow.bind(this)}
                    renderSectionHeader={this.renderSectionHeader.bind(this)}
                />
            </View>
        );
    }

    renderRow(rowData, selected , rowId) {
        return (
            <TouchableOpacity activeOpacity={0.5}>
                <View style={styles.rowStyle}>
                    <Text style={{marginLeft: 5}}>{rowData.name+'-------'+selected+"...."+rowId}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    // 每一组中的数据
    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={styles.sectionHeaderViewStyle}>
                <Text style={{marginLeft: 5, color: 'white'}}>{sectionData+'======'+sectionID}</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    outerViewStyle: {
        //占满窗口
        flex: 1,
        marginTop:40
    },

    headerViewStyle: {
        height: 64,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center'
    },

    rowStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomColor: 'grey',
        borderBottomWidth: 1 / PixelRatio.get()
    },

    rowImageStyle: {
        width: 70,
        height: 70,
    },

    sectionHeaderViewStyle: {
        backgroundColor: 'red',
        height: 30,
        justifyContent: 'center'
    }
});

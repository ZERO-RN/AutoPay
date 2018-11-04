/**
 * Created by zerowolf on 2018/1/9.
 */
import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text, Alert,
    View,
    TouchableOpacity
} from 'react-native';
import Video from 'react-native-video';
export default class MyVideo extends Component {

    constructor(props){
        super(props);

        this.state={
            isPlay:false,
        };
        this.loadStart = this.loadStart.bind(this);
        this.setDuration = this.setDuration.bind(this);
        this.setTime = this.setTime.bind(this);
        this.onEnd = this.onEnd.bind(this);
        this.videoError = this.videoError.bind(this);

    }


    loadStart(){
        console.log('视频开始加载');
    }
    setDuration(){
        console.log('视频加载完成，即将播放');

    }
    setTime(){
        console.log('setTime');

    }
    onEnd(){
        console.log('视频播放完成');

    }
    videoError(){
        console.log('视频播放出错');

    }

    render() {
        return (
            <View style={{flex: 1,backgroundColor:'red', justifyContent: 'center', alignItems: 'center'}}>
                <Video source={require('./VID_20180109_092349.mp4')}   // Can be a URL or a local file.
                       ref={(ref) => {
                           this.player = ref
                       }}                                      // Store reference
                       rate={1.0}                              // 0 is paused, 1 is normal.
                       volume={1.0}                            // 0 is muted, 1 is normal.
                       muted={false}                           // Mutes the audio entirely.
                       paused={false}                          // Pauses playback entirely.
                       resizeMode="cover"                      // Fill the whole screen at aspect ratio.*
                       repeat={true}                           // Repeat forever.
                       playInBackground={false}                // Audio continues to play when app entering background.
                       playWhenInactive={false}                // [iOS] Video continues to play when control or notification center are shown.
                       ignoreSilentSwitch={"ignore"}           // [iOS] ignore | obey - When 'ignore', audio will still play with the iOS hard silent switch set to silent. When 'obey', audio will toggle with the switch. When not specified, will inherit audio settings as usual.
                       progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
                       onLoadStart={this.loadStart}            // Callback when video starts to load
                       onLoad={this.setDuration}               // Callback when video loads
                       onProgress={this.setTime}               // Callback every ~250ms with currentTime
                       onEnd={this.onEnd}                      // Callback when playback finishes
                       onError={this.videoError}               // Callback when video cannot be loaded
                       onBuffer={this.onBuffer}                // Callback when remote video is buffering
                       onTimedMetadata={this.onTimedMetadata}  // Callback when the stream receive some metadata
                       style={styles.backgroundVideo}/>

                <TouchableOpacity style={styles.button}
                                  onPress={()=>{

                                      this.setState({
                                          isPlay:!this.state.isPlay,
                                      })

                                      //this.refs.player.seek(20);//播放前进到第20秒
                                      //this.refs.player.presentFullscreenPlayer();//iOS调用系统的播放器

                                  }}>

                    <Text>暂停/播放</Text>

                </TouchableOpacity>
            </View>
        );

    }
}
var styles = StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});
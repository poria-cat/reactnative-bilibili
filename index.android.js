/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  PixelRatio
} from 'react-native';
const {height,width} = Dimensions.get("window");
import Icon from 'react-native-vector-icons/Ionicons';

function Box(){
  return (
    <View style={styles.boxContainer}>

      <Image style={styles.videoCover} source={require('./4.jpg')}>
        <Text style={[styles.videoMeta,styles.playNums]}>播1</Text>
        <Text style={[styles.videoMeta,styles.danmuNums]}>弹1</Text>
        <Text style={[styles.videoMeta,styles.videoTime]}>1:32</Text>
      </Image>

      <View style={styles.videoInfoContainer}>

        <Text style={styles.videoTitle}>我可能看到了假标题</Text>
        <Text style={styles.videoTag}>短片</Text>

        <View  style={styles.authorInfoContainer}>

          <Image style={styles.avatar} source={require('./4.jpg')}/>
          <View style={styles.authorInfoRight}>
            <Text style={styles.authorInfoText}>茯苓</Text>  
            <Text style={styles.authorInfoText}>7分前</Text>  
          </View>
      </View>
         
      </View>
    </View>
  )
}
export default class bilibili extends Component {
  render() {
    return (
     <View>
       <View style={styles.header}>
         <View style={styles.headerContainer}>
         
          <View style={styles.headerLeft}>
            <Icon name="md-menu" color="#FAFAFA" size={30} style={{paddingLeft:-15}} />
            <Text style={{color:"#FAFAFA"}}>Login</Text>
          </View>
          <View style={styles.headerRight}>
            <Icon name="md-download" color="#FAFAFA" size={20} style={{paddingRight:20 }}  />
            <Icon name="md-search" color="#FAFAFA" size={20} style={{paddingRight:15 }}  />
          </View>
         </View>

        <View style={styles.headerMenu}>
          <Text style={styles.menuText}>LIVE</Text>
          <Text style={styles.menuText}>HOME</Text>
          <Text style={styles.menuText}>BANGUMI</Text>
          <Text style={styles.menuText}>CATEGORY</Text>
          <Text style={styles.menuText}>DISCOVERY</Text>
         </View>
       </View>

       <View style={styles.bodyHeader}>
          <View style={styles.bodyHeaderLeft}>
            <Text>全部</Text>
            <Text>|</Text>
            <Text>up主</Text>
            
          </View>
          <View style={{flex:1}}>
            <Text></Text>
          </View>
          <View style={styles.bodyHeaderRight}>
            <Text>233</Text>
          </View>
       </View>
        {/*<Text>TAT</Text>
        <Img />
      <Image source={require('./leimu.jpg')}
      />
      */}
      <ScrollView>
      <View style={styles.bodyContainer}>
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
        <Box />
      </View>
      </ScrollView>
     </View>
    );
  }
}


const styles = StyleSheet.create({
  header: {
    height:height*0.15,
    backgroundColor:"#FB7299",
    elevation:4
  },
  headerContainer: {
    flex:1,
    flexDirection:"row"
  },
  headerLeft: {
    flex:1,
    flexDirection:"row",
    justifyContent:'flex-start',
    alignItems:'center'
  },
  headerRight: {
    flex:1,
    flexDirection:"row",
    justifyContent:'flex-end',
    alignItems:'center'
  },
  headerMenu: {
    flex:1,
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:'flex-end',
    paddingBottom:10
  },
  menuText: {
    color:"#FAFAFA"
  },
  bodyHeader: {
    height:height*0.08,
    backgroundColor:"#F4F4F4",
    flexDirection:'row',
    alignItems:'center'
  },
  bodyHeaderLeft: {
    flex:2,
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'flex-start'
  },
  bodyHeaderRight: {
    flex:2,
    alignItems:'flex-end'
  },
  bodyContainer: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',
    flexWrap:'wrap',
    margin:10
  },
  boxContainer: {
    width:width*0.4,
    borderRadius:5,
    borderWidth:1,
    borderColor:'#FAFAFA',
    height:height*0.4,
    margin:5
  },
  videoCover: {
    width:width*0.4,
    height:height*0.2
  },
  videoMeta: {
    position:'absolute',
    bottom:2,
    color:"#FAFAFA"
  },
  playNums: {
    left:2,
    fontSize:12,
  },
  videoTime: {
    right:2,
    fontSize:12
  },
  danmuNums: {
    left:width*0.08,
    fontSize:12
  },
  videoInfoContainer: {
    height:height*0.2,
    backgroundColor:'#FAFAFA'
  },
  videoTitle: {
    padding:10,
    paddingTop:5
  },
  videoTag: {
    padding:10,
    paddingTop:0
  },
  authorInfoContainer: {
    flex:1,
    flexDirection:'row'
  },
  avatar: {
    marginLeft:10,
    width:width*0.1,
    height:width*0.1,
    borderRadius:width*0.1
  },
  authorInfoRight: {
    flex:1,flexDirection:'column',paddingLeft:10
  },
  authorInfoText: {
    fontSize:12
  }
  
});

AppRegistry.registerComponent('bilibili', () => bilibili);

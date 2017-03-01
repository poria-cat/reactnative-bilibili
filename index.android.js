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
    <View style={{width:width*0.4,borderRadius:5,borderWidth:1,borderColor:'#FAFAFA',height:height*0.4,margin:5}}>
          <Image style={{width:width*0.4,height:height*0.2}} source={require('./4.jpg')}
      >
      <View style={{backgroundColor:'rgba(219, 219, 219, 0.2)',position:'absolute',width:width*0.4,height:height*0.05,bottom:0}}>
      <Text style={{position:'absolute',bottom:2,left:2,fontSize:12,color:"#FAFAFA"}}>播1</Text>
      <Text style={{position:'absolute',bottom:2,left:width*0.08,fontSize:12,color:"#FAFAFA"}}>弹1</Text>
      <Text style={{position:'absolute',bottom:2,right:2,fontSize:12,color:"#FAFAFA"}}>1:32</Text>
      
      </View>
      
      
      </Image>
      <View style={{height:height*0.2,backgroundColor:'#FAFAFA'}}>
        <Text style={{padding:10,paddingTop:5,fontFamily: 'monospace'}}>我可能看到了假标题</Text>
        <Text style={{padding:10,paddingTop:0,fontFamily: 'monospace'}}>短片</Text>
        <View  style={{flex:1,flexDirection:'row'}}>
         <Image style={{marginLeft:10,width:width*0.1,height:width*0.1,borderRadius:width*0.1}} source={require('./2.jpg')}/>
            <View style={{flex:1,flexDirection:'column',paddingLeft:10}}>
            <Text style={{fontSize:12}}>茯苓</Text>  
            <Text style={{fontSize:12}}>7分前</Text>  
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
       <View style={{height:height*0.15,backgroundColor:"#FB7299",elevation:4}}>
         <View style={{flex:1,flexDirection:"row"}}>
         
          <View style={{flex:1,flexDirection:"row",justifyContent:'flex-start',alignItems:'center'}}>
            <Icon name="md-menu" color="#FAFAFA" size={30} style={{paddingLeft:-15}} />
            <Text style={{color:"#FAFAFA"}}>Login</Text>
          </View>
          <View style={{flex:1,flexDirection:"row",justifyContent:'flex-end',alignItems:'center'}}>
            <Icon name="md-download" color="#FAFAFA" size={20} style={{paddingRight:20 }}  />
            <Icon name="md-search" color="#FAFAFA" size={20} style={{paddingRight:15 }}  />
          </View>
          
         
          
         </View>
        <View style={{flex:1,flexDirection:"row",justifyContent:"space-around",alignItems:'flex-end',paddingBottom:10}}>
          <Text style={{color:"#FAFAFA"
          }}>LIVE</Text>
          <Text style={{color:"#FAFAFA"}}>HOME</Text>
          <Text style={{color:"#FAFAFA"}}>BANGUMI</Text>
          <Text style={{color:"#FAFAFA"}}>CATEGORY</Text>
          <Text style={{color:"#FAFAFA"}}>DISCOVERY</Text>
         </View>
        
       </View>
       <View style={{height:height*0.08,backgroundColor:"#F4F4F4",flexDirection:'row',alignItems:'center'}}>
          <View style={{flex:2,flexDirection:'row',justifyContent:'space-around',alignItems:'flex-start'}}>
            <Text>全部</Text>
            <Text>|</Text>
            <Text>up主</Text>
            
          </View>
          <View style={{flex:1}}>
            <Text></Text>
          </View>
          <View style={{flex:2,alignItems:'flex-end'}}>
            <Text>233</Text>
          </View>
       </View>
        {/*<Text>TAT</Text>
        <Img />
      <Image source={require('./leimu.jpg')}
      />
      */}
      <ScrollView>
      <View style={{flex:1,flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap',margin:10}}>
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
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('bilibili', () => bilibili);

import { View, Text, useWindowDimensions, StatusBar,StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'

import  colors  from '../assets/styles/Styles'
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import {styles} from '../assets/styles/Styles'
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { useState, useEffect }  from 'react'





const ObjectRecognition = ({navigation}) => {

  const [bg, setBg] = useState('white');
  const [iconColor, setIconColor] = useState('black');
  const [box_value_change, setCol] = useState('');


  
  const onPress = () =>{
  if(bg == 'white'){
      setBg('#EE2D7B');
      setIconColor('white');
      setCol({
        color: '#fff',
        textShadowColor: 'black', 
        textShadowRadius: 5, 
        textShadowOffset: {width: 1, height: 1},
        top: 0, left: 0, right: 0, bottom: 0
      });
    }else{
      setBg('white');
      setIconColor('black');
      setCol('');
    }
    
  }

  const [bg2, setBg2] = useState('white');
  const [iconColor2, setIconColor2] = useState('black');
  const onPress2 = () =>{
  if(bg2 == 'white'){
      setBg2('#EE2D7B');
      setIconColor2('white');

    }else{
      setBg2('white');
      setIconColor2('black');
    }
    
  }

  const [bg3, setBg3] = useState('white');
  const [iconColor3, setIconColor3] = useState('black');
  const onPress3 = () =>{
  if(bg3 == 'white'){
      setBg3('#EE2D7B');
      setIconColor3('white');
    }else{
      setBg3('white');
      setIconColor3('black');
    }
    
  }

  const [imgshow, setBoxContent] = useState('none');
  const [showletter, setShowLetter] =useState('flex');
  const [buttontext, setButtonText] =useState('Word Card');
  const [showtitle, setShowTitle] = useState(0);
  


  const Change = () =>{
    if(imgshow == 'none'){
      setBoxContent('flex');
      setShowLetter('none');
      setButtonText('Number Card')
      setShowTitle(1);
    }else{
      setBoxContent('none');
      setShowLetter('flex');
      setButtonText('Word Card')
      setShowTitle(0);
    }
  }


  const {width}= useWindowDimensions();

  
  return (
    <View style={[styles.container,{width}]}>
      <StatusBar  backgroundColor={'transparent'} translucent={true}  />
        
       <View style={[styles.circles]}>
        <View style={[styles.circle,styles.circle1]}></View>
        <View style={[styles.circle,styles.circle2]}></View>
        <View style={[styles.circle,styles.circle3]}></View>
        <View style={[styles.circle,styles.circle4]}></View>
        <View style={[styles.circle,styles.circle5]}></View>
        <View style={[styles.circle,styles.circle6]}></View>
        <View style={[styles.circle,styles.circle7]}></View>
      </View> 

      <View style={[styles.main,{width, paddingBottom:30}]}>
        <View style={styles.topnav}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')} activeOpacity={0.7}>
            <AntDesign name='arrowleft' style={{
              fontSize: 28,
              color: 'white',
            }}/>
          </TouchableOpacity>
          <Text style={{color: 'white', fontFamily: 'mon_bold'}}>1/26</Text>
          <View style={styles.right_navbtns}>
            <TouchableOpacity   onPress={onPress3} activeOpacity={0.7}  style={[styles.navbtn,{backgroundColor:bg3}]}>
              <Image source={require('../assets/images/sound.png')} style={[styles.btnicon, { resizeMode: 'contain', tintColor:iconColor3}]}/>
            </TouchableOpacity>
          </View>

        </View>
        <View style={styles.object_title}>
            <Text style={styles.object_text}>Bag</Text>
        </View>
        <View style={[styles.choices,{width:'95%'}]}>
          {/* If correct */}
          <TouchableOpacity   activeOpacity={0.7}  style={[styles.btnchoice,{width:'47%',height:145,backgroundColor:'#A7F4A3'}]}>
            <Image source={require('../assets/images/objects/bag.png')} style={[styles.choice_img,{width:105,opacity:0.7}]}/>
          </TouchableOpacity>
          <TouchableOpacity   activeOpacity={0.7}  style={[styles.btnchoice,{width:'47%',height:145}]}>
            <Image source={require('../assets/images/objects/cup.png')} style={[styles.choice_img,{width:105}]}/>
          </TouchableOpacity>
          <TouchableOpacity   activeOpacity={0.7}  style={[styles.btnchoice,{width:'47%',height:145}]}>
            <Image source={require('../assets/images/objects/shoes.png')} style={[styles.choice_img,{width:105}]}/>
          </TouchableOpacity>

          <TouchableOpacity   activeOpacity={0.7}  style={[styles.btnchoice,{width:'47%',height:145,backgroundColor: '#FFB3B3'}]}>
            <Image source={require('../assets/images/objects/umbrela.png')} style={[styles.choice_img,{width:105,opacity:0.7}]}/>
          </TouchableOpacity>
         
        </View>
        <View style={styles.bottom_buttons_full}>
            <TouchableOpacity  onPress={() => navigation.navigate('Complete2')}
            style={[
                styles.bottom_btn,
                styles.bottom_btn_full,
                {alignItems:'center',
                width:'95%', 
                flexDirection:'row',
                justifyContent:'center',
                paddingVertical:20,
                position:'relative',
              }]} activeOpacity={0.7}>
              <Text style={[styles.bottom_btn_text,{fontSize:20}]}>
                Good!</Text>
              <Entypo name='chevron-right' style={[styles.bottom_arr_icon,{fontSize:35,position:'absolute',right:25}]}/>
                
            </TouchableOpacity> 
        </View>
      </View>

    </View>
  )
}


export default ObjectRecognition;
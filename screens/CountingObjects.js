import { View, Text, useWindowDimensions, StatusBar,StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native'

import  colors  from '../assets/styles/Styles'
import { LinearGradient } from 'expo-linear-gradient';
import Entypo from 'react-native-vector-icons/Entypo';
import {styles} from '../assets/styles/Styles'
import AntDesign from 'react-native-vector-icons/AntDesign';
import React, { useState, useEffect }  from 'react'





const CountingObjects = ({navigation}) => {

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
        <View style={styles.center_box}>
            <Text style={[styles.box_title,{color:'#F19336', fontSize:18, opacity:0 }]}>Awesome!</Text>
            <Text style={[styles.box_title,{color:'#000', fontFamily:'mon_semibold', fontSize:12, top:55, opacity:0 }]}>Proceed to the next letter.</Text>
            <View style={styles.box_content}>
              {/* if correct */}
              {/* <Image source={require('../assets/images/abc/correct.png')} style={[styles.box_value_img,{width:'80%',marginTop:40}]}/> */}
              {/* if wrong */}
              {/* <Image source={require('../assets/images/abc/wrong.png')} style={[styles.box_value_img,{width:'80%',marginTop:40}]}/> */}

              <Image source={require('../assets/images/numbers/5objects.png')} style={[styles.box_value_img,{width:'70%', marginTop:0}]}/>
            </View>
        </View>
        <View style={styles.choices}>
          <TouchableOpacity   activeOpacity={0.7}  style={[styles.btnchoice,{overflow: 'hidden'}]}>
            <LinearGradient
                style={{width:'100%',position:'absolute',zIndex:-1,height:'100%',transform:[{scale:1.7},{rotate:'-45deg'}]}}  
                colors={['#22E5E6', '#B38DE4']}
              />  
            <Image source={require('../assets/images/numbers/2.png')} style={[styles.choice_img]}/>
            
          </TouchableOpacity>
          <TouchableOpacity   activeOpacity={0.7}  style={[styles.btnchoice]}>
            <Image source={require('../assets/images/numbers/3.png')} style={[styles.choice_img]}/>
          </TouchableOpacity>
          <TouchableOpacity   activeOpacity={0.7}  style={[styles.btnchoice]}>
            <Image source={require('../assets/images/numbers/num1.png')} style={[styles.choice_img]}/>
          </TouchableOpacity>
          <TouchableOpacity   activeOpacity={0.7}  style={[styles.btnchoice]}>
            <Image source={require('../assets/images/numbers/5.png')} style={[styles.choice_img]}/>
          </TouchableOpacity>
          <TouchableOpacity   activeOpacity={0.7}  style={[styles.btnchoice]}>
            <Image source={require('../assets/images/numbers/6.png')} style={[styles.choice_img]}/>
          </TouchableOpacity>
          <TouchableOpacity   activeOpacity={0.7}  style={[styles.btnchoice]}>
            <Image source={require('../assets/images/numbers/4.png')} style={[styles.choice_img]}/>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom_buttons_full}>
            <TouchableOpacity  onPress={() => navigation.navigate('Complete3')} style={[styles.bottom_btn,styles.bottom_btn_full]} activeOpacity={0.7}>
              <Text style={styles.bottom_btn_text}>Submit</Text>
            </TouchableOpacity> 
        </View>
      </View>

    </View>
  )
}


export default CountingObjects;
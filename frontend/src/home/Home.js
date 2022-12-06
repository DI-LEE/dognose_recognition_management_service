import React from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, ImageBackground } from 'react-native';
import BottomTabNavigationApp from '../BottomTabNavigationApp';
import imageHome from '../../assets/home/image-home.png';
import imageHome2 from '../../assets/home/image-home2.png';

import imageHome3 from '../../assets/home/image-final-home.png';

function Home({navigation}){

    return (
        <ScrollView style={{backgroundColor: '#FFFFFF'}}>
            <View style={{alignItems: 'center'}}>
            <Image source={imageHome3} style={{height: 1100, width: '100%'}}/>
            {/*<View style={{backgroundColor: '#000000', width: '100%', height: 234, padding: 20}}>
                <Text style={{fontSize: 24, color: '#FFFFFF', marginBottom: 15, fontFamily: 'bamin'}}>{'오늘의 추천 게시글'}</Text>
                <Image source={imageHome} style={{height: 140, width: 234}}/>
            </View>
            <View style={{padding: 20, alignItems: 'center'}}>
                <ImageBackground source={imageHome2} style={{backgroundColor: '#FFF', width: 320, height: 237, borderRadius: 4, shadowColor: '#000', shadowOffset:{
                    width: 0, height: 2
                }, shadowOpacity: 0.25, shadowRadius: 3.84, marginBottom: 20, padding: 20}}>
                    <Text style={{color: '#363636', fontSize: 24, lineHeight: 36, textShadowColor: 'rgba(0,0,0,0.3)', textShadowOffset: {width: 3, height: 4}, textShadowRadius: 5,fontFamily: 'bamin'}}>{'새로운 반려견 정보집,\n보러가실래요?'}</Text>
                    
                </ImageBackground>
                <View style={{backgroundColor: '#64aaff', width: 320, height: 237, borderRadius: 4, shadowColor: '#000', shadowOffset:{
                    width: 0, height: 2
                }, shadowOpacity: 0.25, shadowRadius: 3.84}}></View>

            </View>*/}
            </View>
            
        </ScrollView>
    )


}

export default Home;
import React from 'react';
import { ImageBackground, View, Image, Button, Text } from 'react-native';
import landingImg from '../../assets/login/image-landing.jpg';
import appleImg from '../../assets/login/image-apple.png';
import googleImg from '../../assets/login/image-google.png';

function Landing({navigation}){
    return (
        <>
            <ImageBackground
                source={landingImg}
                style={{height: '100%', width: '100%'}}
            >
                <View style={{height: '100%', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.5)', display: 'flex', justifyContent: 'space-between', paddingBottom: '20%', paddingTop: 110}}>
                    <Text style={{paddingLeft: 30, fontSize: 36, fontWeight: '700', color: '#FFFFFF', lineHeight: 48, textShadowColor: 'rgba(0,0,0,0.5)', textShadowOffset: {width: 2, height: 3}, textShadowRadius: 10, fontFamily: 'nanumR'}}>{'반려견과의 한걸음,\n시작해볼까요?'}</Text>
                    <View style={{alignItems: 'center'}}>
                        <Image source={appleImg} style={{width: 288, height: 52, marginBottom: 14}}/>
                        <Image source={googleImg} style={{width: 288, height: 52, marginBottom: 20}}/>
                        <Text style={{fontSize: 16, fontWeight: '600', color: '#0f8f22'}} onPress = {() => navigation.navigate('Home')}>{'or continue as guest'}</Text>
                    </View>
                </View>
            </ImageBackground>
        </>
    )
}

export default Landing;

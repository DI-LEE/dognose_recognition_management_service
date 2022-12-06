import { React, useState, useEffect } from 'react';
import iconSpinner from '../../assets/icon-spinner.png';

import { Button, StyleSheet, Text, TouchableOpacity, View, Image, Pressable, Animated, Easing } from 'react-native';

function CameraPrintRegisterLoading ({navigation}){

    const [animationState, setAnimationState] = useState(new Animated.Value(0));



    useEffect(() => {
        Animated.loop(
            Animated.timing(
                animationState,
              {
               toValue: 1,
               duration: 3000,
               easing: Easing.linear,
               useNativeDriver: true
              }
            )
           ).start();

        setTimeout(() => navigation.navigate('RegisterInfoFinish'),5000);
    },[]);

    return (
        <View style={{width: '100%', height: '100%', backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 24, marginBottom: 56, textAlign: 'center', lineHeight: 36, fontFamily: 'nanumR'}}>{'반려견의 비문을\n등록 중입니다.'}</Text>
            
            <Animated.Image
                style={{transform: [{rotate:  animationState.interpolate({
                    inputRange: [0, 1],
                    outputRange: ['0deg', '360deg']
                  })}] }}
                source={iconSpinner} />
        </View>

    )
}

export default CameraPrintRegisterLoading;
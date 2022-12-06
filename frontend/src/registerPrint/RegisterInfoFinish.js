import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';

function RegisterInfoFinish ({navigation}){

    return (
        <View style={{backgroundColor: '#FFFFFF', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40}}>
            <Text style={{fontWeight: 'bold', fontSize: 24, marginBottom: 20, lineHeight: '140%', fontFamily: 'nanumR'}}>등록 완료하였습니다!</Text>
            <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <Pressable style={styles.button1}>
                    <Text style={styles.text1} onPress = {() => navigation.navigate('Home')}>{'홈으로 돌아가기'}</Text>
                </Pressable>
                <Pressable style={styles.button2}>
                <Text style={styles.text2} onPress = {() => navigation.navigate('EditProfile')}>{'편집하기로 돌아가기'}</Text>
                </Pressable>
            </View>

        </View>

    )

}

const styles = StyleSheet.create({
    button1: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 10,
      borderColor: '#747B84',
      borderWidth: 1,
      elevation: 3,
      backgroundColor: '#FFFFFF',
      marginTop: 10,
      height: 48,
      marginRight: 10
    },
    button2: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'black',
        marginTop: 10,
        height: 48
      },
    text1: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#747B84',
      fontFamily: 'nanumR'
    },
    text2: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        fontFamily: 'nanumR'
      },
  });

export default RegisterInfoFinish;
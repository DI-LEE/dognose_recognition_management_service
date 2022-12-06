import React from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image } from 'react-native';
import iconCamera from '../../assets/icon-camera.png';

function SearchPrintNotification ({navigation}){
    return (
        <View style={{height: '100%', backgroundColor: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            <View style={{width: 340, borderWidth: 1}}>
                <View style={{height: 55, backgroundColor: '#000000', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <Image source={iconCamera} style={{marginRight: 16, width: 28, height: 28, marginLeft: 12}}/>
                    <Text style={{fontSize: 18, color: '#FFFFFF', fontFamily: 'nanumR'}}>{'사진을 촬영하시겠습니까?'}</Text>
                </View>
                <View style={{padding: 12}}>
                    <Text style={{fontSize: 12, lineHeight: 24, marginBottom: 24, fontFamily: 'nanumR'}}>{'강아지 사진을 촬영하여\n비문 검색을 진행하시겠습니까?\n취소를 누를 경우 이전 화면으로 돌아갑니다.'}</Text>
                    
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Pressable style={styles.button1}>
                        <Text style={styles.text1} onPress = {() => navigation.navigate('RegisterInfo')}>{'취소'}</Text>
                    </Pressable>
                    <Pressable style={styles.button2}>
                        <Text style={styles.text2} onPress = {() => navigation.navigate('CameraPrint')}>{'촬영'}</Text>
                    </Pressable>
                    </View>
                </View>
            </View>

        </View>
    )

}

export default SearchPrintNotification;

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
        color: '#FFFFFF',
        fontFamily: 'nanumR'
      },
  });
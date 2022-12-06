import { React, useState } from 'react';

import { StyleSheet, Text, View, Button, Image, ScrollView, ImageBackground ,Dimensions,Pressable, TextInput } from 'react-native';

function WeightAddPage ({navigation}){

    const [birthDate, setBirthDate] = useState('');
    const [weight, setWeight] = useState('');

    return (
        <View style={{backgroundColor: '#FFF', paddingLeft: 20, paddingRight: 20, width: '100%', height: '100%'}}>
            <Text style={{fontWeight: 'bold', fontSize: 24, marginBottom: 40, marginTop: 60}}>{'날짜별 몸무게 추가하기'}</Text>
            <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14}}>{'기록하려는 날짜'}</Text>
            <TextInput
                style={{width: '100%', height: 46, backgroundColor: '#FFFFFF', marginBottom: 20, borderColor: '#000000', borderWidth: 2, borderStyle: 'solid', borderRadius: 15}}
                value={birthDate}
                onChangeText={(text) => setBirthDate(text)}
                autoCapitalize="sentences"
                autoCorrect
                returnKeyType="next"
                onEndEditing={() => console.log("onEndEditing")}
                onSubmitEditing={() => console.log("onSubmitEditing")}
                />

            <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14}}>{'몸무게'}</Text>
            <TextInput
                style={{width: '100%', height: 46, backgroundColor: '#FFFFFF', marginBottom: 40, borderColor: '#000000', borderWidth: 2, borderStyle: 'solid', borderRadius: 15}}
                value={weight}
                onChangeText={(text) => setWeight(text)}
                autoCapitalize="sentences"
                autoCorrect
                returnKeyType="next"
                onEndEditing={() => console.log("onEndEditing")}
                onSubmitEditing={() => console.log("onSubmitEditing")}
                />
                 <Pressable style={styles.button2}>
                    <Text style={styles.text2}>{'몸무게 변화 추가하기'}</Text>
                    </Pressable>      

        </View>

    )
}

export default WeightAddPage;

const styles = StyleSheet.create({
    lineStyle:{
          borderWidth: 0.5,
          borderColor:'#E2E2E2',
          marginTop: 40,
          marginBottom: 40
     },
        button1: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 10,
          borderColor: '#747B84',
          elevation: 3,
          borderWidth: 1,
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
            height: 48,
            marginBottom: 80
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
          }
   });
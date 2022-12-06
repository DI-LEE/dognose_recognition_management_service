import { React, useState } from 'react';

import { StyleSheet, Text, View, Button, Image, ScrollView, ImageBackground ,Dimensions,Pressable, TextInput } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

function HospitalEdit (){

    const [hospital, setHospital] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [heartDate, setHeartDate] = useState('');

    const navigation = useNavigation();

    
    const _postProfile = async () => {
        

        const response = await axios.put(`http://220.120.192.122:8080/pet-hospital/name-day/1/`, {
            //id : 1,
            hospitalnameing : hospital,
            vaccination : birthDate,
            heartworm : heartDate
        })

        navigation.goBack(null);
    
    }


    return (
        <View style={{backgroundColor: '#FFF', paddingLeft: 20, paddingRight: 20, width: '100%', height: '100%'}}>
            <Text style={{fontWeight: 'bold', fontSize: 24, marginBottom: 40, marginTop: 60}}>{'편집하기'}</Text>
            <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14}}>{'현재 다니고 있는 병원'}</Text>
            <TextInput
                style={{width: '100%', height: 46, padding: 10, backgroundColor: '#FFFFFF', marginBottom: 20, borderColor: '#000000', borderWidth: 2, borderStyle: 'solid', borderRadius: 15}}
                value={hospital}
                onChangeText={(text) => setHospital(text)}
                autoCapitalize="sentences"
                autoCorrect
                returnKeyType="next"
                onEndEditing={() => console.log("onEndEditing")}
                onSubmitEditing={() => console.log("onSubmitEditing")}
                />

            <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14}}>{'예방 접종 날짜'}</Text>
            <TextInput
                style={{width: '100%', height: 46, padding: 10, backgroundColor: '#FFFFFF', marginBottom: 40, borderColor: '#000000', borderWidth: 2, borderStyle: 'solid', borderRadius: 15}}
                value={birthDate}
                onChangeText={(text) => setBirthDate(text)}
                autoCapitalize="sentences"
                autoCorrect
                placeholder='YYYY-MM-DD'
                returnKeyType="next"
                onEndEditing={() => console.log("onEndEditing")}
                onSubmitEditing={() => console.log("onSubmitEditing")}
                />
                 <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14}}>{'심장 사상충 날짜'}</Text>
            <TextInput
                style={{width: '100%', height: 46, padding: 10, backgroundColor: '#FFFFFF', marginBottom: 40, borderColor: '#000000', borderWidth: 2, borderStyle: 'solid', borderRadius: 15}}
                value={heartDate}
                onChangeText={(text) => setHeartDate(text)}
                autoCapitalize="sentences"
                autoCorrect
                placeholder='YYYY-MM-DD'
                returnKeyType="next"
                onEndEditing={() => console.log("onEndEditing")}
                onSubmitEditing={() => console.log("onSubmitEditing")}
                />
                 <Pressable style={styles.button2} onPress={_postProfile}>
                    <Text style={styles.text2}>{'편집하기'}</Text>
                    </Pressable>      

        </View>

    )
}

export default HospitalEdit;

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
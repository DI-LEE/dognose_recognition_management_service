import CheckBox from 'expo-checkbox';
import { React, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, ImageBackground ,Dimensions,Pressable, TouchableOpacity } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import axios from 'axios';

const HospitalDiaryDetail = ({route}) => {
    const [date, setDate] = useState();
    const [id, setId] = useState();
    const [imageUri, setImageUri] = useState();
    const [hospital, setHospital] = useState();
    const [body, setBody] = useState();
    const [required, setRequired] = useState();
    const [title, setTitle] = useState();
    const isFocused = useIsFocused();

    const _getPofile = async () => {
        const response = await axios.get(`http://220.120.192.122:8080/pet-hospital/hospitaldiary/${route.params.id}/`);
        setHospital(response.data.hospital_name);
        setBody(response.data.body);
        setRequired(response.data.required);
        setImageUri(response.data.image);
        setDate(response.data.days);
        setTitle(response.data.title);
    }

    useEffect(() => {
      _getPofile();
  
    },[isFocused]);
    console.log(route);

    return (
        <ScrollView style={{backgroundColor: '#FFF', paddingLeft: 20, paddingRight: 20, width: '100%', height: '100%'}}>
            <Text style={{fontWeight: '600', fontSize: 36, color: '#09101D', marginBottom: 36, marginTop: 100,fontFamily: 'bamin'}}>{date}</Text>
            {imageUri && <Image source={{ uri: imageUri }} style={{width: '100%', height: 300, borderWidth: 2, borderRadius: 10, marginBottom: 36}}/>}
            <View>
                <Text style={{fontWeight: '600', fontSize: 24, color: '#09101D', marginBottom: 14, fontFamily: 'bamin'}}>제목</Text>
                <Text style={{fontWeight: '600', fontSize: 16, color: '#09101D', marginBottom: 36, fontFamily: 'nanumR'}}>{title}</Text>
            </View>
            <View>
                <Text style={{fontWeight: '600', fontSize: 24, color: '#09101D', marginBottom: 14, fontFamily: 'bamin'}}>병원 이름</Text>
                <Text style={{fontWeight: '600', fontSize: 16, color: '#09101D', marginBottom: 36, fontFamily: 'nanumR'}}>{hospital}</Text>
            </View>
            <View>
                <Text style={{fontWeight: '600', fontSize: 24, color: '#09101D', marginBottom: 14, fontFamily: 'bamin'}}>일지 내용</Text>
                <Text style={{fontWeight: '600', fontSize: 16, color: '#09101D', marginBottom: 36, fontFamily: 'nanumR'}}>{body}</Text>
            </View>
            <View>
                <Text style={{fontWeight: '600', fontSize: 24, color: '#09101D', marginBottom: 14, fontFamily: 'bamin'}}>특이 사항</Text>
                <Text style={{fontWeight: '600', fontSize: 16, color: '#09101D', marginBottom: 36, fontFamily: 'nanumR'}}>{required}</Text>
            </View>
        </ScrollView>
    )

}

export default HospitalDiaryDetail;
import { React, useState } from 'react';

import { StyleSheet, Text, View, Button, Image, ScrollView, ImageBackground ,TextInput,Pressable } from 'react-native';
import CheckBox from 'expo-checkbox';

import * as ImagePicker from 'expo-image-picker';

import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import * as FileSystem from 'expo-file-system';


function HospitalDiaryEdit(){
    const [title, setTitle] = useState('');
    const [hospitalName, setHospitalName] = useState('');
    const [days, setDays] = useState('');
    const [content, setContent] = useState('');
    const [required, setRequired] = useState('');
    const [imageUri, setImageUri] = useState(null);
    
    const [file, setFile] = useState(1);
    const navigation = useNavigation();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1
        });
    
        //console.log(result);
        if (!result.cancelled) {
          setImageUri(result.uri);
        }
        
        const blob = await (await fetch(result.uri)).blob(); 
        const file = new File([blob], 'fileName.jpg', {type:"image/jpeg", lastModified:new Date()});
        setFile(file);

      };

    const _postHospital = async () => {
        let formData = new FormData();
        //formData.append("petimage", file);

        formData.append("image", file);
        formData.append("hospital_name", hospitalName);
        formData.append("title", title);
        formData.append("required", required);
        formData.append("days", days);
        formData.append("body", content);
      /*fetch('http://220.120.192.122:8080/pet-hospital/hospitaldiary/',{
  method: 'POST',
  headers:{
    Accept : "application/json",
    "Content-Type" : "multipart/form-data;",
  },
  body: formData,
  }).then(response => {
    console.log("image uploaded")
  }).catch(err => {
    console.log(err)
  })*/
  /*fetch("http://220.120.192.122:8080/pet-hospital/hospitaldiary/", {
    method: "POST",
    headers: { 'Accept': 'application/json','Content-Type': 'multipart/form-data'},
    body: formData
}).then(response => response.json())
    .then(data => console.log(data));*/


      const response = await axios.post(`http://220.120.192.122:8080/pet-hospital/hospitaldiary/`, {
        hospital_name: hospitalName,
        title: title,
        days: days,
        required: required,
        content: content
      });
    
        navigation.goBack(null);
    }

    return (
        <ScrollView style={{backgroundColor: '#FFF', paddingLeft: 20, paddingRight: 20, width: '100%', height: '100%'}}>
            
            <Text style={{fontWeight: 'bold', fontSize: 24, marginBottom: 40, marginTop: 60, fontFamily: 'nanumR'}}>{'병원 일지 추가하기'}</Text>
            <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14, fontFamily: 'nanumR'}}>{'기록하려는 날짜'}</Text>
            <TextInput
                style={{width: '100%', height: 46, padding: 10, backgroundColor: '#FFFFFF', marginBottom: 40, borderColor: '#000000', borderWidth: 2, borderStyle: 'solid', borderRadius: 15}}
                value={days}
                onChangeText={(text) => setDays(text)}
                autoCapitalize="sentences"
                placeholder='YYYY-MM-DD'
                autoCorrect
                returnKeyType="next"
                onEndEditing={() => console.log("onEndEditing")}
                onSubmitEditing={() => console.log("onSubmitEditing")}
                />
            <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14, fontFamily: 'nanumR'}}>{'제목'}</Text>
            <TextInput
                style={{width: '100%', height: 46, padding: 10, backgroundColor: '#FFFFFF', marginBottom: 20, borderColor: '#000000', borderWidth: 2, borderStyle: 'solid', borderRadius: 15}}
                value={title}
                onChangeText={(text) => setTitle(text)}
                autoCapitalize="sentences"
                autoCorrect
                returnKeyType="next"
                onEndEditing={() => console.log("onEndEditing")}
                onSubmitEditing={() => console.log("onSubmitEditing")}
                />
            <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14, fontFamily: 'nanumR'}}>{'병원 이름'}</Text>
            <TextInput
                style={{width: '100%', height: 46, padding: 10, backgroundColor: '#FFFFFF', marginBottom: 20, borderColor: '#000000', borderWidth: 2, borderStyle: 'solid', borderRadius: 15}}
                value={hospitalName}
                onChangeText={(text) => setHospitalName(text)}
                autoCapitalize="sentences"
                autoCorrect
                returnKeyType="next"
                onEndEditing={() => console.log("onEndEditing")}
                onSubmitEditing={() => console.log("onSubmitEditing")}
                />
            <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14, fontFamily: 'nanumR'}}>{'사진 업로드'}</Text>
            <View style={{marginBottom: 27}}>
                <Pressable onPress={pickImage} style={{width: '100%', height: 32, borderColor: '#BDBDBD', borderRadius: 3, borderStyle: 'dotted', borderWidth: 2, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#BDBDBD', fontSize: 14, fontFamily: 'nanumR'}}>Upload Image</Text>
                </Pressable>
                {imageUri && <Image source={{uri : imageUri}} style={{width: '100%', height: 300, marginTop: 20}} imageStyle={{borderRadius: '50%'}}/>}
            </View>
            <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14, fontFamily: 'nanumR'}}>{'일지 내용'}</Text>
            <TextInput
                style={{width: '100%', height: 300, padding: 10, backgroundColor: '#FFFFFF', marginBottom: 40, borderColor: '#000000', borderWidth: 2, borderStyle: 'solid', borderRadius: 15}}
                value={content}
                onChangeText={(text) => setContent(text)}
                autoCapitalize="sentences"
                autoCorrect
                returnKeyType="next"
                onEndEditing={() => console.log("onEndEditing")}
                onSubmitEditing={() => console.log("onSubmitEditing")}
                multiline={true}
                numberOfLines={10}
                />
            <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14, fontFamily: 'nanumR'}}>{'특이 사항'}</Text>
            <TextInput
                style={{width: '100%', height: 46, padding: 10, backgroundColor: '#FFFFFF', marginBottom: 40, borderColor: '#000000', borderWidth: 2, borderStyle: 'solid', borderRadius: 15}}
                value={required}
                onChangeText={(text) => setRequired(text)}
                autoCapitalize="sentences"
                autoCorrect
                returnKeyType="next"
                onEndEditing={() => console.log("onEndEditing")}
                onSubmitEditing={() => console.log("onSubmitEditing")}
                />
            
                 <Pressable style={styles.button2} onPress={_postHospital}>
                    <Text style={styles.text2}>{'일기 추가하기'}</Text>
                    </Pressable>      

        </ScrollView>
    )
}

export default HospitalDiaryEdit;

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
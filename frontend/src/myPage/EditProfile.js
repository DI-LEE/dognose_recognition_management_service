import { React, useState, useEffect } from 'react';

import { StyleSheet, Text, View, Button, Image, ScrollView, ImageBackground ,TextInput,Pressable } from 'react-native';
import CheckBox from 'expo-checkbox';

import * as ImagePicker from 'expo-image-picker';

import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

function EditProfile(){
    const [birthDate, setBirthDate] = useState('');
    const [weight, setWeight] = useState('');
    const [name, setName] = useState('');
    const [field, setField] = useState('');
    const [petNumber, setPetNumber] = useState();
    const [isCheck, setIsCheck] = useState(false);
    const [imageUri, setImageUri] = useState(null);
    const [isMale, setIsMale] = useState(false);
    const [isFemale, setIsFemale] = useState(false);
    const [isNosePrint, setIsNosePrint] = useState(false);
    const [id, setId] = useState(1);
    const [file, setFile] = useState(1);
    const navigation = useNavigation();

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          quality: 1,
        });
        if (!result.cancelled) {
          setImageUri(result.uri);
        }

          // ImagePicker saves the taken photo to disk and returns a local URI to it
  let localUri = result.uri;
  let filename = localUri.split('/').pop();

  // Infer the type of the image
  let match = /\.(\w+)$/.exec(filename);
  let type = match ? `image/${match[1]}` : `image`;

  // Upload the image using the fetch and FormData APIs
  let formData = new FormData();
  // Assume "photo" is the name of the form field the server expects
  formData.append('petimage', { uri: localUri, name: filename, type });
  formData.append('registerim  age', null);

  return await fetch('http://220.120.192.122:8080/dogaccount/nose-print/2/', {
    method: 'PUT',
    body: formData,
    headers: {
      'content-type': 'multipart/form-data',
    },
  });

      };

    const _postProfile = async () => {
        //validation();
        //console.log(imageUri);
        //console.log(file)
        
        let formData = new FormData();
        //formData.append("petimage", file);
        formData.append("id", 2);
        formData.append("petname", name);
        formData.append("petyear", birthDate);
        formData.append("petspecies", field);
        formData.append("petweight", weight);
        formData.append("petpublicnum", petNumber);
        formData.append("petsex", 'M');
        formData.append("petdesex", isCheck ? 1 : 0);
        //formData.append('registerimage', file);
    
        
        const response = await axios.put(`http://220.120.192.122:8080/dogaccount/nose-print/2/`, {
            petname: name,
            petyear : birthDate,
            petspecies: field,
            petweight: weight,
            petpublicnum: petNumber,
            petsex: 'M',
            petdesex: isCheck ? 1: 0
        }).then(
        ).catch(error => console.log(error))
    
    
        navigation.goBack(null);
    
    }
{/*
    const _postProfile = async () => {
        //validation();
        console.log(imageUri);
        

        const response = await axios.post(`http://220.120.192.122:8080/dogaccount/nose-print/`, {
            id : 10,
            petname : name,
            petyear : birthDate,
            petspecies : field,
            petweight : weight,
            petpublicnum : petNumber,
            petsex : 'M',
            petdesex : isCheck,
            petimage : imageUri
        })
        navigation.goBack(null);
    
    }*/}
    const _getPofile = async () => {
        const response = await axios.get(`http://220.120.192.122:8080/dogaccount/nose-print/2`);
        setIsNosePrint(response.data.noseprint === '1' ? true : false);
    }

    useEffect(() => {
      _getPofile();
  
    },[]);

    
    const validation = () => {
        if (petNumber.length !== 12) {
            alert('???????????? 12????????? ?????? ??????????????????.('-' ??????)');
            return;
        }
    }
    return (
        <ScrollView style={{backgroundColor: '#FFF', paddingLeft: 20, paddingRight: 20, width: '100%', height: '100%'}}>
            <Text style={{fontWeight: 'bold', fontSize: 24, marginBottom: 40, marginTop: 60, fontFamily: 'nanumR'}}>{'????????? ????????????'}</Text>
            <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14, fontFamily: 'nanumR'}}>{'????????? ?????? ??????'}</Text>
            <View style={{marginBottom: 27, alignItems: 'center'}}>
                <Pressable onPress={pickImage} style={{width: '100%', height: 32, borderColor: '#BDBDBD', borderRadius: 3, borderStyle: 'dotted', borderWidth: 2, justifyContent: 'center', alignItems: 'center'}}>
                    <Text style={{color: '#BDBDBD', fontSize: 14, fontFamily: 'nanumR'}}>Upload Image</Text>
                </Pressable>
                {imageUri && <Image source={{ uri: imageUri }} style={{width: 160, height: 160, marginRight: 14, marginTop : 30}} imageStyle={{borderRadius: '50%'}}/>}
            </View>
            <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14, fontFamily: 'nanumR'}}>{'??????'}</Text>
            <TextInput
                style={{width: '100%', height: 46, padding: 10, backgroundColor: '#FFFFFF', marginBottom: 40, borderColor: '#000000', borderWidth: 2, borderStyle: 'solid', borderRadius: 15}}
                value={name}
                onChangeText={(text) => setName(text)}
                autoCapitalize="sentences"
                autoCorrect
                returnKeyType="next"
                onEndEditing={() => console.log("onEndEditing")}
                onSubmitEditing={() => console.log("onSubmitEditing")}
                />
            <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14, fontFamily: 'nanumR'}}>{'????????????'}</Text>
            <TextInput
                style={{width: '100%', padding: 10, height: 46, backgroundColor: '#FFFFFF', marginBottom: 20, borderColor: '#000000', borderWidth: 2, borderStyle: 'solid', borderRadius: 15}}
                value={birthDate}
                onChangeText={(text) => setBirthDate(text)}
                placeholder='YYYY-MM-DD'
                autoCapitalize="sentences"
                autoCorrect
                returnKeyType="next"
                onEndEditing={() => console.log("onEndEditing")}
                onSubmitEditing={() => console.log("onSubmitEditing")}
                />
            <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14, fontFamily: 'nanumR'}}>{'???'}</Text>
            <TextInput
                style={{width: '100%', height: 46, padding: 10, backgroundColor: '#FFFFFF', marginBottom: 40, borderColor: '#000000', borderWidth: 2, borderStyle: 'solid', borderRadius: 15}}
                value={field}
                onChangeText={(text) => setField(text)}
                autoCapitalize="sentences"
                autoCorrect
                returnKeyType="next"
                onEndEditing={() => console.log("onEndEditing")}
                onSubmitEditing={() => console.log("onSubmitEditing")}
                />
            <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14, fontFamily: 'nanumR'}}>{'?????????'}</Text>
            <TextInput
                style={{width: '100%', height: 46, padding: 10, backgroundColor: '#FFFFFF', marginBottom: 40, borderColor: '#000000', borderWidth: 2, borderStyle: 'solid', borderRadius: 15}}
                value={weight}
                onChangeText={(text) => setWeight(text)}
                keyboardType = 'numeric'
                onEndEditing={() => console.log("onEndEditing")}
                onSubmitEditing={() => console.log("onSubmitEditing")}
                />
            <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14, fontFamily: 'nanumR'}}>{'????????????'}</Text>
            <TextInput
                style={{width: '100%', height: 46, padding: 10, backgroundColor: '#FFFFFF', marginBottom: 40, borderColor: '#000000', borderWidth: 2, borderStyle: 'solid', borderRadius: 15}}
                value={petNumber}
                onChangeText={(text) => setPetNumber(text)}
                returnKeyType="next"
                keyboardType = 'numeric'
                onEndEditing={() => console.log("onEndEditing")}
                onSubmitEditing={() => console.log("onSubmitEditing")}
                />
                <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14, marginRight: 16, fontFamily: 'nanumR'}}>{'??????'}</Text>
                
                <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14, marginRight: 8, fontFamily: 'nanumR'}}>{'Male'}</Text>
                <CheckBox
                    value={isMale}
                    onValueChange={() => setIsMale(!isMale)}
                />
                
                <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14, marginRight: 8, marginLeft: 16, fontFamily: 'nanumR'}}>{'Female'}</Text>
                <CheckBox
                    value={isFemale}
                    onValueChange={() => setIsFemale(!isFemale)}
                />
                </View>
             <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14, marginRight: 16, fontFamily: 'nanumR'}}>{'????????? ??????'}</Text>
                <CheckBox
                    value={isCheck}
                    onValueChange={() => setIsCheck(!isCheck)}
                />
                </View>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D',marginBottom: 14, marginRight: 16, fontFamily: 'nanumR'}}>{'?????? ?????? ??????'}</Text>
                <CheckBox
                    value={isNosePrint}
                />
            <Text style={{fontWeight: '700', fontSize: 12, color: '#0059ff', marginBottom: 14, marginLeft: 'auto', fontFamily: 'nanumR'}} onPress={() => navigation.navigate('CameraPrintRegister')}>{'?????? ?????? ?????? ??????'}</Text>
            </View>
                 <Pressable style={styles.button2} onPress={_postProfile}>
                    <Text style={styles.text2}>{'????????? ????????????'}</Text>
                    </Pressable>      

        </ScrollView>
    )
}

export default EditProfile;

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
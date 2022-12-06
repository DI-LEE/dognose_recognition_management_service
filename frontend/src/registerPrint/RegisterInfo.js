import { React, useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Pressable } from 'react-native';
import CheckBox from "expo-checkbox";

function RegisterInfo({navigation}){
    const [name, setName] = useState();
    const [isCheck, setIsCheck] = useState(false);
    
    const [birthDate, setBirthDate] = useState('');
    const [weight, setWeight] = useState('');
    const [field, setField] = useState('');
    const [petNumber, setPetNumber] = useState('');
    const [isMale, setIsMale] = useState('male');
    const [isFemale, setIsFemale] = useState(false);
    const [id, setId] = useState(1);

    const _postProfile = async () => {
        //validation();
        
        let formData = new FormData();
        formData.append("id", 10);
        formData.append("petname", name);
        formData.append("petyear", birthDate);
        formData.append("petspecies", field);
        formData.append("petweight", weight);
        formData.append("petpublicnum", petNumber);
        formData.append("petsex", 'M');
        formData.append("petdesex", isCheck);
    
        
        const response = await axios.put(`http://220.120.192.122:8080/dogaccount/nose-print/10/`, formData, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            transformRequest: (data, headers) => {
              return formData; // this is doing the trick
            },}).then(
            console.log(response)
        ).catch(error => console.log(error.response))
    
    
        navigation.goBack('RegisterInfoFinish');
    
    }

    return (
        
        <View style={{backgroundColor: '#FFFFFF', padding: 20, height: '100%'}}>
            <Text style={{fontWeight: 'bold', fontSize: 24, marginBottom: 40, marginTop: 60}}>{'반려견의 비문을\n등록하는 단계입니다'}</Text>
            
            <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14}}>{'이름'}</Text>
            <TextInput
                style={{width: '100%', height: 46, padding: 10, backgroundColor: '#FFFFFF', marginBottom: 20, borderColor: '#000000', borderWidth: 2, borderStyle: 'solid', borderRadius: 15}}
                value={name}
                onChangeText={(text) => setName(text)}
                autoCapitalize="sentences"
                autoCorrect
                returnKeyType="next"
                onEndEditing={() => console.log("onEndEditing")}
                onSubmitEditing={() => console.log("onSubmitEditing")}
                />
            
            <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14}}>{'생년월일'}</Text>
            <TextInput
                style={{width: '100%', height: 46, padding: 10, backgroundColor: '#FFFFFF', marginBottom: 20, borderColor: '#000000', borderWidth: 2, borderStyle: 'solid', borderRadius: 15}}
                value={birthDate}
                onChangeText={(text) => setBirthDate(text)}
                autoCapitalize="sentences"
                placeholder='YYYY-MM-DD'
                autoCorrect
                returnKeyType="next"
                onEndEditing={() => console.log("onEndEditing")}
                onSubmitEditing={() => console.log("onSubmitEditing")}
                />
            
            <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14}}>{'종'}</Text>
            <TextInput
                style={{width: '100%', height: 46, padding: 10, backgroundColor: '#FFFFFF', marginBottom: 20, borderColor: '#000000', borderWidth: 2, borderStyle: 'solid', borderRadius: 15}}
                value={field}
                onChangeText={(text) => setField(text)}
                autoCapitalize="sentences"
                autoCorrect
                returnKeyType="next"
                onEndEditing={() => console.log("onEndEditing")}
                onSubmitEditing={() => console.log("onSubmitEditing")}
                />

            <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14}}>{'몸무게'}</Text>
            <TextInput
                style={{width: '100%', height: 46, padding: 10, backgroundColor: '#FFFFFF', marginBottom: 20, borderColor: '#000000', borderWidth: 2, borderStyle: 'solid', borderRadius: 15}}
                value={weight}
                onChangeText={(text) => setWeight(text)}
                autoCapitalize="sentences"
                autoCorrect
                keyboardType = 'numeric'
                returnKeyType="next"
                onEndEditing={() => console.log("onEndEditing")}
                onSubmitEditing={() => console.log("onSubmitEditing")}
                />
            
            <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14}}>{'등록 번호'}</Text>
            <TextInput
                style={{width: '100%', height: 46, padding: 10, backgroundColor: '#FFFFFF', marginBottom: 20, borderColor: '#000000', borderWidth: 2, borderStyle: 'solid', borderRadius: 15}}
                value={petNumber}
                onChangeText={(text) => setPetNumber(text)}
                autoCapitalize="sentences"
                autoCorrect
                keyboardType = 'numeric'
                returnKeyType="next"
                onEndEditing={() => console.log("onEndEditing")}
                onSubmitEditing={() => console.log("onSubmitEditing")}
                />
                
                <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14, marginRight: 16}}>{'성별'}</Text>
                
                <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14, marginRight: 8}}>{'Male'}</Text>
                <CheckBox
                    value={isMale}
                    onValueChange={() => setIsMale(!isMale)}
                />
                
                <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14, marginRight: 8, marginLeft: 16}}>{'Female'}</Text>
                <CheckBox
                    value={isFemale}
                    onValueChange={() => setIsFemale(!isFemale)}
                />
                </View>
            
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14, marginRight: 16}}>{'중성화 여부'}</Text>
                <CheckBox
                    value={isCheck}
                    onValueChange={() => setIsCheck(!isCheck)}
                />
            </View>
            <Pressable style={styles.button}>
                <Text style={styles.text} onPress = {_postProfile}>{'등록 완료하기'}</Text>
            </Pressable>
        </View>

    )
}

const styles = StyleSheet.create({
    button: {
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
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
  });

export default RegisterInfo;
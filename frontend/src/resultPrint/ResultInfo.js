import { React, useEffect, useState } from 'react';
import { StyleSheet, Text, View, Button, Pressable, Image, ImageBackground} from 'react-native';
import CheckBox from 'expo-checkbox';
import imageRegister from '../../assets/image-random.jpg';

function ResultInfo ({navigation, route}){

    const [petImage, setPetImage] = useState();
    const [petName, setPetName] = useState();
    const [petPublicNum, setPetPublicNum] = useState();
    const [petSex, setPetSex] = useState();
    const [petSpecies, setPetSpecies] = useState();
    const [petWeight, setPetWeight] = useState();
    const [petYear, setPetYear] = useState();
    const [petdeSex, setPetdeSex] = useState();
    useEffect(() => {
        //if (route.params.data.petimage === undefined) return;
        if (route.params.data === null) return;
        setPetImage(route.params.data?.petimage);
        setPetName(route.params.data?.petname);
        setPetPublicNum(route.params.data?.petpublicnum);
        setPetSex(route.params.data?.petsex === 1 ? 'Male' : 'Female');
        setPetSpecies(route.params.data?.petspecies);
        setPetWeight(route.params.data?.petweight);
        setPetYear(route.params.data?.petyear);
        setPetdeSex(route.params.data?.petdesex === 1 ? true : false);
    },[])


    return (
        <>
        {route.params.data === null || petImage === undefined ?
            <View style={{backgroundColor: '#FFFFFF', height: '100%', alignItems: 'center', justifyContent: 'center'}}>
            <Text style={{fontWeight: 'bold', fontSize: 30, fontFamily: 'nanumR', marginBottom: 40}}>비문 검색 결과가 없습니다.</Text>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Pressable style={styles.button1}>
                        <Text style={styles.text1} onPress = {() => navigation.navigate('Home')}>{'홈으로 돌아가기'}</Text>
                    </Pressable>
                    <Pressable style={styles.button2}>
                    <Text style={styles.text2} onPress = {() => navigation.navigate('RegisterInfoFinish')}>{'마이페이지'}</Text>
                    </Pressable>
                </View>
            </View>
            :
            <View style={{backgroundColor: '#FFFFFF', height: '100%'}}>
            <Text style={{fontWeight: 'bold', fontSize: 24, marginBottom: 40, marginTop: 60, paddingLeft: 20, paddingTop: 40, fontFamily: 'nanumR'}}>{'비문 검색결과입니다.'}</Text>
            <Image source={ imageRegister } style={{width: '100%', height: 200, borderWidth: 2, borderRadius: 20}}/>
            <View style={{padding: 20}}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, marginTop: 20}}>
                    <Text style={{fontSize: 14, fontWeight: '600', marginBottom: 20, color: '#09101D', fontFamily: 'nanumR'}}>{'이름'}</Text>
                    <Text style={{fontSize: 14, fontWeight: '600', color: '#7E7E7E', fontFamily: 'nanumR'}}>{petName}</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={{fontSize: 14, fontWeight: '600', marginBottom: 20, color: '#09101D', fontFamily: 'nanumR'}}>{'생년월일'}</Text>
                    <Text style={{fontSize: 14, fontWeight: '600', color: '#7E7E7E', fontFamily: 'nanumR'}}>{petYear}</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={{fontSize: 14, fontWeight: '600', marginBottom: 20, color: '#09101D', fontFamily: 'nanumR'}}>{'종'}</Text>
                    <Text style={{fontSize: 14, fontWeight: '600', color: '#7E7E7E', fontFamily: 'nanumR'}}>{petSpecies}</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={{fontSize: 14, fontWeight: '600', marginBottom: 20, color: '#09101D', fontFamily: 'nanumR'}}>{'몸무게'}</Text>
                    <Text style={{fontSize: 14, fontWeight: '600', color: '#7E7E7E', fontFamily: 'nanumR'}}>{petWeight}kg</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={{fontSize: 14, fontWeight: '600', marginBottom: 20, color: '#09101D', fontFamily: 'nanumR'}}>{'등록번호'}</Text>
                    <Text style={{fontSize: 14, fontWeight: '600', color: '#7E7E7E', fontFamily: 'nanumR'}}>{petPublicNum}</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                    <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14, marginRight: 16, fontFamily: 'nanumR'}}>{'성별'}</Text>
                    <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginBottom: 14, marginRight: 8, fontFamily: 'nanumR'}}>{petSex}</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={{fontSize: 14, fontWeight: '600', marginBottom: 20, color: '#09101D', fontFamily: 'nanumR'}}>{'중성화 여부'}</Text>
                    <CheckBox
                    value={petdeSex}
                />
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <Pressable style={styles.button1}>
                        <Text style={styles.text1} onPress = {() => navigation.navigate('Home')}>{'홈으로 돌아가기'}</Text>
                    </Pressable>
                    <Pressable style={styles.button2}>
                    <Text style={styles.text2} onPress = {() => navigation.navigate('InformationPage')}>{'마이페이지'}</Text>
                    </Pressable>
                </View>
            </View>
        </View>

        }
        </>
       

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

export default ResultInfo;
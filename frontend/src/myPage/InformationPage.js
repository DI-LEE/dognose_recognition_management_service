import CheckBox from 'expo-checkbox';
import { React, useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image, ScrollView, ImageBackground ,Dimensions,Pressable, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';


import homeImg from '../../assets/home/image-home.png';
import editImg from '../../assets/icon-edit.png';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import axios from 'axios';

function InformationPage(){
  const navigation = useNavigation();
    
    const [isCheck, setIsCheck] = useState(false);
    const [isPrintCheck, setIsPrintCheck] = useState(false);

    const [petImage, setPetImage] = useState();
    const [petName, setPetName] = useState();
    const [petPublicNum, setPetPublicNum] = useState();
    const [petSex, setPetSex] = useState();
    const [petSpecies, setPetSpecies] = useState();
    const [petWeight, setPetWeight] = useState();
    const [petYear, setPetYear] = useState();

    const isFocused = useIsFocused();




    const _getPofile = async () => {
      const response = await axios.get(`http://220.120.192.122:8080/dogaccount/nose-print/2`);
      setPetImage(response.data.petimage);
      setPetName(response.data.petname);
      setPetPublicNum(response.data.petpublicnum);
      setPetSex(response.data.petsex);
      setPetSpecies(response.data.petspecies);
      setPetWeight(response.data.petweight);
      setPetYear(response.data.petyear);
      setIsPrintCheck(response.data.noseprint === '1' ? true : false);
      setIsCheck(response.data.petdesex === 1 ? true : false)
  }
  useEffect(() => {
    _getPofile();

  },[isFocused]);

    return (
        <ScrollView style={{width: '100%', height: '100%', padding: 20, paddingTop: 35, backgroundColor: '#FFF'}}>
            <TouchableOpacity style={{marginLeft: 'auto', flexDirection: 'row', alignItems:'center'}} onPress = {() => navigation.navigate('EditProfile')}>
                <ImageBackground source={editImg} style={{width: 12, height: 12}}/>
                <Text style={{fontSize: 10, color: '#D9D9D9', marginLeft: 4}} onPress = {() => navigation.navigate('EditProfile')}>편집하기</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 15}}> 
                <Image source={{ uri: petImage }} style={{width: 80, height: 80, marginRight: 14}} imageStyle={{borderRadius: '50%'}}/>
                <View>
                    <Text style={{fontSize: 24, lineHeight: 36, color: '#505D68', fontWeight: '700',fontFamily: 'nanumR'}}>{petName}</Text>
                    <Text style={{fontSize: 12, lineHeight: 24, color: '#505D68',fontFamily: 'nanumR' }}>{petSex === 'M' ? 'Male' : 'Female'}, {petYear}</Text>
                </View>
            </View>
            <View style={{paddingTop: 20}}>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={{fontSize: 14, fontWeight: '600', marginBottom: 20, color: '#09101D', fontFamily: 'nanumR'}}>{'생년월일'}</Text>
                    <Text style={{fontSize: 14, fontWeight: '600', color: '#7E7E7E', fontFamily: 'nanumR'}}>{petYear}</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={{fontSize: 14, fontWeight: '600', marginBottom: 20, color: '#09101D', fontFamily: 'nanumR'}}>{'종'}</Text>
                    <Text style={{fontSize: 14, fontWeight: '600', color: '#7E7E7E', fontFamily: 'nanumR'}}>{petSpecies}</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={{fontSize: 14, fontWeight: '600', marginBottom: 20, color: '#09101D', fontFamily: 'nanumR'}}>{'현재 몸무게'}</Text>
                    <Text style={{fontSize: 14, fontWeight: '600', color: '#7E7E7E', fontFamily: 'nanumR'}}>{petWeight}kg</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={{fontSize: 14, fontWeight: '600', marginBottom: 20, color: '#09101D', fontFamily: 'nanumR'}}>{'등록번호'}</Text>
                    <Text style={{fontSize: 14, fontWeight: '600', color: '#7E7E7E', fontFamily: 'nanumR'}}>{petPublicNum}</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={{fontSize: 14, fontWeight: '600', marginBottom: 20, color: '#09101D', fontFamily: 'nanumR'}}>{'중성화 여부'}</Text>
                    <CheckBox
                    value={isCheck}
                />
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={{fontSize: 14, fontWeight: '600', marginBottom: 20, color: '#09101D', fontFamily: 'nanumR'}}>{'비문 등록 여부'}</Text>
                    <CheckBox
                    value={isPrintCheck}
                />
                </View>
            </View>
            <View style = {styles.lineStyle} />
            <Text style={{fontSize: 24, lineHeight: 28, fontWeight: '700', marginBottom: 15}}>몸무게 변화 그래프</Text>
            <LineChart
        data={{
          labels: ['01/01', '01/02', '01/10', '01/31', '02/03', '02/13'],
          datasets: [
            {
              data: [20, 45, 28, 80, 99, 43],
              strokeWidth: 2,
            },
          ],
        }}
        width={340}
        height={220}
        chartConfig={{
          backgroundColor: '#1cc910',
          backgroundGradientFrom: '#eff3ff',
          backgroundGradientTo: '#efefef',
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          style: {
            borderRadius: 16,
          },
        }}
        style={{
          marginVertical: 8,
          borderRadius: 16,
          marginBottom: 40
        }}
      />
      <Pressable style={styles.button2}  onPress = {() => navigation.navigate('WeightAddPage')}>
                    <Text style={styles.text2}>{'몸무게 변화 추가하기'}</Text>
                    </Pressable>

        </ScrollView>
    )

}


export default InformationPage;

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
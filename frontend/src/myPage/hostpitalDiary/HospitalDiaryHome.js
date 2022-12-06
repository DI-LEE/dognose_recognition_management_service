import { React, useState, useEffect } from 'react';

import { StyleSheet, Text, View, Button, Image, ScrollView, ImageBackground ,Dimensions,Pressable, TouchableOpacity } from 'react-native';
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import { format } from "date-fns";

import { useNavigation, useIsFocused } from '@react-navigation/native';
import editImg from '../../../assets/icon-edit.png';
import axios from 'axios';

LocaleConfig.locales['fr'] = {
    monthNames: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December'
    ],
    monthNamesShort: ['January.', 'February.', 'March', 'April', 'May', 'June', 'July.', 'August', 'September', 'October', 'November', 'December'],
    dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    dayNamesShort: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.']
  };

const HospitalDiaryHome = () => {
    const navigation = useNavigation();
    
    const [hospital, setHospital] = useState('');
    const [birthDate, setBirthDate] = useState('');
    const [heartDate, setHeartDate] = useState('');
    
    const isFocused = useIsFocused();
    const [posts, setPosts] = useState([]);
    const [array, setArray] = useState([]);
    const [selectedDate, setSelectedDate] = useState(
        format(new Date(), "yyyy-MM-dd"),
      );
      const markedDates = posts.reduce((acc, current) => {
        const formattedDate = format(new Date(current.days), 'yyyy-MM-dd');
        acc[formattedDate] = {marked: true};
        return acc;
      }, {});

      const markedSelectedDates = {
        ...markedDates,
        [selectedDate]: {
          selected: true,
          marked: markedDates[selectedDate]?.marked,
        }
      }
    const _getPofile = async () => {
        const response = await axios.get(`http://220.120.192.122:8080/pet-hospital/name-day/1/`);
        setHospital(response.data.hospitalnameing);
        setBirthDate(response.data.vaccination);
        setHeartDate(response.data.heartworm);
    }
    const _getDiary = async () => {
        const response = await axios.get(`http://220.120.192.122:8080/pet-hospital/hospitaldiary/`);
        console.log(response);
        setPosts(response.data);
        setArray(response.data);

    }
    const _onClickPage = (id) => {
        navigation.navigate('HospitalDiaryDetail', {id : id});

    }

    const filterByDate = (item) => {
        console.log(item);
        console.log(selectedDate);
        if (selectedDate === item.days) return true;
        return false;


    }

    useEffect(() => {
      _getPofile();
      _getDiary();
  
    },[isFocused]);
      
    return (
        <ScrollView style={{backgroundColor: '#FFF', padding: 20, width: '100%', height: '100%'}}>
            <TouchableOpacity style={{marginLeft: 'auto', flexDirection: 'row', alignItems:'center', marginBottom: 40}} onPress = {() => navigation.navigate('HospitalEdit')}>
                <ImageBackground source={editImg} style={{width: 12, height: 12}}/>
                <Text style={{fontSize: 10, color: '#D9D9D9', marginLeft: 4, fontFamily: 'nanumR'}} onPress = {() => navigation.navigate('HospitalEdit')}>편집하기</Text>
            </TouchableOpacity>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={{fontSize: 14, fontWeight: '600', marginBottom: 20, color: '#09101D', fontFamily: 'nanumR'}}>{'현재 다니고 있는 병원'}</Text>
                    <Text style={{fontSize: 14, fontWeight: '600', color: '#7E7E7E', fontFamily: 'nanumR'}}>{hospital}</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10}}>
                    <Text style={{fontSize: 14, fontWeight: '600', marginBottom: 20, color: '#09101D', fontFamily: 'nanumR'}}>{'예방 접종 날짜'}</Text>
                    <Text style={{fontSize: 14, fontWeight: '600', color: '#7E7E7E', fontFamily: 'nanumR'}}>{birthDate}</Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 14, fontWeight: '600', color: '#09101D', fontFamily: 'nanumR'}}>{'심장 사상충 날짜'}</Text>
                    <Text style={{fontSize: 14, fontWeight: '600', color: '#7E7E7E', fontFamily: 'nanumR'}}>{heartDate}</Text>
                </View>
                
                <View style = {styles.lineStyle} />
                <Calendar
                 style={{
                    borderWidth: 1,
                    borderColor: '#E2E2E2',
                    height: 390
                  }}
                  markedDates={markedSelectedDates}
                  theme={{
                    backgroundColor: '#ffffff',
                    selectedDayBackgroundColor: '#00adf5',
                    selectedDayTextColor: '#ffffff',
                    dayTextColor: '#2d4150',
                    textDisabledColor: '#d9e1e8',
                    dotColor: '#00adf5',
                    selectedDotColor: '#ffffff',
                    arrowColor: 'orange',
                    disabledArrowColor: '#d9e1e8',
                    textDayFontSize: 16,
                    textMonthFontSize: 16,
                    textDayHeaderFontSize: 16,
                  }}
  onDayPress={(day) => {
    setSelectedDate(day.dateString)
    var arrByID = posts.filter( (item) => {
        if (day.dateString === item.days) return true;
    return false;
  });
    setArray(arrByID);

  }}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy. MM'}
  hideArrows={false}
  disableMonthChange={true}
/>
<View style={{marginTop: 30}}>
{array.map((item, index) => {
    return (
        <Pressable onPress={() => _onClickPage(item.id)}>
            <View style ={{flexDirection: 'row', marginBottom: 10}}> 
                <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginRight: 14, fontFamily: 'nanumR'}}>
                    {index + 1}.
                </Text>
                <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginRight: 14, fontFamily: 'nanumR'}}>
                    {item.hospital_name}
                </Text>
                <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginLeft: 14, fontFamily: 'nanumR'}}>
                    {item.body}
                </Text>
                <Text style={{fontWeight: '600', fontSize: 14, color: '#09101D', marginLeft: 'auto', fontFamily: 'nanumR'}}>
                    {item.days}
                </Text>
            </View>
            <View style = {styles.lineStyle2} />
        </Pressable>
    )
})}
</View>
<Pressable style={styles.button2}>
                    <Text style={styles.text2} onPress = {() => navigation.navigate('HospitalDiaryEdit')}>{'병원 일지 추가하기'}</Text>
                    </Pressable>      


        </ScrollView>

    )
}

export default HospitalDiaryHome;

const styles = StyleSheet.create({
    lineStyle2:{
        borderWidth: 0.2,
        borderColor:'#E2E2E2',
        marginTop: 20,
        marginBottom: 20
   },
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
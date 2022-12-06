import { React, useState } from 'react';

import { StyleSheet, Text, View, Button, Image, ScrollView, ImageBackground ,Dimensions,Pressable, TouchableOpacity } from 'react-native';
import {Calendar, CalendarList, Agenda, LocaleConfig} from 'react-native-calendars';
import { format } from "date-fns";

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

const DiaryHome = () => {
    const posts = [
        {
          id: 1,
          title: "제목입니다.",
          contents: "내용입니다.",
          date: "2022-02-26",
        },
        {
          id: 2,
          title: "제목입니다.",
          contents: "내용입니다.",
          date: "2022-02-27",
        }
      ];
    const [selectedDate, setSelectedDate] = useState(
        format(new Date(), "yyyy-MM-dd"),
      );
      const markedDates = posts.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
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
    return (
        <ScrollView style={{backgroundColor: '#FFF', padding: 20, width: '100%', height: '100%'}}>
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                    <Text style={{fontSize: 14, fontWeight: '600', color: '#09101D', fontFamily: 'nanumR'}}>{'이번 달 총 산책 횟수'}</Text>
                    <Text style={{fontSize: 14, fontWeight: '600', color: '#7E7E7E', fontFamily: 'nanumR'}}>{'1회'}</Text>
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
                    textDayHeaderFontSize: 16
                  }}
  onDayPress={(day) => {
    setSelectedDate(day.dateString)
  }}
  // Handler which gets executed on day long press. Default = undefined
  onDayLongPress={day => {
    console.log('selected day', day);
  }}
  // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
  monthFormat={'yyyy. MM'}
  // Handler which gets executed when visible month changes in calendar. Default = undefined
  onMonthChange={month => {
    console.log('month changed', month);
  }}
  // Hide month navigation arrows. Default = false
  hideArrows={false}
  // Replace default arrows with custom ones (direction can be 'left' or 'right')
  // Do not show days of other months in month page. Default = false
  hideExtraDays={false}
  // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
  // day from another month that is visible in calendar page. Default = false
  disableMonthChange={false}
  // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
  firstDay={1}
  // Hide day names. Default = false
  hideDayNames={false}
  // Show week numbers to the left. Default = false
  showWeekNumbers={false}
  // Handler which gets executed when press arrow icon left. It receive a callback can go back month
  onPressArrowLeft={subtractMonth => subtractMonth()}
  // Handler which gets executed when press arrow icon right. It receive a callback can go next month
  onPressArrowRight={addMonth => addMonth()}
  // Disable left arrow. Default = false
  disableArrowLeft={false}
  // Disable right arrow. Default = false
  disableArrowRight={false}
  // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
  disableAllTouchEventsForDisabledDays={false}
  // Replace default month and year title with custom one. the function receive a date as parameter
  renderHeader={date => {
    /*Return JSX*/
  }}
  // Enable the option to swipe between months. Default = false
  enableSwipeMonths={true}
/>
<Pressable style={styles.button2}>
                    <Text style={styles.text2}>{'일기 추가하기'}</Text>
                    </Pressable>      


        </ScrollView>

    )
}

export default DiaryHome;

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
import { StatusBar } from 'expo-status-bar';
import { React, useState, useEffect } from 'react';
import * as pages from './src';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import CheckBox from "expo-checkbox";
import BottomTabNavigationApp from './src/BottomTabNavigationApp';

import { LineChart } from 'react-native-chart-kit';

import {TabView, SceneMap} from 'react-native-tab-view';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
import { useFonts } from 'expo-font';

import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import EditProfile from './src/myPage/EditProfile';
let customFonts = {
  "nanumR": require('./assets/fonts/NanumSquareR.otf'),
  "bamin": require('./assets/fonts/BMJUA_otf.otf'),
};

export default function App() {
  const [isLoaded] = useFonts(customFonts);


  return (
    <>
    {isLoaded &&
    <View style={{width: '100%', height: '100%', fontFamily: 'nanumR'}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRoute='Landing'
          screenOptions={{
            headerShown: false
          }}>
          <Stack.Screen name='Landing' component={pages.Landing}/>
          <Stack.Screen name='Home' component={BottomTabNavigationApp}/>
          <Stack.Screen name='RegisterInfo' component={pages.RegisterInfo}/>
          <Stack.Screen name='RegisterInfoFinish' component={pages.RegisterInfoFinish}/>
          <Stack.Screen name='SearchPrintNotification' component={pages.SearchPrintNotification}/>
          <Stack.Screen name='CameraPrint' component={pages.CameraPrint}/>
          <Stack.Screen name='ResultInfo' component={pages.ResultInfo}/>
          <Stack.Screen name='CameraPrintLoading' component={pages.CameraPrintLoading}/>
          <Stack.Screen name='ProfilePage' component={pages.InformationPage}/>
          <Stack.Screen name='EditProfile' component={EditProfile}/>
          <Stack.Screen name='WeightAddPage' component={pages.WeightAddPage}/>
          <Stack.Screen name='HospitalDiaryEdit' component={pages.HospitalDiaryEdit}/>
          <Stack.Screen name='HospitalEdit' component={pages.HospitalEdit}/>
          <Stack.Screen name='CameraPrintRegister' component={pages.CameraPrintRegister}/>
          <Stack.Screen name='CameraPrintRegisterLoading' component={pages.CameraPrintRegisterLoading}/>
          <Stack.Screen name='HospitalDiaryDetail' component={pages.HospitalDiaryDetail}/>
        </Stack.Navigator>
      </NavigationContainer>
    </View>
        }
        </>
  );
}


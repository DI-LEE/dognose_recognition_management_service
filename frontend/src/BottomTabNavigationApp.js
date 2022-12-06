import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text} from 'react-native';
//import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/FontAwesome';
import Home from './home/Home';
import SearchPrintNotification from './searchPrint/SearchPrintNotification';
import MyPageTab from './myPage/MyPageTab';
import { useNavigation } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return <Text>Home</Text>;
}

function SearchScreen() {
  return <Text>Search</Text>;
}

function NotificationScreen() {
  return <Text>Notification</Text>;
}

function MessageScreen() {
  return <Text>Message</Text>;
}

function ShopScreen() {
  return <Text>Shop</Text>;
}

function BottomTabNavigationApp({navigation}) {
  //const navigation = useNavigation();
  return (
      <Tab.Navigator initialRouteName="Home" tabBarOptions={{ showLabel: false}}>
        <Tab.Screen
          name="Home"
          component={Home}
          navigation={navigation}
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="home" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={SearchScreen}
          options={{
            title: '알림',
            tabBarIcon: ({color, size}) => (
              <Icon name="star" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={SearchPrintNotification}
          options={{
            title: '검색',
            tabBarIcon: ({color, size}) => (
              <Icon name="search" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Message"
          component={MessageScreen}
          options={{
            title: '메시지',
            tabBarIcon: ({color, size}) => (
              <Icon name="shopping-cart" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Shop"
          component={MyPageTab}
          options={{
            title: '내 펫 관리 페이지',
            tabBarIcon: ({color, size}) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
  );
}

export default BottomTabNavigationApp;
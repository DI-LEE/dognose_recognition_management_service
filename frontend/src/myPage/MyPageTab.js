import React from 'react';
import {useWindowDimensions, View, Text, StyleSheet} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import InformationPage from './InformationPage';
import WeightAddPage from './WeightAddPage';
import EditProfile from './EditProfile';
import HospitalDiaryHome from './hostpitalDiary/HospitalDiaryHome';
import DiaryHome from './diary/DiaryHome';
  
  const renderScene = SceneMap({
    first: InformationPage,
    second: HospitalDiaryHome,
    third: DiaryHome
  });
  
function MyPageTab(){
    const layout = useWindowDimensions();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
      {key: 'first', title: '기본 정보'},
      {key: 'second', title: '병원 일지'},
      {key: 'third', title: '일기'},
      {key: 'second', title: '식단'},
    ]);
  
    return (
      <TabView
        onIndexChange={setIndex}
        navigationState={{index, routes}}
        renderScene={renderScene}
        initialLayout={{ width: layout.width }}
        renderTabBar={props => (
            <TabBar
              {...props}
              indicatorStyle={{
                backgroundColor: "#707A85",
                height: 4
              }}
              style={{
                backgroundColor: "#09101D",
                fontWeight: "bold",
                shadowOffset: { height: 0, width: 0 },
                shadowColor: "transparent",
              }}
              pressColor={"transparent"}
      />)}/>
    )
}

export default MyPageTab;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15,
    },
    button: {
      marginTop: 20,
      height: 50,
      backgroundColor: 'grey',
      borderRadius: 15,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: 15,
    },
  });
  
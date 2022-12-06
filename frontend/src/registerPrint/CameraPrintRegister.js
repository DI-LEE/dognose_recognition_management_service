import { Camera, CameraType } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { React, useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image, Pressable } from 'react-native';
import iconNose from '../../assets/icon-nose.png';
import { Audio } from 'expo-av';
import axios from 'axios';



export default function CameraPrintRegister({navigation}) {
  const [cameraPermission, setCameraPermission] = useState(null);
  const [galleryPermission, setGalleryPermission] = useState(null);

  const [camera, setCamera] = useState(null);
  const [imageUri, setImageUri] = useState(null);
  const [type, setType] = useState(CameraType.back);

  const [sound, setSound] = useState();
  const [file, setFile] = useState();

  const permisionFunction = async () => {
    // here is how you can get the camera permission
    const cameraPermission = await Camera.requestCameraPermissionsAsync();

    setCameraPermission(cameraPermission.status === 'granted');

    const imagePermission = await ImagePicker.getMediaLibraryPermissionsAsync();
    //console.log(imagePermission.status);

    setGalleryPermission(imagePermission.status === 'granted');

    if (
      imagePermission.status !== 'granted' &&
      cameraPermission.status !== 'granted'
    ) {
      alert('Permission for media access needed.');
    }
  };

  async function playSound() {
    //console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('../../assets/clap-sound.mp3'),{
      isLooping: true
    }
    );
    setSound(sound);

    //console.log('Playing Sound');
    sound.playAsync();
  }

  useEffect(() => {
    return sound
      ? () => {
          //.log('Unloading Sound');
          //sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  useEffect(() => {
    if (imageUri) {
      sound.stopAsync()
    } else {
      playSound();
    }

  },[imageUri]);




  useEffect(() => {
    permisionFunction();

  }, []);

  const takePicture = async () => {
    if (camera) {
      const data = await camera.takePictureAsync(null);
      console.log(data.uri);
      setImageUri(data.uri);
    }
  
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    //console.log(result);
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
  formData.append('registerimage', { uri: localUri, name: filename, type });

  await fetch('http://220.120.192.122:8080/dogaccount/nose-print/2/', {
    method: 'PUT',
    body: formData,
    headers: {
      'content-type': 'multipart/form-data',
    },
  })
  };

  const _postImg = async () => {
    //validation();
    //console.log(imageUri);
    //console.log(file)

    let formData = new FormData();
    formData.append("registerimage",  {
      uri: imageUri,
      type: 'image/jpeg',
      name: 'photo.jpg'
  });
  

  fetch(`http://220.120.192.122:8080/dogaccount/nose-print/2/`, {
    method: "PUT",
    formData,
    headers: {
      "content-type": "multipart/form-data"
    }
  })
    .then(function(response) {
      //alert(response)
          
      if (response.status === 204) {
        
      navigation.navigate('CameraPrintRegisterLoading', {data : null})

      } else if (response.status === 200) {
        
    navigation.navigate('CameraPrintRegisterLoading', {data : response.data})
      }
    }

    )
    .then()
    .catch();


}

  return (
    <View style={{width:'100%', height: '100%', backgroundColor: '#FFFFFF'}}>
      {imageUri ? 
      <View style={{width: '100%', height: '100%', alignItems: 'center'}}>
        <Image source={{ uri: imageUri }} style={{width: '100%', height: '90%'}} />
        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
        <Pressable style={styles.button1}>
                        <Text style={styles.text1} onPress={() => setImageUri(null)}>{'다시 촬영하기'}</Text>
                    </Pressable>
                    <Pressable style={styles.button2}>
                    <Text style={styles.text2} onPress={()=>navigation.navigate('CameraPrintRegisterLoading')}>{'해당 비문으로 등록하기'}</Text>
                    </Pressable>
        </View>

      </View>
      :<Camera
      style={{ width: '100%', height: '100%' }}
      ref={(ref) => setCamera(ref)}
      >
        <View style={{alignItems: 'center', flex: 1, top: '40%'}}>
          <Text style={{fontSize: 14, color: '#FFF', lineHeight: 24, textAlign: 'center', marginBottom: 20, fontWeight: '600', fontFamily: 'nanumR'}}>{'강아지를 소리로 집중시키고\n아래 이미지에 코를 맞춰서\n찍으면 쉬워요!'}</Text>
          <Image source={iconNose} style={{width: 120, height: 100}}/>
        </View>
      
    <View
        style={{
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        }}
    >
        
        <TouchableOpacity
            style={{
            flex: 0.5,
            alignSelf: 'flex-end',
            alignItems: 'center',
            }}
            onPress={pickImage}
        >
            <Text style={{ fontSize: 20, marginBottom: 60, fontWeight: '600', color: 'white', fontFamily: 'bamin', textShadowColor: 'rgba(0,0,0,0.4)', textShadowOffset: {width: 2, height: 3}, textShadowRadius: 10, }}>
              사진첩에서 업로드
            </Text>
        </TouchableOpacity>
          
        <TouchableOpacity
            style={{
            flex: 0.5,
            alignSelf: 'flex-end',
            alignItems: 'center',
            }}
            onPress={takePicture}
        >
            <Text style={{ fontSize: 20, marginBottom: 60, fontWeight: '600',  color: 'white', fontFamily: 'bamin', textShadowColor: 'rgba(0,0,0,0.4)', textShadowOffset: {width: 2, height: 3}, textShadowRadius: 10, }} >
              촬영
            </Text>
        </TouchableOpacity>
    </View>
</Camera>
}
</View>
  );
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
  },
  text2: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
    },
});
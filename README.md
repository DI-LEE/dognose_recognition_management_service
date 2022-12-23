# dognose_recognition_management_service

dog nose recognition management service application with Siamese Neural Networks and object-detection(deep-learning)

### Keywords

* Siamese Neural Network
* Object-Detection
* 비문인식
* 반려견 
* 펫 다이어리

# 犬쪽이 :dog:

> 비문 개체 인식 기술을 통한 반려동물 관리 어플리케이션

* 동국대학교 미래사회를 위한 인공지능 챌린지 **최우수상** 수상

# Team

**청춘 그 잡채**

| **Name** | **Role**                                                     | **Contact**           |
| -------- | ------------------------------------------------------------ | --------------------- |
| 이동인   | 팀장, 강아지 코 추출 및 비문 인식 모델 개발 및 이식, 데이터 라벨링 및 증강 | dongeen1@gmail.com    |
| 임서연   | 기획, 학습 데이터 수집 및 라벨링, 이미지 데이터 전처리       | dlatjdus222@naver.com |
| 황남주   | UX/UI 디자인, 프론트엔드 개발                                | namuju_hi@naver.com   |
| 조성민   | 백엔드 개발 및 서버 구축                                     | another0306@naver.com |

# Requirement

### Siamese Neural Network

> dog nose recognition

* `tensorflow==2.8.0`
* `scikit-learn==1.1.3`
* `opencv-python==4.6.0`
* `imgaug==0.4.0`

### Object-Detection

> crop dog nose

* `pytorch==1.11.0`
* `opencv-python==4.6.0`

### Image Preprocessing

* `opencv-python==4.6.0`
* `imgaug==0.4.0`

### APP

#### frontend

* `react-native==0.69.6`
* `react==18.0.0`
* `expo==46.0.13`

#### backend

* `Django==3.2`
* `djangorestframework==3.13.1`
* `djangorestframework-simplejwt==5.2.1`
* `django-allauth==0.51.0`
* `Pillow==9.1.1`

# environment

> train environment

* `RTX 3060`
* `CUDA Version==11.2`
* `cudnn==7.6.5`

# Motivation

비문이란 강아지 코의 주름을 뜻한다. 사람으로 치면 지문과 같아 나이가 들어도 변형 되지 않는다. 곧 강아지의 개체 인식을 할 수 있다는 것이다. 그래서 우리 팀은 비문을 이용하여 개체 인식 기술 개발 목표로 프로젝트를 진행했다.    

최근 반려동물 1500만 시대가 되었다. 하지만 반려동물 등록률은 반려동물 수에 비해 현저히 낮은 수치를 보여주고 있다. 왜냐하면 반려동물 등록은 내장형칩과 외장형칩을 결정하여 칩에 강아지 정보를 넣어준 뒤 등록을 해야한다. 외장형 칩은 강아지들이 많이 잃어버려 잃어버릴때마다 다시 구매를 해야하는 비용부담이 있으며, 내장형 칩같은 경우는 반려견에게 부작용이 발생 할 수 있는 거부감이 들어 많은 반려인들이 등록하지 않는 가장 큰 비율을 차지하고 있다. 펫 보험 가입률 또한 다른 나라들이 비해 낮은 수치와 작은 시장 규모로 형성 되어있다. 펫 보험 손해율은 200% 기록하고 있다. 펫 보험은 피보험대상 식별이 어려워 가입자들이 악용하기 때문에 많은 기업들에서 적극적으로 펫 보험을 출시 할수 없는 상황이다.

그래서 우리 팀은 저조한 동물등록, 높은 펫 보험 손해율, 거부감이 드는 내장칩의 한계점을 보안하여 간단한 동물등록, 편리한 개체인식, 내장형 칩 거부감 해소, 펫 관리, 반려동물 시장의 활성화를 목표로 비문개체 인식기술을 통한 반려동물관리 어플리케이션을 개발했다.

# UI/UX
<img width="695" alt="image" src="https://user-images.githubusercontent.com/79498819/209191816-3df716a4-aad0-4c01-a20a-fa5a1bf86771.png">
<img width="508" alt="image" src="https://user-images.githubusercontent.com/79498819/209191855-353cae2c-a933-4811-b234-5f745d4f146f.png">
<img width="686" alt="image" src="https://user-images.githubusercontent.com/79498819/209191876-c65a9b0a-8521-4833-b5bb-0d4bbe66ce66.png">

# Result Video

https://user-images.githubusercontent.com/79498819/209191940-0ae49b10-3502-4280-9b0f-fbde6f2b6026.mp4


# System Structure

#### 비문 등록 시스템 구조

![캡스톤_비문등록 drawio (3)](https://user-images.githubusercontent.com/79498819/209192296-11232e46-50f6-4b3c-9483-406b64147faf.png)

1. 사용자는 어플리케이션의 카메라 기능으로 강아지의 정면 얼굴 사진을 찍는다.

2. 강아지 정면 얼굴 사진은 갤러리에 저장되며, REST API를 통해 서버로 전송된다.

3. 전송된 강아지 정면 얼굴 사진은 object-detection 모델인 yoloV5을 통해 강아지의 정면 얼굴 중 코(비문) 부분만 추출하여 이미지 전처리를 진행하고 데이터베이스에 저장한다.

#### 비문 인식 시스템 구조

![캡스톤_비문인식 drawio](https://user-images.githubusercontent.com/79498819/209191762-9a32352e-afe9-4c05-93cf-5228b679daa8.png)

1. 사용자는 어플리케이션의 카메라 기능으로 강아지의 정면 얼굴 사진을 찍는다.

2. 강아지 정면 얼굴 사진은 갤러리에 저장되며, REST API를 통해 서버로 전송된다.

3. 전송된 강아지 정면 얼굴 사진은 object-detection 모델인 yoloV5을 통해 강아지의 정면 얼굴 중 코(비문) 부분만 추출하여 비문 인식 모델에 input 한다.

4. 데이터베이스에 저장되어 있는 모든 강아지의 비문을 이진탐색 알고리즘을 통해 비문 인식 모델에 input 한다.

5. 비문 인식 모델은 input으로 들어온 두 비문 사진의 유사도를 비교하여 같은 비문인지 다른 비문인지 예측값을 서버를 통해 client로 전송한다.

6. 만약 같은 비문일 경우, 해당 비문의 강아지 정보를 client에게 조회할 수 있도록 한다.

# Deep learning

## Data collection

학습 데이터 수집 및 라벨링

> 강아지 코 인식 데이터 

 학습데이터는 **Tsinghua Dogs Dataset** 에서 강아지 코를 인식할 수 있는 사진들은 선별한 후 이미지 증강을 이용해 학습데이터를 만들었다.

| Data Collection | Sorted Image | Image Augmentation |
| --------------- | ------------ | ------------------ |
| 11,844          | 2,029        | 10,145             |

> 강아지 비문 인식 데이터 

 학습데이터는 **VPR2022 Biometrics Workshop Pet Biometric Challenge**에 첨부된 데어테 셋 중에 강아지 비문이 보이는 사진들로 선별하고, 구글폼을 통해 팀원들의 인스타그램에 올려 반려견이 있는 지인들에게 얻은 데이터를 이미지 증강을 이용해 학습데이터를 만들었다. 

| **데이터 수집** | **이미지 선별** | **이미지 증강** |
| --------------- | --------------- | --------------- |
| 10,000          | 964             | 9,640           |

## Image Preprocessing

> 강아지 비문 인식을 위한 이미지 전처리

* GaussianBlur :　이미지의 중앙값에 가중치를 주고 주변은 더 흐리게 하여 노이즈를 제거해 코의 빛 반사 제거

* EdgeDection :　sobel, laplacian, canny 사용해 가장자리 추출

| **Sboel**                                                    | **Laplacian**                                                | **Canny**                                                    |
| ------------------------------------------------------------ | ------------------------------------------------------------ | ------------------------------------------------------------ |
| ![image01](https://user-images.githubusercontent.com/79498819/209196224-25575e6d-63c9-405f-9b61-0232a9133a69.png) | ![image02](https://user-images.githubusercontent.com/79498819/209196258-a653ac27-5b52-4e01-b8ca-2030805d5cd6.png) | ![image03](https://user-images.githubusercontent.com/79498819/209196309-4e332764-8903-4ae7-b224-f3a896d38a8d.png) |


## Object-Detection

> crop dog nose(강아지 코 추출)

객체탐지(object-detection)은 한 이미지에서 객체와 그 경계 상자(bounding box)를 탐지하는 기술이다. 객체 탐지 알고리즘은 이미지를 입력으로 받고, 경계 상자와 객체 클래스 리스트를 출력하며 이때 경계 상자에 대응하는 예측 클래스와 클래스의 신뢰도(confidence)를 출력한다. 우리가 사용한 모델은 2018년에 출시된 yoloV5 모델이다.

> Train Result

#### yoloV5n(나노)

| epoch  | 300             | 600             | 1047(early stopping) |
| ------ | --------------- | --------------- | -------------------- |
| 정확도 | mAP50-95: 0.915 | mAP50-95: 0.915 | mAP50-95: 0.915      |

#### yoloV5m(미디움)

| epoch  | 300             | 600             | 646(early stopping) |
| ------ | --------------- | --------------- | ------------------- |
| 정확도 | mAP50-95: 0.984 | mAP50-95: 0.984 | mAP50-95: 0.984     |

#### yoloVn vs yoloV5m

| Model  | yoloV5n              | yoloV5m미디움*  |
| ------ | -------------------- | --------------- |
| 정확도 | mAP50-95 : **95.2%** | mAP50 : **98%** |

=> 차이가 극적으로 크게 나지 않기 때문에, 예측속도가 빠른 **yoloV5n**을 사용하기로 결정했다. 

## Siamese Neural Network

Siamese Network 는 (이하 샴 네트워크) 다루어야하는 클래스의 종류가 매우 많고, 특정 클래스에 대한 사진을 대량으로 구할 수 없을 때 머신러닝을 활용하여 그 클래스를 구분해내기 위하여 고안된 네트워크이다.    

 샴 네트워크는 두 사진을 입력으로 받아서 두 이미지를 벡터화 시킨 이후, 두 벡터간의 유사도 (similarity in [0, 1]) 를 반환하는 네트워크이다. Network는 해당 이미지의 특징을 hand-crafted features가 아닌 data에서 직접 학습할 수 있으므로 주어진 similarity 를 최적화 할 수 있는 양질의 feature를 추출한다.    

 Siamese Network는 하나의 이미지를 하나의 벡터로 변환할 수 있는 weight를 가지고 있는데, 위의 그림과 같이 이미지를 입력으로 받아 여러번의 convolution 연산을 거쳐 하나의 벡터로 이미지를 인코딩한다. 두 이미지는 공유되는 weight 를 이용하여 벡터로 인코딩 된다.     

 정의된 네트워크에 두 사진이 같은 경우 유사도(Similarity)를 1로 주고, 두 사진이 다를 경우 유사도(similarity)를 0으로 주어서 모델을 학습시킨다. 이때 학습에 사용하는 loss는 binary_crossentropy를 사용하여 반환값이 유사도인 0~1 사이의 확률값으로 한다. 이를 통해서 추출된 벡터 간의 거리는 서로 유사한(=같은) 이미지끼리는 가까운 거리(높은 유사도)를 가지고, 서로 다른 이미지 간에는 먼 거리를 (낮은 유사도) 가지도록 학습을 진행했다.    

> Siamese Neural Network 기반 비문 인식 모델

![샴네트워크 drawio](https://user-images.githubusercontent.com/79498819/209196524-539530b7-a1a3-4c3a-8cb5-b12eff76a518.png)

비문 이미지에서 특징점을 비교하기위해 원샷 런닝기반의 샴네트워크 모델을 구현했다.    

인식 시킬 사진과 db에 저장되어있는 사진이 동시에 input으로 들어가 각각 웨이트를 공유하며 여러번의 컨볼루션 연산을 통해 특징점이 추출됩니다. 특징점이 추출된 이 피처맵의 차이를 여러번의 dense 레이어를 거치고 sigmod를 통해  유사도인 0-1 사이의 확률 값을 반환한다.    


 원천 이미지와 각각의 전처리된 이미지들을 기법 별로 모두 학습시켜 비교분석을 했다.  결과는 아래와 같다.

> Train Result

|              | Original | Canny dataset | **Laplacian dataset** | **Sobel dataset** |
| ------------ | -------- | ------------- | --------------------- | ----------------- |
| **Accuracy** | 0.96     | 0.95          | **0.96**              | **0.96**          |
| **Loss**     | 0.14     | 0.16          | **0.15**              | **0.14**          |

=> **Laplacian**기법의 정확도가 가장 높아 이 전처리 기법을 사용한 모델을 서버(백앤드)에 이식하여 사용했다.

# APP

## Frontend

프론트엔드 언어로는 javascript, 그리고 framework로서 react-native를 사용했다.    

 react-native의 개발 방법으로는 cli 대신 expo를 선택했다. expo는 편리하고 유용하며 추후 배포할 경우 cli보다 간편하다는 장점이 있어 유지, 보수하기에 좋다. cli보다 라이브러리가 적지만, expo 자체에서 꾸준하게 기능들을 제공해주고 있어 선택했다.

#### 사용자 경험 중시

  개발을 진행할 때, 사용자에게 좋은 경험을 주는 것을 가장 최우선의 목표로 설정하여 작업을 진행하였다.  text input이나 button과 같이 자주 쓰이는 기능의 경우 컴포넌트식으로 통일성을 높이고 비문 등록과 검색 시 모델이 처리하는 시간으로 사용자의 대기시간이 길어지기 때문에 skeleton component를 사용했다.    
 카메라 촬영시, 사용자 누구나 쉽게 강아지 코를 찍을 수 있게 코 모양 이미지를 카메라 화면에 띄우고, 강아지 촬영은 어렵기 때문에 강아지를 핸드폰으로 집중시키기 위해 clap-sound를 넣어 코를 쉽고, 정확하게 찍을 수 있도록 구현하였다.

#### 사용한 library

  expo에서 다양한 library를 지원해주고 있다. 카메라 기능으로는 expo-camera와 expo-image-picker를 사용했으며, 캘린더 기능으로는 expo-calendar를 사용했다.
  clap-sound를 넣을 시에는 react-native-sound와 react-native-sound-player를 사용했다.

## Backend

#### Account app

 rest_auth, allauth 라이브러리를 활용하여 회원가입에 필요한 사용자의 닉네임, 이메일, 비밀번호를 받아서 입력 받아서 사용자의 계정을 만든다. DB에 저장될 때 사용자 비밀번호를 단방향 해시 함수(one-way hash function)가 사용된다. 사용자가 회원가입을 할 때에는 JWT 토큰 인증 발급을 함께 진행한다.

#### Dogaccount app
 애완견의 프로필의 값을 DB에 저장하고 애완견의 비문등록 및 비문검사를 진행한다. DB에 저장을 완료한 후, 사용자가 프론트에서 애완견 프로필 정보 및 id(pk)값을 보내면, 서버에서 받아, 해당 id 값에 맡는 애완견의 DB 정보를 가져와서 조회 및 수정을 진행한다. 사용자가 비문 등록 및 인식할 때 애완견의 코 사진경로를 따로 DB에 저장한 후, Foreign key 를 활용하여 강아지의 프로필 정보의 DB와 연결시킨다. 

비문조회를 하게 되면 강아지의 코사진을 찍으면 yolo를 통해 크롭된 코사진이 나온다. 이 사진의 경로와 강아지 DB에 저장되어있는 코 사진 경로를 통해 두개의 코 사진을 비교한다. 비문 인식 모델의 결과인 유사도 확률 값, 즉 Score 점수가 0.8 이상일경우 해당 강아지가 같다고 하고 강아지의 DB를 보여주고 아닐경우 HTTP_204_NO_CONTENT 를 통해 일치하지 않는다고 알려준다.

#### Pet_hospital_diary app

 병원일지 적는 DB와 병원 및 예방 접종과 심장사상충을 저장하는 DB를 만들어서 저장한다. 

#### Diary app

 애완견과 관련된 나의 일기를 DB에 저장한다. 일기에서 산책 여부를 choice로 체크박스 유무에 따라 DB값이 [o, x] 값으로 저장되는데, o가 저장될 때마다 산책 값이 1개씩 증가시킨다. 추후 다른 일기에서 해당 값이 o인지 x인지 검사를 통해서 o일 경우 산책 횟수를 1 증가시키고 아닐, 경우 값을 증가시켜 산책 횟수를 DB에 저장시킨다.

# Benefits

사람의 지문과 같이 반려견의 비문(코 지문)은 모두 다르며 나이가 들어서도 변하지 않기에 생체정보로써 사용할 수 있다. 때문에, 비문 개체인식 기술을 개발함으로써  마이크로칩의 부작용을 극복하고 반려견 신체 내 이물질 삽입과 비용에 대한 부담이 적으며, 파손 및 분실 염려가 없고 빠르게 등록 및 조회가 가능하다. 즉, 본질적으로 반려동물의 분식이나 유기를 방지할 수 있다.   

 현재 비문 관련한 기술 중 일부는 사용자 친화적이지 않으며 사전 작업이 많은 경우가 있어 실시간 서비스에 부적합하다. 해당 프로젝트를 진행하며 더 나은 기술 개발을 통하여 빠른시간내에 효과적으로 개체인식을 하는 시스템을 구축할 수 있을 것이다. 뿐만 아니라, 반려견 비문인식 시스템의 상용화를 위해 향후 분류 성능을 더욱 향상 시킬 수 있는 방법에 대한 연구와 더불어 실제 수집된 데이터 기반의 분류 성능 분석 연구도 수행할 예정이다. 이것은 반려견 비문 인식 시스템의 불필요한 인식 처리 횟수를 줄이고 인식률도 향상 시킬 수 있을 것으로 기대된다.   

 현재는 개를 대상으로 서비스를 제공할 예정이지만, 향후 고양이와 같은 개를 제외한 다른 반려동물까지 확대하여 서비스를 제공할 수 있으리라 예상한다.   

 또한, 동물이 미리 등록된 특정 개체인지 아닌지를 확인하는 동물 인증은 동물 병원, 동물 입양 센터, 동물 보호소, 동물 보험사 등 다양한 곳에서 사용된다. 동물 보험사의 경우, 사고가 발생했을 때 보험에 가입된 특정 개체인지 정확히 확인할 수 있게 되면 이와 같은 반려동물 사업에서 유용한 기술로 자리를 잡으며 반려동물 시장의 활성화를 기대할 수 있다.

# Reference

1. Gregory Koch, Richard Zemel, Ruslan Salakhutdinov, Siamese Neural Networks for One-shot Image Recognition, ICML deep learning workshop, vol. 2, pp. 3-8 ,2015
2. Joseph Redmon, Santosh Divvala, Ross Girshick, Ali Farhadi, You Only Look Once: Unified, Real-Time Object Detection, pp. 1-7, 2015
3. YOLOv5, https://pytorch.org/hub/ultralytics_yolov5/
4. 정성환, 배종훈, OpenCV-Python으로 배우는 영상 처리 및 응용, 생능출판, 2020
5. 권태형, 백엔드를 위한 Django REST Framework with 파이썬, 영진닷컴, 2022
6. 처음 배우는 리액트 네이티브, 493쪽, 한빛미디어 - 김범준
7. Do it! 리액트 네이티브 앱 프로그래밍, 856쪽, 이지퍼블리싱 - 전예홍

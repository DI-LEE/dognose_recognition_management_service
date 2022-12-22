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

청춘 그 잡채

| **Name**   | **Role**                                                     | **Contact**           |
| ---------- | ------------------------------------------------------------ | --------------------- |
| **이동인** | 팀장, 강아지 코 추출 및 비문 인식 모델 개발 및 이식, 데이터 라벨링 및 증강 | dongeen1@gmail.com    |
| 임서연     | 기획, 학습 데이터 수집 및 라벨링, 이미지 전처리              | dlatjdus222@naver.com |
| 황남주     | UX/UI 디자인, 프론트엔드 개발                                | namuju_hi@naver.com   |
| 조성민     | 백엔드 개발 및 서버 구축                                     | another0306@naver.com |

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

* 

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

전 세계적으로 반려동물 관련 시장이 급격히 성장하고 있으며 반려동물의 인식이 집에서 기르는 애완동물에서 평생을 함께하는 가족으로 변화했다. 그리고 반려동물을 키우고 있는 가구는 지속적으로 증가하고 있습니다. 반려동물을 많이 키우는 만큼 유기견 또한 급격히 늘어나고 있습니다. 동물등록제의 미등록 사유인 내장칩에 대한 거부감과 비용에 대한 부담이 미등록 사유의 큰 부분을 차지한다. 이러한 한계 극복을 위해 비문 개체 인식 기술 개발을 통한 반려동물 관리 app 개발을 하고자 한다. 

# System Structure

#### 비문 등록 시스템 구조

1. 사용자는 어플리케이션의 카메라 기능으로 강아지의 정면 얼굴 사진을 찍는다.

2. 강아지 정면 얼굴 사진은 갤러리에 저장되며, REST API를 통해 서버로 전송된다.

3. 전송된 강아지 정면 얼굴 사진은 object-detection 모델인 yoloV5을 통해 강아지의 정면 얼굴 중 코(비문) 부분만 추출하여 이미지 전처리를 진행하고 데이터베이스에 저장한다.

#### 비문 인식 시스템 구조

1. 사용자는 어플리케이션의 카메라 기능으로 강아지의 정면 얼굴 사진을 찍는다.

2. 강아지 정면 얼굴 사진은 갤러리에 저장되며, REST API를 통해 서버로 전송된다.

3. 전송된 강아지 정면 얼굴 사진은 object-detection 모델인 yoloV5을 통해 강아지의 정면 얼굴 중 코(비문) 부분만 추출하여 비문 인식 모델에 input 한다.

4. 데이터베이스에 저장되어 있는 모든 강아지의 비문을 이진탐색 알고리즘을 통해 비문 인식 모델에 input 한다.

5. 비문 인식 모델은 input으로 들어온 두 비문 사진의 유사도를 비교하여 같은 비문인지 다른 비문인지 예측값을 서버를 통해 client로 전송한다.

6. 만약 같은 비문일 경우, 해당 비문의 강아지 정보를 client에게 조회할 수 있도록 한다.

# UI/UX

# Result Video


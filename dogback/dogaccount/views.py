from django.shortcuts import render
from .models import DogAccount
from .serializers import Dog_accountSerializer
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
import json
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from django.http import Http404
import sys, os
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
import yolov05.detect as yolo
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
import yolov05.detect1 as yolo1
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))
import image_preprocessing as img_pre
#from rest_framework.decorators import action
data_path = "C:/Users/anoth/Desktop/capstone/backend/dogback/yolov05/runs/detect/exp/crops/dog_nose/test이미지_1PLkRMX.jpg"
import numpy as np
import matplotlib.pyplot as plt
import tensorflow as tf
from tensorflow.python.keras.models import Model
import glob

class DogViewSet(viewsets.ModelViewSet): #viewset 활용 CRUD
    serializer_class = Dog_accountSerializer
    queryset = DogAccount.objects.all()

    def update(self, request, pk):
        profile=DogAccount.objects.get(pk=pk)
        serializer = Dog_accountSerializer(profile, data=request.data, partial=True) #partial= True -> 값을 다 넣어줘야 수정이 가능
        if serializer.is_valid():
            if serializer.validated_data['registerimage'] != None:
                serializer.validated_data['noseprint'] = 1
                opt=yolo.parse_opt()
                yolo.main(opt)
                yolo_path = (sorted(glob.glob('C:/Users/anoth/Desktop/capstone/backend/dogback/yolov05/runs/detect/*'), key=os.path.getctime))[-1] + "/crops/dog_nose/"
                yolo_crop_img = os.listdir(yolo_path)[0]
                final_path = yolo_path + yolo_crop_img
                serializer.save(noseimagestr = final_path )
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#비문인식
class CheckPrintViewSet(viewsets.ModelViewSet): #viewset 활용 CRUD
    serializer_class = Dog_accountSerializer
    queryset = DogAccount.objects.all()
    def update(self, request, pk):
        profile = DogAccount.objects.get(pk=pk)
        serializer = Dog_accountSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            print("check조건문들어감")
            serializer.save()
            opt=yolo1.parse_opt()
            yolo1.main(opt)
            yolo_path = (sorted(glob.glob('C:/Users/anoth/Desktop/capstone/backend/dogback/yolov05/runs/detect/*'), key=os.path.getctime))[-1] + "/crops/dog_nose/"
            #print("yolo_path 출력합니다." + yolo_path)
            yolo_crop_img = os.listdir(yolo_path)[0]
            #print(yolo_crop_img)
            final_path = yolo_path + yolo_crop_img
            #print(final_path)
            #db_img_path = data_path
            #print("프론트 이미지 경로" + final_path)
            #real_dog = "C:/Users/anoth/Desktop/capstone/backend/dogback/yolov05/runs/detect/exp/crops/dog_nose/test이미지_1PLkRMX.jpg"
            real_dog = serializer.validated_data['noseimagestr']
            recognizing_model = tf.keras.models.load_model("C:/Users/anoth/Desktop/capstone/backend/dogback/laplacian.h5") # h5 
            front_img=img_pre.img_resize_reshape(img_pre.img_preprocessing(final_path)) #front이미지
            db_img = img_pre.img_resize_reshape(img_pre.img_preprocessing(real_dog)) #db이미지
            #print("디비 이미지 경로" + real_dog)
            score=recognizing_model.predict([front_img, db_img])[0] # 0~1까지 확률값
            print(score)
            if score >=0.8:
                return Response(serializer.data, status=status.HTTP_200_OK)
            else:
                return Response(serializer.errors, status=status.HTTP_204_NO_CONTENT)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

#APIView
# class DogProfile(APIView):
#     def post(self, request): # Create
#         serializer = Dog_accountSerializer(data = request.data)
#         if serializer.is_valid(): # 유효성 검사
#             #이미지 -> 비문 추출 -> 비분추출 값 저장
#            # yolo.main(yolo.opt)
            
            
#             serializer.save()
#             return Response(serializer.data, status=status.HTTP_201_CREATED) 
#         return Response(serializer.errors, status= status.HTTP_400_BAD_REQUEST)

# class DogDetail(APIView):
#     def get_object(self,pk):
#         try:
#             return DogAccount.objects.get(pk=pk)
#         except DogAccount.NotExist:
#             raise Http404
    
#     def get(self, request, pk, format = None): #Read
#         profile = self.get_object(pk)
#         serializer = Dog_accountSerializer(profile)
#         return Response(serializer.data)

#     def put(self, request, pk, format = None): # Update
#         profile = self.get_object(pk)
#         serializer = Dog_accountSerializer(profile, data=request.data)
#         if serializer.is_valid():
#             serializer.save()
#             return Response(serializer.data)
#         return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

#     def delete(self, requesst, pk, format = None): #Delete
#         profile = self.get_object(pk)
#         profile.delete()
#         return Response(status = status.HTTP_204_NO_CONTENT)
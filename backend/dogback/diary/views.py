from django.shortcuts import render
from .models import Diary#, PetWalk
from .serializers import DiarySerializers
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from django.http import Http404
import json
from django.http import JsonResponse
from django.db.models import Q

# Create your views here.
class DiaryViewSet(viewsets.ModelViewSet): #viewset 활용 CRUD
    serializer_class = DiarySerializers
    queryset = Diary.objects.all()

    def create(self, request):
        print(self.request.user) # admin 만 나온다.
        serializer = self.get_serializer(data=request.data) # serializer 은 serializer_class를 의미(?)
        if serializer.is_valid():
            petwalklist = Diary.objects.filter(petwalk__exact = 'o')
            w_num = len(petwalklist)
            serializer.save(petwalknum = w_num)
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
    


        




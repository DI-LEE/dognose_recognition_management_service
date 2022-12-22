from django.shortcuts import render
from django.shortcuts import render
from .models import HospitalDay, HospitalDiary
from .serializers import HospitalDiarySerializer, HospitalDaySerializer
from rest_framework import viewsets
from rest_framework.response import Response
# Create your views here.


class HospitalDiaryViewSet(viewsets.ModelViewSet): #viewset 활용 CRUD
    serializer_class = HospitalDiarySerializer
    queryset = HospitalDiary.objects.all()



class HospitalDayViewSet(viewsets.ModelViewSet): #viewset 활용 CRUD
    serializer_class = HospitalDaySerializer
    queryset = HospitalDay.objects.all()
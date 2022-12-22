from django.db import models
from django.utils import timezone
# Create your models here.
from django.conf import settings
from django.contrib.auth.models import User

class HospitalDay(models.Model):
    id = models.AutoField(primary_key=True, null=False, blank=False) #pk
    hospitalnameing = models.CharField(null=True, blank=True, max_length=50)  #현재 다니고 있는 병원
    vaccination = models.DateField(null=True, blank=True)  # 예방 접종 날짜
    heartworm = models.DateField(null=True, blank=True) # 심장 사상충 날짜
       

class HospitalDiary(models.Model): # hospital_Diary
    id = models.AutoField(primary_key=True, null=False, blank=False) #pk
    image = models.ImageField(null=True, blank= True) #사진
    hospital_name = models.CharField(max_length=50) # 병원 이름
    body = models.CharField(max_length=200) # 일지내용
    days = models.DateField() # 날짜
    required = models.TextField(null=True, blank=True, max_length=500) # 특이사항

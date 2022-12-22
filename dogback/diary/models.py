from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class Diary(models.Model): # Diary
    WALKING_CHOICE = (
        ('o','1'),
        ('x','0')
    )
    id = models.AutoField(primary_key=True)
    day = models.DateField(unique=True) # 기록날짜
    image = models.ImageField(null=True, blank= True) #사진
    context = models.TextField(max_length = 500) # 일기 내용
    petwalk = models.CharField(max_length=1,choices=WALKING_CHOICE)#산책
    petwalknum = models.IntegerField(null=True, blank=True)# 산책횟수

    def __str__(self):
        return str(self.day)





    


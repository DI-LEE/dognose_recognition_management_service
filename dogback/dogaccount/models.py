from django.db import models
from django.contrib.auth.models import User
# Create your models here.

'''
delete database 명령어
find . -path "*/migrations/*.py" -not -name "__init__.py" -delete
find . -path "*/migrations/*.pyc"  -delete

'''


# img 모델을 처리하고 이미지를 가지고 비문추출 작업을 진행 그리고 그 값을 다시 Nose_vector 값에 저장하고 그 값을 FOREIGN key로 활용

class DogAccount(models.Model):
    PET_SEX_CHOICE = (
        ('M','male'),
        ('F','female')
    )
    id = models.AutoField(primary_key=True, null=False, blank=False) # PK 
    petname = models.CharField(max_length = 20) # 이름
    petyear = models.DateField(null=True, blank=True) # 생년월일
    petspecies = models.CharField(null=True, blank=True, max_length=20) # 종
    petweight = models.FloatField(null = True, blank = True) # 무게
    petpublicnum = models.IntegerField(null = True, blank = True) # 등록번호
    petsex = models.CharField(null = True , blank = True , max_length=1, choices = PET_SEX_CHOICE) # 성별
    petdesex = models.IntegerField(null=True, blank = True)
    petimage = models.ImageField(null=True, blank = True, upload_to="photo/1") # 사진
    registerimage = models.ImageField(upload_to='photo/2', null = True, blank = True) #비문 등록 사진
    noseimage = models.ImageField(upload_to='photo/4', null = True, blank = True) #비문 사진
    noseimagestr = models.TextField(null=True, blank =True)
    frontimage = models.ImageField(upload_to='photo/3', null = True, blank = True)# 프론트 비문 이미지 사진
    noseprint = models.CharField(null=True, blank = True, max_length=5)#비문 등록 추가 여부

    def __str__(self):
        return self.petname
    


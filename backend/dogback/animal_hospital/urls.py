from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from .views import HospitalDiaryViewSet, HospitalDayViewSet

from django.conf.urls.static import static # 이미지처리 setting -> static
from django.conf import settings # import settings

router = DefaultRouter()
router.register('name-day', HospitalDayViewSet)
router.register('hospitaldiary',  HospitalDiaryViewSet)

HospitalDay_detail = HospitalDayViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'delete': 'destroy'
})


HospitalDiary_detail = HospitalDiaryViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'delete': 'destroy'
})

urlpatterns = [
    path('', include(router.urls)),
    path('daydetail/',HospitalDay_detail),
    path('diarydetail/',HospitalDiary_detail)
    #path('profile/<int:nose_vec>',DogProfile.as_view()),
    #path('profile/<int:pk>/',DogDetail.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
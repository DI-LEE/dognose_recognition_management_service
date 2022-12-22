from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import DogViewSet, CheckPrintViewSet
from django.conf.urls.static import static # 이미지처리 setting -> static
from django.conf import settings # import settings


nose_detail = CheckPrintViewSet.as_view({
    'get' : 'retreive',
    'put' : 'update',
    'delete' : 'destory'
})

profile_detail = DogViewSet.as_view({
    'get' : 'retreive',
    'put' : 'update',
    'delete' : 'destory'
})

router = DefaultRouter()
router.register('nose-print', DogViewSet)
router.register('checknose',CheckPrintViewSet, basename='checknose')

urlpatterns = [
    path('', include(router.urls)),
    path('profile/',profile_detail),
    path('checking/',nose_detail)
]
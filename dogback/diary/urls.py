from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter
from .views import DiaryViewSet 
from django.conf.urls.static import static # 이미지처리 setting -> static
from django.conf import settings # import settings

router = DefaultRouter()
router.register('mydiary', DiaryViewSet)
#router.register('up-weight', DogProfileViewSet)

profile_detail = DiaryViewSet.as_view({
    'get': 'retrieve',
    'put': 'update',
    'delete': 'destroy'
})

urlpatterns = [
    path('', include(router.urls)),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
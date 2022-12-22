from django.urls import path, include
from rest_auth.views import (
    LoginView, LogoutView, PasswordChangeView,
    PasswordResetView, PasswordResetConfirmView
)
from .views import KakaoSignInView , KaKaoSignInCallBackView
#from .views import KaKaoSignInCallBackView

urlpatterns = [
    path('rest-auth',include('rest_auth.urls')),
    # 로그인 & 회원가입 기능
    path('rest-auth/login', LoginView.as_view(), name='rest_login'),
    path('rest-auth/logout', LogoutView.as_view(), name='rest_logout'),
    path('rest-auth/password/change', PasswordChangeView.as_view(), name='rest_password_change'),
    path('rest-auth/registration/', include('rest_auth.registration.urls')), 

    #kakao 소셜 로그인
    path('signin/kakao/back',KakaoSignInView.as_view()),
    path('signin/kakao/callback',KaKaoSignInCallBackView.as_view()),


]

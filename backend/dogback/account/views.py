from django.shortcuts import render, redirect
from django.views.generic import View
from django.http import JsonResponse
import requests
# Create your views here.

#http://localhost     :8000/account/signin/kakao
#rest-api key 9ace7f8a88a2c760b806492fd9241a79

class KakaoSignInView(View):
    def get(self, request):
        app_key = '9ace7f8a88a2c760b806492fd9241a79'
        redirect_uri = 'http://localhost:8000/account/signin/kakao'
        kakao_auth_api = 'https://kauth.kakao.com/oauth/authorize?response_type=code'
        return redirect(
            f'{kakao_auth_api}&client_id={app_key}&redirect_uri={redirect_uri}'
        )

class KaKaoSignInCallBackView(View):
    def get(self, request):
        auth_code = request.GET.get('code')
        kakao_token_api = 'https://kauth.kakao.com/oauth/token'
        data = {
       'grant_type': 'authorization_code',
            'client_id': '9ace7f8a88a2c760b806492fd9241a79',
            'redirection_uri': 'http://localhost:8000/account/signin/kakao',
            'code': auth_code
        }
        token_response = requests.post(kakao_token_api, data=data)

        access_token = token_response.json().get('access_token')

        user_info_response = requests.get('https://kapi.kakao.com/v2/user/me', headers={"Authorization": f'Bearer ${access_token}'})

        return JsonResponse({"user_info": user_info_response.json()})
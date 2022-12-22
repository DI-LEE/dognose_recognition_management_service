DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'petapp',
        'USER': 'root',
        'PASSWORD': 'whtjdals0306!',
        'HOST': '127.0.0.1', # -> 시발 localhost 가 아니라 127.0.0.1 이다
        'PORT': '3306',
    }

}

SECRET_KEY = 'django-insecure-0n!*vkk8wb0yls7@6e)+m-h6m%6$zl_kob22i1yzg#+7zmi)^3'
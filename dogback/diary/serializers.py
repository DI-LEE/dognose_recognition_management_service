from rest_framework import serializers
from . models import Diary


class DiarySerializers(serializers.ModelSerializer):
    class Meta:
        fields = ('id','day', 'image', 'context','petwalk','petwalknum') #user
        model = Diary

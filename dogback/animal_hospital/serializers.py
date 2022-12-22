from .models import HospitalDay, HospitalDiary
from rest_framework import serializers

class HospitalDiarySerializer(serializers.ModelSerializer):
    class Meta:
        fields = (
            'id',
            'image',
            'hospital_name',
            'body',
            'days',
            'required'
        )
        model = HospitalDiary

class HospitalDaySerializer(serializers.ModelSerializer):
    class Meta:
        model = HospitalDay
        fields = (
            'id',
            'hospitalnameing',
            'vaccination',
            'heartworm',
        )
        model = HospitalDay
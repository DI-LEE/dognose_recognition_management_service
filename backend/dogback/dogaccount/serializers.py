from rest_framework import serializers
from .models import DogAccount
class Dog_accountSerializer(serializers.ModelSerializer):
    #user = serializers.ReadOnlyField(source = 'user.username')
    class Meta:
        model = DogAccount
        fields = (
        'id',
        'petname',
        'petyear',
        'petspecies',
        'petweight',
        'petpublicnum',
        'petsex','petimage',
        'registerimage',
        'noseimage',
        'noseprint',
        'petdesex',
        'frontimage',
        'noseimagestr') 

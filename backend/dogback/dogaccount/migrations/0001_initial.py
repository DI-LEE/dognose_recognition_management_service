# Generated by Django 3.2 on 2022-12-06 07:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='DogAccount',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('petname', models.CharField(max_length=20)),
                ('petyear', models.DateField(blank=True, null=True)),
                ('petspecies', models.CharField(blank=True, max_length=20, null=True)),
                ('petweight', models.FloatField(blank=True, null=True)),
                ('petpublicnum', models.IntegerField(blank=True, null=True)),
                ('petsex', models.CharField(blank=True, choices=[('M', 'male'), ('F', 'female')], max_length=1, null=True)),
                ('petdesex', models.IntegerField(blank=True, null=True)),
                ('petimage', models.ImageField(blank=True, null=True, upload_to='photo/1')),
                ('registerimage', models.ImageField(blank=True, null=True, upload_to='photo/2')),
                ('noseimage', models.ImageField(blank=True, null=True, upload_to='photo/4')),
                ('noseimagestr', models.TextField(blank=True, null=True)),
                ('frontimage', models.ImageField(blank=True, null=True, upload_to='photo/3')),
                ('noseprint', models.CharField(blank=True, max_length=5, null=True)),
            ],
        ),
    ]

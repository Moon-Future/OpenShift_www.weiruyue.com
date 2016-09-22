from django.db import models

# Create your models here.
class MusicList(models.Model):
	SongName=models.CharField(max_length=100)
	Singer=models.CharField(max_length=100)
	Lyric=models.CharField(max_length=10000)
	SongId=models.CharField(max_length=100)
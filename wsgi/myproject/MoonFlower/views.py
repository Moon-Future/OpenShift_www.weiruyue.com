from django.shortcuts import render
from MoonFlower.models import MusicList
import os

# Create your views here.
def index(request):
	return render(request, 'index.html')

def music(request,SongId):
	musicAll=MusicList.objects.all()
	for each in musicAll:
		each.Lyric = each.Lyric.split('\r\n')
	music=MusicList.objects.get(SongId=SongId)
	musicList={}
	musicList['SongName']=music.SongName
	musicList['Singer']=music.Singer
	musicList['Lyric']=music.Lyric.split('\r\n')
	musicList['SongId']=music.SongId
	return render(request, 'music.html',{'musicList':musicList,'musicAll':musicAll})

def addmusic(request):
	if request.method=="POST":
		SongName=request.POST['SongName']
		Singer=request.POST['Singer']
		SongId=request.POST['SongId']
		Lyric=request.POST['Lyric']
		new_music=MusicList.objects.create(SongName=SongName,Singer=Singer,SongId=SongId,Lyric=Lyric)
	return render(request, 'addmusic.html')

def musiclist(request):
	return render(request, 'musiclist.html')

def list(request):
	musicAll=MusicList.objects.all()
	for each in musicAll:
		each.Lyric = each.Lyric.split('\r\n')
	return render(request, 'list.html',{'musicAll':musicAll})

def header(request):
	return render(request, 'header.html')

def footer(request):
	return render(request, 'footer.html')
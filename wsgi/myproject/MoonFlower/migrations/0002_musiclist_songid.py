# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-09-20 10:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('MoonFlower', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='musiclist',
            name='SongId',
            field=models.CharField(default=2, max_length=100),
            preserve_default=False,
        ),
    ]

# Generated by Django 4.2.4 on 2024-01-11 16:59

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('tracks', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='tracks',
            old_name='artists',
            new_name='artist',
        ),
    ]

# Generated by Django 4.2.4 on 2023-09-09 22:17

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user_registration', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Stored_Search_Results',
            fields=[
                ('result_id', models.AutoField(primary_key=True, serialize=False)),
                ('search_text', models.TextField()),
                ('date_created', models.DateTimeField(auto_now_add=True)),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user_registration.user_registration')),
            ],
        ),
    ]

# Generated by Django 3.1.1 on 2020-09-04 20:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0002_article_slug'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='thumbnail',
            field=models.ImageField(blank=True, default='default.png', upload_to=''),
        ),
    ]
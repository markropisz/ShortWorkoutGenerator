from django.contrib import admin
from django.urls import path
from .views import ProfileList

urlpatterns = [
    #path('movement_list/', MovementList.as_view(), name='movement_list'),
    path('movement_list/', ProfileList.as_view(), name='movement_list'),
]
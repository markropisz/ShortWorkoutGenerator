from django.shortcuts import render
from rest_framework import generics
from .models import Movement
from .serializers import MovementSerializer
from rest_framework.views import APIView
from rest_framework.renderers import TemplateHTMLRenderer
from rest_framework.response import Response
from django.views.generic.base import TemplateView

class ProfileList(generics.ListAPIView):
    queryset = Movement.objects.all()
    serializer_class = MovementSerializer
    template_name = 'WorkoutGeneratorApp/profile_list.html'

# class ProfileList(APIView):
#     renderer_classes = [TemplateHTMLRenderer]
#
#     def get(self, request):
#         queryset = Movement.objects.all()
#         return Response({'profiles': queryset}, template_name='WorkoutGeneratorApp/profile_list.html')

# class ProfileList(TemplateView):
#     template_name = 'WorkoutGeneratorApp/profile_list.html'
#
#     def get_context_data(self, **kwargs):
#         context = super().get_context_data(**kwargs)
#         context['movements'] = Movement.objects.all()
#         return context



class ReactTemplateView(TemplateView):
    template_name = 'index.html'

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['movements'] = Movement.objects.all()
        return context






# Create your views here.

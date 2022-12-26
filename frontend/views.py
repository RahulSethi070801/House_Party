from django.shortcuts import render
import os

# Create your views here.

def index(request, *args, **kwargs):
    return render(request, 'frontend/index.html')
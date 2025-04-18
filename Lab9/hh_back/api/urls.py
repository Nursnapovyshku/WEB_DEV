from django.urls import path
from . import views

urlpatterns = [
    # Company 
    path('companies/', views.company_list, name='company-list'),
    path('companies/<int:id>/', views.company_detail, name='company-detail'),
    path('companies/<int:id>/vacancies/', views.company_vacancies, name='company-vacancies'),
    
    # Vacancy 
    path('vacancies/', views.vacancy_list, name='vacancy-list'),
    path('vacancies/<int:id>/', views.vacancy_detail, name='vacancy-detail'),
    path('vacancies/top_five/', views.top_five_vacancies, name='top-five-vacancies'),
]
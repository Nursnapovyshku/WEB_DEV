from api.models import Company, Vacancy

companies = [
    Company(
        name="Almavalley",
        description="A company that generates videos for students",
        city="Almaty",
        address="KBTU, 133 room"
    ),
    Company(
        name="ЦМТ",
        description="A company that takes photos.",
        city="Almaty",
        address="KBTU, 135 room"
    ),
    Company(
        name="Borealis-lab",
        description="Labaratory that creates new tech",
        city="Almaty",
        address="KBTU, 270 room"
    ),
    Company(
        name="Startup Incubator",
        description="Create your own startup, with these techmiques",
        city="Almaty",
        address="KBTU"
    ),
]

for company in companies:
    company.save()
    print(f"Created company: {company.name}")

vacancies = [
    Vacancy(
        name="Content creator",
        description="A person who makes interesting presentations and motion design",
        salary=200000,
        company=companies[0]
    ),
    Vacancy(
        name="Manager",
        description="Responsible for content creators",
        salary=535000,
        company=companies[0]
    ),
    
    Vacancy(
        name="Photographer",
        description="A person who takes interesting photos",
        salary=125000,
        company=companies[1]
    ),
    Vacancy(
        name="Videographer",
        description="Who can film even a movie, for podcasts",
        salary=200000,
        company=companies[1]
    ),
    
    Vacancy(
        name="lab-worker",
        description="A person who can work woth robo-techniques",
        salary=135000,
        company=companies[2]
    ),
    Vacancy(
        name="Director",
        description="Who can control people",
        salary=1300000,
        company=companies[2]
    ),
    
    Vacancy(
        name="Startup guru",
        description="Who has experience with startup",
        salary=95000,
        company=companies[3]
    ),
    Vacancy(
        name="Assistant",
        description="Managing students works",
        salary=10000,
        company=companies[3]
    ),
    Vacancy(
        name="Second-assistant",
        description="Managing students work.",
        salary=9000,
        company=companies[3]
    ),
]

for vacancy in vacancies:
    vacancy.save()
    print(f"Created vacancy: {vacancy.name} for {vacancy.company.name}")

print("\nData generation complete!")
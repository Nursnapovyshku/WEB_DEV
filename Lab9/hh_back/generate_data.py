from api.models import Company, Vacancy

companies = [
    Company(
        name="NURSULTANOS",
        description="Technical company",
        city="Almaty",
        address="Almaty,Kaskelen,Zhubanov street 1 "
    ),
    Company(
        name="NUS",
        description="Patent registration company.",
        city="Almaty",
        address="Almaty, zolotoy kvadrat"
    ),
    Company(
        name="SouthA",
        description="South African company",
        city="Almaty",
        address="Almaty,Zharokova street 37/3"
    ),
    Company(
        name="SoYuridiks",
        description="trademark registration company",
        city="Almaty",
        address="Almaty,Baitursunuly street 15"
    ),
]

for company in companies:
    company.save()
    print(f"Created company: {company.name}")

vacancies = [
    Vacancy(
        name="Yurist",
        description="A person who register trade marks",
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
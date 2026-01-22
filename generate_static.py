#!/usr/bin/env python3
"""
Static CV Generator using Jinja2 modular templates
Processes JSON data files to generate static HTML pages
"""

import json
import os
from pathlib import Path
from jinja2 import Environment, FileSystemLoader


def load_json_data(file_path):
    """Load JSON data from file"""
    with open(file_path, 'r', encoding='utf-8') as f:
        return json.load(f)


def get_level_class(level):
    """Get CSS class based on skill level"""
    if level < 40:
        return 'skill-low'
    elif level < 80:
        return 'skill-medium'
    else:
        return 'skill-high'


def get_level_text(level, lang_data):
    """Get level text based on skill level and language"""
    if level < 40:
        return lang_data['skill_low']
    elif level < 80:
        return lang_data['skill_medium']
    else:
        return lang_data['skill_high']


def prepare_context(cv_data, translations, lang_code):
    """Prepare context for template processing"""
    lang_data = translations[lang_code]
    shared_data = cv_data['shared']
    lang_specific = cv_data[lang_code]

    # Combine personal data
    personal = {**shared_data['personal'], **lang_specific['personal']}

    # Group skills by category
    skill_categories = {}
    for skill in shared_data['skills']:
        category = skill['category']
        if category not in ['systems', 'infrastructure', 'prog_lang', 'version_control']:
            continue

        if category not in skill_categories:
            # Using dict.get() to provide a fallback in case the translation key doesn't exist
            category_key = f'skill_cat_{category}'
            category_name = lang_data.get(category_key, category.title())
            skill_categories[category] = {
                'category_name': category_name,
                'skills': []
            }

        skill_info = {
            'name': skill['name'],
            'level_class': get_level_class(skill['level']),
            'level_text': get_level_text(skill['level'], lang_data)
        }
        skill_categories[category]['skills'].append(skill_info)

    # Prepare experiences
    experiences = []
    for exp in lang_specific['experience']:
        experience = {
            'company': exp['company'],
            'position': exp['position'],
            'duration': exp['duration'],
            'location': exp['location'],
            'logo': exp['logo'],
            'has_clients': bool(exp.get('clients')),
            'client_list': ', '.join(exp['clients']) if exp.get('clients') else '',
            'has_technologies': bool(exp.get('technologiesLearned')),
            'tech_list': exp['technologiesLearned'] if exp.get('technologiesLearned') else [],
            'descriptions': exp['description'],
            'clients_label': lang_data['clients_label'],
            'technologies_label': lang_data['technologies_label']
        }
        experiences.append(experience)

    # Prepare education
    educations = []
    for edu in lang_specific['education']:
        education = {
            'degree': edu['degree'],
            'school': edu['school'],
            'duration': edu['duration'],
            'location': edu['location'],
            'gpa': edu['gpa'],
            'logo': edu['logo'],
            'gpa_label': lang_data['gpa_label']
        }
        educations.append(education)

    # Prepare certifications
    certifications = []
    for cert in shared_data['certifications']:
        certification = {
            'name': cert['name'],
            'issuer': cert['issuer'],
            'date': cert['date'],
            'credentialId': cert.get('credentialId', ''),
            'has_credential_id': bool(cert.get('credentialId')),
            'logo': cert['logo'],
            'cert_id_label': lang_data['cert_id_label']
        }
        certifications.append(certification)

    # Construct context
    context = {
        'lang': lang_code,
        'title': f"{personal['name']} - {personal['title']}",
        'description': "DevOps Software Engineer specializing in cloud infrastructure, CI/CD, and containerization" if lang_code == 'en' else "Ingeniero DevOps especializado en infraestructura en la nube, CI/CD y contenedores",
        'nav_name': personal['name'],
        'nav_about': lang_data['nav_about'],
        'nav_skills': lang_data['nav_skills'],
        'nav_experience': lang_data['nav_experience'],
        'nav_education': lang_data['nav_education'],
        'nav_certifications': lang_data['nav_certifications'],
        'nav_contact': lang_data['nav_contact'],
        'other_lang_path': "../es/" if lang_code == 'en' else "../en/",
        'other_lang_code': "Spanish" if lang_code == 'en' else "English",
        'hero_name': personal['name'],
        'hero_title': personal['title'],
        'hero_location': personal['location'],
        'linkedin_url': shared_data['personal']['linkedin'],
        'linkedin_text': "LinkedIn",
        'github_url': shared_data['personal']['github'],
        'github_text': "GitHub",
        'email': shared_data['personal']['email'],
        'email_text': lang_data['hero_email'],
        'pdf_url': f"../data/CV-rafael-guzman-{lang_code}.pdf",
        'download_pdf_text': lang_data['download_pdf'],
        'about_title': lang_data['about_title'],
        'about_summary': lang_specific['summary'],
        'skills_title': lang_data['skills_title'],
        'skill_categories': skill_categories,
        'experiences': experiences,
        'experience_title': lang_data['experience_title'],
        'educations': educations,
        'education_title': lang_data['education_title'],
        'certifications': certifications,
        'certifications_title': lang_data['certifications_title'],
        'contact_title': lang_data['contact_title'],
        'contact_intro': lang_data['contact_lead'],
        'contact_location': personal['location'],
        'website_url': shared_data['personal']['website'],
        'footer_name': personal['name']
    }

    return context


def main():
    """Main function to generate static pages"""
    print("🚀 Starting static CV generation...")

    # Define paths
    data_dir = Path("data")
    en_dir = Path("en")
    es_dir = Path("es")
    templates_dir = Path("templates")

    # Create language directories
    en_dir.mkdir(parents=True, exist_ok=True)
    es_dir.mkdir(parents=True, exist_ok=True)

    # Load data
    cv_data = load_json_data(data_dir / "cv-data.json")
    translations = load_json_data(data_dir / "translations.json")

    # Set up Jinja2 environment with template directory
    env = Environment(loader=FileSystemLoader(templates_dir))

    # Get the main template
    template = env.get_template("main.j2")

    # Generate pages for each language
    for lang_code in ['en', 'es']:
        print(f"Generating {lang_code.upper()} version...")

        # Prepare context
        context = prepare_context(cv_data, translations, lang_code)

        # Render template
        html_output = template.render(**context)

        # Determine output directory based on language
        output_dir = en_dir if lang_code == 'en' else es_dir

        # Write output
        output_file = output_dir / "index.html"
        with open(output_file, 'w', encoding='utf-8') as f:
            f.write(html_output)

        print(f"✅ {lang_code.upper()} version generated: {output_file}")

    print("\n🎉 Static CV generation complete!")
    print("📁 You can now serve the static versions from the root directory")
    print("   - English: en/index.html")
    print("   - Spanish: es/index.html")


if __name__ == "__main__":
    main()
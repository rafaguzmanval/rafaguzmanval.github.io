// CV Data - Edit this file to customize your resume
// This is the template data file. Replace with your actual information.
// Organized with shared data and language-specific translations.

const cvData = {
  // Shared data across all languages (links, URLs, technical data)
  shared: {
    personal: {
      name: "Rafael Guzmán",
      email: "rafagval@gmail.com",
      phone: "+34 609 766 130",
      linkedin: "https://www.linkedin.com/in/rafael-g-710111259/",
      github: "https://github.com/rafaguzmanval",
      website: "https://rafaguzmanval.github.io",
      profileImage: "data/avatar.jpg"
    },
    skills: [
      // ================= SYSTEMS =================
      { name: "Linux", level: 90, category: "systems" },
      { name: "Bash", level: 90, category: "systems" },
      { name: "Windows", level: 70, category: "systems" },
      { name: "MacOS", level: 60, category: "systems" },

      // ================= INFRASTRUCTURE =================
      { name: "Docker", level: 95, category: "infrastructure" },
      { name: "Jenkins", level: 82, category: "infrastructure" },
      { name: "Ansible", level: 81, category: "infrastructure" },
      { name: "Terraform", level: 60, category: "infrastructure" },
      { name: "Kubernetes", level: 50, category: "infrastructure" },
      { name: "AWS", level: 20, category: "infrastructure" },
      { name: "Monitoring (Prometheus/Grafana)", level: 20, category: "infrastructure" },
      { name: "Azure", level: 10, category: "infrastructure" },


      // ================= PROGRAMMING LANGUAGES =================
      { name: "C#", level: 90, category: "prog_lang" },
      { name: "Unity", level: 90, category: "prog_lang" },
      { name: "C++", level: 90, category: "prog_lang" },
      { name: "JavaScript", level: 80, category: "prog_lang" },
      { name: "TypeScript", level: 80, category: "prog_lang" },
      { name: "HTML/CSS", level: 80, category: "prog_lang" },
      { name: "Python", level: 60, category: "prog_lang" },
      { name: "Java", level: 60, category: "prog_lang" },
      { name: "Groovy", level: 30, category: "prog_lang" },

      // ================= VERSION CONTROL =================
      { name: "Git", level: 90, category: "version_control" },
      { name: "GitHub", level: 90, category: "version_control" },
      { name: "Bitbucket", level: 60, category: "version_control" }
    ]
    ,
    projects: [
      {
        technologies: ["Terraform", "Ansible", "AWS", "Docker"],
        github: "https://github.com/rafaelguzman/cloud-migration-toolkit",
        demo: "https://demo.cloudmigration.dev"
      }
    ],
    certifications: [
      {
        name: "Cambridge English C1",
        issuer: "Cambridge Assessment English",
        date: "2025",
        credentialId: "D2133228",
        logo: "https://www.cam.ac.uk/sites/default/files/secondary-logo-stacked.png"
      }
    ]
  },

  // English language data
  en: {
    personal: {
      title: "DevOps Engineer",
      location: "Granada, Spain"
    },
    summary: "DevOps Engineer with experience in CI/CD pipeline development, cloud infrastructure management, and mobile application deployment. Computer Engineering graduate from the University of Granada, passionate about process automation and operational efficiency improvement.",
    experience: [
      {
        company: "Metaenlace",
        position: "DevOps Engineer",
        duration: "Nov 2023 - Jul 2025",
        location: "Granada, Spain",
        clients: ["Spanish City Councils", "AR/VR Development Company"],
        technologiesLearned: ["Jenkins", "Fastlane", "Google Play", "Apple App Store", "Meta Quest 3", "Unity", "C#"],
        logo: "https://arvision.es/wp-content/uploads/2024/01/logoar.webp",
        description: [
          "Built continuous deployment pipelines for Google Play and Apple App Store using Jenkins and Fastlane",
          "Reduced deployment time for over 100 apps from 1 month to 1 day",
          "Collaborated with development team to fix bugs and optimize mobile application performance",
          "Developed a virtual reality application for Meta Quest 3 glasses"
        ]
      },
      {
        company: "Metaenlace",
        position: "DevOps Engineer",
        duration: "Nov 2025 - Present",
        location: "Remote",
        clients: ["Public Administration", "Banking Entities", "Spanish Companies"],
        technologiesLearned: ["Kubernetes", "Helm", "Terraform", "Jenkins", "Ansible", "Nexus", "Keycloak", "MLOps", "LLM"],
        logo: "https://metaenlace.com/wp-content/uploads/2020/03/logo-metaenlace.png",
        description: [
          "Completed a one-month internal training to learn Kubernetes, Terraform, Ansible and Nexus",
          "Implemented Jenkins pipelines for Angular and Spring Boot applications, uploading artifacts to Nexus and Azure",
          "Learned to use Keycloak for SSO integration with digital certificate (FNMT) in Murcia Development Institute web applications",
          "MLOps for AI project translating legacy source code to modern languages using Large Language Models (LLM)"
        ]
      }
    ],
    education: [
      {
        degree: "Bachelor's Degree in Computer Engineering",
        school: "University of Granada",
        duration: "2018 - 2023",
        location: "Granada, Spain",
        gpa: "7.5/10.0",
        logo: "https://www.ugr.es/sites/default/files/ugr-logo.png"
      }
    ],
    projects: [
      {
        name: "Cloud Migration Toolkit",
        description: "Open-source toolkit for automating cloud migrations with Terraform and Ansible"
      }
    ]
  },

  // Spanish language data
  es: {
    personal: {
      title: "Ingeniero de Software DevOps",
      location: "Granada, España"
    },
    summary: "Ingeniero DevOps con experiencia en desarrollo de pipelines CI/CD, gestión de infraestructuras cloud y despliegue de aplicaciones móviles. Graduado en Ingeniería Informática por la Universidad de Granada, apasionado por la automatización de procesos y la mejora de la eficiencia operativa.",
    experience: [
      {
        company: "Metaenlace",
        position: "Ingeniero DevOps",
        duration: "Nov 2025 - Presente",
        location: "Remote",
        clients: ["Public Administration", "Banking Entities", "Spanish Companies"],
        technologiesLearned: ["Kubernetes", "Helm", "Terraform", "Jenkins", "Ansible", "Nexus", "Keycloak", "MLOps", "LLM"],
        logo: "https://metaenlace.com/wp-content/uploads/2020/03/logo-metaenlace.png",
        description: [
          "Completé un entrenamiento interno de un mes para aprender Kubernetes, Terraform, Ansible y Nexus",
          "Implementé pipelines de Jenkins para aplicaciones Angular y Spring Boot, subiendo artefactos a Nexus y Azure",
          "Aprendí a usar Keycloak para integración SSO con certificado digital (FNMT) en aplicaciones web del Instituto de Desarrollo de Murcia",
          "MLOps para proyecto de IA traduciendo código fuente legacy a lenguajes modernos usando Modelos de Lenguaje Grande (LLM)"
        ]
      },
      {
        company: "AR Vision",
        position: "Ingeniero DevOps",
        duration: "Nov 2023 - Jul 2025",
        location: "Granada, España",
        clients: ["Spanish City Councils", "AR/VR Development Company"],
        technologiesLearned: ["Jenkins", "Fastlane", "Google Play", "Apple App Store", "Meta Quest 3", "Unity", "C#"],
        description: [
          "Construí pipelines de despliegue continuo para Google Play y Apple App Store usando Jenkins y Fastlane",
          "Reduje el tiempo de despliegue para más de 100 aplicaciones de 1 mes a 1 día",
          "Colaboré con el equipo de desarrollo para corregir bugs y optimizar el rendimiento de aplicaciones móviles",
          "Desarrollé una aplicación de realidad virtual para gafas Meta Quest 3"
        ]
      }
    ],
    education: [
      {
        degree: "Grado en Ingeniería Informática",
        school: "Universidad de Granada",
        duration: "2018 - 2023",
        location: "Granada, España",
        gpa: "7.5/10.0",
        logo: "https://www.ugr.es/sites/default/files/ugr-logo.png"
      }
     ],
     projects: [
       {
         name: "Kit de Herramientas de Migración a la Nube",
         description: "Herramientas de código abierto para automatizar migraciones a la nube con Terraform y Ansible"
       }
     ]
   }
 };

// Make it available globally for script tag loading
if (typeof window !== 'undefined') {
    window.cvData = cvData;
}
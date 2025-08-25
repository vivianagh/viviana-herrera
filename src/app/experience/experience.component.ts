import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  technologies: string[];
  link?: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent {
  experiences: ExperienceItem[] = [
    {
      title: 'Software Engineer',
      company: 'SancorSalud',
      location: 'Argentina · Remote',
      period: 'Apr 2023 – Dec 2024',
      description: [
        'Built a REST API that connects with Argentina\'s federal tax system, turning what used to be a manual nightmare into an automated process. The result? 80% reduction in onboarding time. Working with legacy SOAP endpoints taught me a lot about making old and new systems play nice together.',
        'Maintained member-lifecycle systems and reporting tools.',
      ],
      technologies: ['Java EE 7', 'Spring Boot (Java 11)', 'Angular (TS)', 'JBoss', 'SQL Server', 'Microservices'],
      link: 'https://www.sancorsalud.com.ar'
    },
    {
      title: 'Software Engineer',
      company: 'Mendel',
      location: 'Mexico · Remote',
      period: 'Jan 2022 – Oct 2022',
      description: [
        'Created a service that takes XML invoices and automatically extracts and categorizes tax data. Before this, someone had to do it all manually. The system now processes invoices 70% faster and gives teams insights they never had before. Plus, it keeps everything audit-ready, which makes compliance teams very happy.',
      ],
      technologies: ['Java 16', 'Spring Boot', 'MySQL', 'Docker', 'Kubernetes', 'Jenkins'],
      link: 'https://www.mendel.com'
    },
    {
      title: 'Software Engineer',
      company: 'Naranja X',
      location: 'Argentina',
      period: 'Jun 2021 – Dec 2021',
      description: [
        'Maintained APIs for a digital banking platform, working directly with Visa, MasterCard, and banking clearing systems. I migrated some legacy Camunda processes to microservices and reduced processing time by 35%. Sometimes the biggest impact comes from making existing systems work better.',
      ],
      technologies: ['Java 11', 'Spring Boot', 'AWS (SNS, SQS, Secrets Manager)', 'Docker', 'Kubernetes', 'WebFlux'],
      link: 'https://www.naranjax.com'
    },
    {
      title: 'Software Engineer',
      company: 'Stacktrace',
      location: 'Argentina',
      period: 'May 2019 – May 2021',
      description: [
        'Helped digitize government services for San Luis, Argentina, building systems that let citizens access medical records and school grades through a digital ID card system with secure signatures.\n' +
        'I worked on healthcare modules - patient records, medical appointments, lab results - and education systems where students could view their grades online. The challenge was handling sensitive government data in a monolithic architecture while doing both frontend and backend development, plus migrating legacy data into the new systems.',
      ],
      technologies: ['Java 8', 'Spring Boot', 'MySQL', 'Angular'],
      link: ''
    },
    {
      title: 'Software Engineer',
      company: 'MercadoLibre',
      location: 'Argentina',
      period: 'May 2016 – Apr 2019',
      description: [
        'Worked on the money transfer systems for one of Latin America\'s biggest e-commerce platforms. I integrated with Citi Bank\'s API for account validation, automated financial reconciliation with SAP, and built monitoring dashboards across 5 countries. The technical challenge was huge - these systems handle millions in transactions daily.',
      ],
      technologies: ['Java 8', 'Groovy', 'AWS (SNS, SQS)', 'Redis', 'Jenkins', 'New Relic', 'Datadog'],
      link: 'https://www.mercadolibre.com'
    }
  ];

}

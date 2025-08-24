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
        'Built tools for processing employee purchases, managing XML invoices, tracking budget approvals, and generating admin reports.',
        'Developed an XML-invoice processing service for tax data extraction and categorization: −70% manual processing time, better client transparency, and audit-ready storage.',
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
        'Maintained APIs for bank-account creation and money transfers; integrated Visa, MasterCard and Mambu.',
        'Identified bottlenecks with Datadog, migrated Camunda services to Java microservices, and integrated AWS SNS/SQS, reducing processing time by 35%.',
      ],
      technologies: ['Java 11', 'Spring Boot', 'AWS (SNS, SQS, Secrets Manager)', 'Docker', 'Kubernetes'],
      link: 'https://www.naranjax.com'
    },
    {
      title: 'Software Engineer',
      company: 'Stacktrace',
      location: 'Argentina',
      period: 'May 2019 – May 2021',
      description: [
        'Developed government web systems (healthcare, civil registry, education) for San Luis, modernizing administrative processes.',
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
        'Maintained APIs for money transfers, reporting and account history; ensured availability and correctness.',
        'Integrated Citi Bank API for bank-account validation (SSL) to improve accuracy and security.',
        'Automated SAP fee matching for each transaction; improved accounting team efficiency.',
        'Created Datadog dashboards by site (AR, BR, CL, CO, PE) for key financial metrics; supported fund-management decisions.',
        'Migrated stack from Grails to Java 8, improving scalability.',
      ],
      technologies: ['Java 8', 'Groovy', 'AWS (SNS, SQS)', 'Redis', 'Jenkins', 'New Relic', 'Datadog'],
      link: 'https://www.mercadolibre.com'
    }
  ];

}

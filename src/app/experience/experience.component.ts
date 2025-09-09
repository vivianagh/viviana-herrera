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
        'Designed and developed a REST API integrating with Argentina\'s federal tax authority (ARCA) SOAP services, automating the member registration process and reducing onboarding time by 80%. The implementation bridged legacy government systems with modern microservices architecture.',
        'Maintained healthcare member lifecycle management systems and developed reporting tools for administrative operations.',
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
        'Developed a service to process Mexican CFDI (digital tax receipts) in XML format, automating tax data extraction and categorization for accurate database storage. This solution reduced manual processing time by 70% while providing previously unavailable financial insights and ensuring regulatory compliance for audit purposes.',
        'Built internal tools for employee purchase validation, budget approval workflows, and administrative reporting.',
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
        'Maintained critical APIs for digital banking operations, including account creation and money transfers, ensuring seamless integration with Visa, MasterCard, and Mambu banking systems.',
        'Identified performance bottlenecks using Datadog monitoring and successfully migrated legacy Camunda workflows to Java microservices with AWS SNS/SQS messaging, achieving a 35% reduction in processing time.',
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
        'Developed web-based government systems for healthcare, civil registry, and education services in San Luis Province, modernizing citizen access to public services through digital identity integration.',
        'Implemented full-stack solutions including patient record management, appointment scheduling, academic grade tracking, and secure digital document handling within a monolithic architecture.',
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
        'Maintained financial APIs supporting money transfer operations across Latin America\'s largest e-commerce platform, handling high-volume daily transactions across five countries.',
        'Developed secure integration with Citi Bank\'s validation services using SSL protocols and automated financial reconciliation processes with SAP systems, eliminating manual accounting tasks.',
        'Created comprehensive Datadog monitoring dashboards for transaction volumes and cross-country financial metrics, enabling data-driven decision making for treasury operations.',
        'Led migration from Grails to Java 8, modernizing the technology stack and improving system scalability.',
      ],
      technologies: ['Java 8', 'Groovy', 'AWS (SNS, SQS)', 'Redis', 'Jenkins', 'New Relic', 'Datadog'],
      link: 'https://www.mercadolibre.com'
    }
  ];

}

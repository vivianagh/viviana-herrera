import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  challenges: string[];
  githubUrl?: string[];
  liveUrl?: string | null;
  status: 'completed' | 'in-progress';
  year: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Weather API',
      description: 'Weather REST API in Java/Spring Boot with provider fallback and clean error handling.',
      longDescription:
          'Migrated the codebase from Java 17 to Java 21 to adopt the latest LTS improvements. Delivered a fault-tolerant weather service that handles provider failures and API rate limits. Integrated Swagger docs, Actuator metrics, and prepared for circuit breakers (Resilience4j). (Java 21 migration available in feature branch).',
      technologies: ['Java 17','Migration to latest Java 21 LTS features', 'Spring Boot 3', 'OpenAPI/Swagger','Spring Boot Actuator', 'Docker', 'JUnit'],
      challenges: ['External API fallback & provider switching', 'Rate limiting & retries', 'Observability with health checks and metrics'],
      githubUrl: 'https://github.com/vivianagh/weather-api/tree/feacture/java21-swagger-actuator',
      liveUrl: null,
      status: 'in-progress',
      year: '2025'
    },
    {
      title: 'Flight App (Kafka + Angular)',
      description: 'Full-stack demo processing real-time flight events via Kafka backend and Angular frontend. Illustrates event-driven design patterns with producers/consumers, topics, and schema evolution.',
      longDescription:
          'Event-driven backend publishes/consumes flight updates (producers/consumers, topic design, DLQ). Frontend shows live streams and status changes. Designed to illustrate EDA patterns and backpressure handling.',
      technologies: ['Apache Kafka', 'Spring Boot', 'Angular', 'TypeScript', 'Docker'],
      challenges: ['Event schema/versioning', 'Ordering vs. throughput', 'Real-time updates from backend to frontend'],
      githubUrl: [
                'https://github.com/vivianagh/flightapp',     
                'https://github.com/vivianagh/flight-tracker-ui'  
            ],
      liveUrl: null,
      status: 'in-progress',
      year: '2025'
    },
    {
      title: 'LLM Experiments with Nebius',
      description: 'Hands-on LLM experiments: prompting, RAG and agents using Nebius.',
      longDescription:
          'Prototyping retrieval-augmented generation and lightweight agents. Focus on evaluation, context windows and latency/cost trade-offs. README pending; code structure prepared for iterative experiments.',
      technologies: ['Python', 'LangChain', 'Nebius', 'LLM tooling'],
      challenges: ['Prompt quality & grounding', 'Context management', 'Evaluation/guardrails'],
      githubUrl: 'https://github.com/vivianagh/deep-research-legal-ai',
      liveUrl: null,
      status: 'in-progress',
      year: '2025'
    },
    {
      title: 'AI Agent Learning — Google ADK (Labs)',
      description: 'Implementing labs from Google’s ADK to build task-focused AI agents.',
      longDescription:
          'Step-by-step labs exploring tools, planning and orchestration patterns for agents. Emphasis on reproducible setups and documenting trade-offs. README pending; tracking progress in the labs folder.',
      technologies: ['Python', 'Google ADK', 'Agent Orchestration'],
      challenges: ['Tool orchestration', 'State & memory design', 'Evaluation of agent loops'],
      githubUrl: 'https://github.com/vivianagh/ai-agent-learning-adk/tree/main/labs',
      liveUrl: null,
      status: 'in-progress',
      year: '2025'
    }
  ];

}

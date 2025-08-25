import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  challenges: string[];
  githubUrl?: string | null;
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
          'Provides current conditions and forecast via a clean REST interface. Focus on reliability and observability. Next: add circuit breakers (Resilience4j) and improve error taxonomy/HTTP mapping for external failures.',
      technologies: ['Java 17', 'Spring Boot 3', 'OpenAPI/Swagger', 'Docker', 'JUnit'],
      challenges: ['API rate limits', 'External API failures', 'Caching & retries'],
      githubUrl: 'https://github.com/vivianagh/weather-api',
      liveUrl: null,
      status: 'in-progress',
      year: '2025'
    },
    {
      title: 'Flight App (Kafka + Angular)',
      description: 'Full-stack demo with real-time flight events over Kafka and an Angular UI.',
      longDescription:
          'Event-driven backend publishes/consumes flight updates (producers/consumers, topic design, DLQ). Frontend shows live streams and status changes. Designed to illustrate EDA patterns and backpressure handling.',
      technologies: ['Apache Kafka', 'Spring Boot', 'Angular', 'TypeScript', 'Docker'],
      challenges: ['Event schema/versioning', 'Ordering vs. throughput', 'Real-time UI updates'],
      githubUrl: 'https://github.com/vivianagh/flightapp',
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
      technologies: ['Python', 'Google ADK', 'Agents'],
      challenges: ['Tool orchestration', 'State & memory design', 'Evaluation of agent loops'],
      githubUrl: 'https://github.com/vivianagh/ai-agent-learning-adk/tree/main/labs',
      liveUrl: null,
      status: 'in-progress',
      year: '2025'
    }
  ];

}

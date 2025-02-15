import { AgentConfig } from "@/app/types";

const recruiterInfo: AgentConfig = {
  name: "recruiterInfo",
  publicDescription: "Provides verified recruiters with candidate information and handles recruiter inquiries.",
  instructions: `
# Personality and Tone
Be friendly and conversational while maintaining professionalism. Keep responses brief and to the point.

## Identity
You're a helpful talent acquisition coordinator who makes recruiting conversations feel natural and efficient.

## Task
Help recruiters get the candidate information they need while protecting candidate privacy. Keep things moving smoothly.

## Tone
- Friendly and professional
- Clear and concise
- Natural conversation flow
- Get to the point quickly

# Key Guidelines
- Share only approved information
- Keep candidate details confidential
- Be direct about what you can/cannot share
- Keep responses brief and relevant

# Steps
1. Greet and confirm what information is needed
2. Provide relevant details concisely
3. Offer next steps if needed

# Shareable Information
- Current role/title
- Experience level
- Education
- Skills/certifications
- Availability
- Salary expectations (if approved)
- General location

# Never Share
- Exact current salary
- Contact information
- Current employer details
- Personal references
- Address
- Demographics
`,
  tools: [
    {
      type: "function",
      name: "lookupCandidateInfo",
      description: "Retrieves approved candidate information for verified recruiters",
      parameters: {
        type: "object",
        properties: {
          candidateId: {
            type: "string",
            description: "Candidate identifier"
          },
          recruiterId: {
            type: "string",
            description: "Verified recruiter's ID"
          },
          requestedFields: {
            type: "array",
            items: {
              type: "string",
              enum: [
                "role",
                "experience",
                "education",
                "skills",
                "availability",
                "salary_range",
                "location",
                "resume_summary",
                "work_history",
                "projects",
                "certifications"
              ]
            },
            description: "List of information fields being requested"
          }
        },
        required: ["candidateId", "recruiterId", "requestedFields"]
      }
    },
    {
      type: "function",
      name: "checkVisaStatus",
      description: "Checks if a candidate requires visa sponsorship",
      parameters: {
        type: "object",
        properties: {
          candidateId: {
            type: "string",
            description: "Candidate identifier"
          },
          recruiterId: {
            type: "string",
            description: "Verified recruiter's ID"
          }
        },
        required: ["candidateId", "recruiterId"]
      }
    },
    {
      type: "function",
      name: "logRecruiterRequest",
      description: "Logs the recruiter's information request for compliance",
      parameters: {
        type: "object",
        properties: {
          recruiterId: {
            type: "string",
            description: "Verified recruiter's ID"
          },
          candidateId: {
            type: "string",
            description: "Candidate identifier"
          },
          requestType: {
            type: "string",
            description: "Type of information requested"
          }
        },
        required: ["recruiterId", "candidateId", "requestType"]
      }
    }
  ],
  toolLogic: {
    lookupCandidateInfo: ({ candidateId, recruiterId, requestedFields }) => {
      console.log(`[toolLogic] Looking up candidate ${candidateId} for recruiter ${recruiterId}`);
      // Mock candidate data - in real implementation, this would query a database
      return {
        "role": "Senior Backend Developer",
        "experience": "7+ years",
        "education": "Bachelor of Computer Science",
        "skills": ["Java", "Spring Boot", "PostgreSQL", "Kubernetes", "AWS", "Microservices"],
        "availability": "2 weeks notice",
        "salary_range": "Open to discussion",
        "location": "Austin, TX (Hybrid)",
        "resume_summary": "Senior backend developer specializing in high-scale distributed systems and cloud architecture. Strong experience in financial technology and payment processing systems.",
        "work_history": [
            {
                "title": "Senior Backend Developer",
                "company": "Digital Payment Solutions Inc",
                "duration": "Jan 2020 – Present",
                "highlights": [
                    "Led development of a payment processing system handling $2B in annual transactions",
                    "Architected and implemented microservices infrastructure supporting 1M+ daily users",
                    "Reduced system latency by 40% through optimization of database queries and caching",
                    "Mentored junior developers and established coding standards for the backend team"
                ]
            },
            {
                "title": "Software Engineer",
                "company": "CloudTech Systems",
                "duration": "Mar 2017 – Dec 2019",
                "highlights": [
                    "Developed cloud-native applications using Spring Boot and AWS services",
                    "Implemented CI/CD pipelines reducing deployment time by 60%",
                    "Created automated testing framework improving code coverage to 85%"
                ]
            },
            {
                "title": "Junior Developer",
                "company": "TechStart Solutions",
                "duration": "Jun 2016 – Feb 2017",
                "highlights": [
                    "Developed and maintained REST APIs for customer-facing applications",
                    "Collaborated with frontend team to integrate new features",
                    "Participated in agile development processes and sprint planning"
                ]
            }
        ],
        "projects": [
            {
                "name": "Distributed Payment Gateway",
                "description": "High-availability payment processing system with real-time fraud detection",
                "technologies": ["Java", "Spring Boot", "Kafka", "Redis", "PostgreSQL"]
            },
            {
                "name": "Cloud Migration Framework",
                "description": "Tool for automated migration of legacy systems to cloud infrastructure",
                "technologies": ["Python", "AWS", "Docker", "Terraform"]
            },
            {
                "name": "Performance Monitoring Dashboard",
                "description": "Real-time system monitoring and alerting platform",
                "technologies": ["Grafana", "Prometheus", "ELK Stack"]
            }
        ],
        "certifications": [
            "AWS Solutions Architect Professional",
            "Certified Kubernetes Administrator",
            "Oracle Certified Professional Java SE 11"
        ]
      }
    },
    checkVisaStatus: ({ candidateId, recruiterId }) => {
      console.log(`[toolLogic] Checking visa status for candidate ${candidateId}`);
      // Mock visa status - in real implementation, this would query a database
      return {
        requiresSponsorship: true,
        currentStatus: "H1B",
        timeRemaining: "3 years",
        sponsorshipExpectation: "Current H1B holder, transfer required"
      };
    }
  }
};

export default recruiterInfo; 
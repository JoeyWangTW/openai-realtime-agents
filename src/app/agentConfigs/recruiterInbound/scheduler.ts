import { AgentConfig } from "@/app/types";

const scheduler: AgentConfig = {
  name: "scheduler",
  publicDescription: "Handles scheduling follow-up meetings with recruiters and candidates.",
  instructions: `
# Personality and Tone
Be efficient and helpful while coordinating schedules. Keep the process smooth and straightforward.

## Identity
You're Joey's scheduling assistant, focused on making the meeting setup process quick and painless.

## Task
Help coordinate follow-up meetings between recruiters and Joey, handling time zones, availability, and meeting preferences.

## Tone
- Friendly and efficient
- Solution-oriented
- Clear about availability
- Proactive about scheduling conflicts

# Key Guidelines
- Always confirm time zones
- Double-check all scheduling details
- Be clear about meeting duration
- Verify meeting format (video/phone)
- Confirm all details before finalizing

# Steps
1. Get preferred meeting times (at least 2-3 options)
2. Check availability
3. Confirm meeting format
4. Set up calendar invite
5. Share confirmation details

# Required Information
- Preferred dates/times
- Time zone
- Meeting duration (default 45 mins)
- Meeting format
- Any specific discussion topics

# Meeting Types
- Initial screening
- Technical discussion
- Team interview
- Final round
- Follow-up discussion

# Available Time Slots
- Monday to Friday
- 9 AM to 5 PM Pacific
- 45-minute default duration
- Buffer required between meetings
`,
  tools: [
    {
      type: "function",
      name: "checkAvailability",
      description: "Checks calendar availability for specified time slots",
      parameters: {
        type: "object",
        properties: {
          dates: {
            type: "array",
            items: {
              type: "string",
              description: "Date and time in ISO format"
            },
            description: "List of potential meeting times"
          },
          duration: {
            type: "number",
            description: "Meeting duration in minutes"
          },
          timeZone: {
            type: "string",
            description: "Recruiter's time zone"
          }
        },
        required: ["dates", "duration", "timeZone"]
      }
    },
    {
      type: "function",
      name: "scheduleMeeting",
      description: "Creates a calendar invite for the meeting",
      parameters: {
        type: "object",
        properties: {
          dateTime: {
            type: "string",
            description: "Meeting start time in ISO format"
          },
          duration: {
            type: "number",
            description: "Meeting duration in minutes"
          },
          format: {
            type: "string",
            enum: ["video", "phone"],
            description: "Meeting format"
          },
          recruiterDetails: {
            type: "object",
            properties: {
              name: {
                type: "string",
                description: "Recruiter's name"
              },
              company: {
                type: "string",
                description: "Company name"
              },
              email: {
                type: "string",
                description: "Recruiter's email"
              }
            },
            required: ["name", "company", "email"]
          },
          meetingType: {
            type: "string",
            enum: [
              "initial_screening",
              "technical_discussion",
              "team_interview",
              "final_round",
              "follow_up"
            ],
            description: "Type of meeting"
          },
          notes: {
            type: "string",
            description: "Additional meeting notes or agenda"
          }
        },
        required: [
          "dateTime",
          "duration",
          "format",
          "recruiterDetails",
          "meetingType"
        ]
      }
    }
  ],
  toolLogic: {
    checkAvailability: ({ dates, duration, timeZone }) => {
      console.log(`[toolLogic] Checking availability for dates: ${dates.join(", ")}`);
      // Mock availability check - in real implementation, this would query a calendar
      return {
        availableSlots: dates.map((date: string) => ({
          dateTime: date,
          isAvailable: Math.random() > 0.3, // 70% chance of availability
          conflictReason: Math.random() > 0.3 ? null : "Existing meeting"
        }))
      };
    },
    scheduleMeeting: ({ dateTime, duration, format, recruiterDetails, meetingType, notes }) => {
      console.log(`[toolLogic] Scheduling ${meetingType} meeting with ${recruiterDetails.name}`);
      // Mock meeting scheduling - in real implementation, this would create a calendar event
      return {
        meetingId: "MTG-" + Math.random().toString(36).substr(2, 9),
        conferenceLink: format === "video" ? "https://meet.example.com/abc123" : null,
        calendarInviteSent: true,
        scheduledDateTime: dateTime,
        timeZone: "America/Los_Angeles",
        attendees: [
          {
            name: "Joey",
            email: "joey@example.com"
          },
          recruiterDetails
        ]
      };
    }
  }
};

export default scheduler; 
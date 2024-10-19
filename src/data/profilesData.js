// src/data/profilesData.js
// Import and register the necessary components from Chart.js
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Register the components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const profiles = [
  {
    id: 1,
    name: 'Alice Johnson',
    role: 'Software Engineer',
    department: 'Engineering',
    performanceScore: 85,
    surveyResponses: {
      engagement: 4.2,
      leadership: 3.8,
      workLifeBlend: 4.0,
      development: 3.6,
      recognition: 4.4
    },
    feedbackComments: [
      "Alice has shown great growth in technical skills but needs to work on documentation.",
      "She is a positive team player but could communicate more effectively.",
      "Reminder: Provide Alice with feedback on recent code review performance.",
      "Focus Area: Alice can benefit from a mentorship program on technical writing skills.",
      "Apply: Use insights from the recent employee survey to offer targeted resources for Alice's growth."
    ],
    trendData: [3.8, 4.0, 4.1, 4.2] // Quarterly data for engagement score
  },
  {
    id: 2,
    name: 'Bob Smith',
    role: 'Product Manager',
    department: 'Product',
    performanceScore: 78,
    surveyResponses: {
      engagement: 3.8,
      leadership: 4.1,
      workLifeBlend: 3.5,
      development: 3.9,
      recognition: 4.0
    },
    feedbackComments: [
      "Bob has been instrumental in driving product improvements.",
      "He needs to work on better managing team expectations.",
      "Reminder: Share recent product strategy updates with Bob for better alignment.",
      "Focus Area: Encourage Bob to take part in team management workshops.",
      "Apply: Leverage survey insights to improve communication flow in product management."
    ],
    trendData: [3.6, 3.7, 3.8, 3.8]
  },
  {
    id: 3,
    name: 'Carol White',
    role: 'UX Designer',
    department: 'Design',
    performanceScore: 88,
    surveyResponses: {
      engagement: 4.5,
      leadership: 4.2,
      workLifeBlend: 4.1,
      development: 4.3,
      recognition: 4.6
    },
    feedbackComments: [
      "Carol consistently delivers high-quality designs.",
      "She could improve by collaborating more with engineering.",
      "Reminder: Schedule a cross-team feedback session with engineering.",
      "Focus Area: Carol could benefit from leadership training to enhance cross-functional collaboration.",
      "Apply: Use feedback from the recent design review to enhance team-based projects."
    ],
    trendData: [4.2, 4.3, 4.4, 4.5]
  },
  {
    id: 4,
    name: 'David Lee',
    role: 'QA Engineer',
    department: 'Quality Assurance',
    performanceScore: 80,
    surveyResponses: {
      engagement: 3.9,
      leadership: 3.7,
      workLifeBlend: 4.0,
      development: 3.8,
      recognition: 4.1
    },
    feedbackComments: [
      "David is thorough in his testing and ensures quality.",
      "He needs to work on time management to meet tight deadlines.",
      "Reminder: Provide David with feedback on recent test cycle performance.",
      "Focus Area: David could benefit from attending workshops on agile testing methods.",
      "Apply: Utilize insights from the QA team survey to streamline workflows."
    ],
    trendData: [3.7, 3.8, 3.9, 3.9]
  },
  {
    id: 5,
    name: 'Emily Davis',
    role: 'HR Specialist',
    department: 'Human Resources',
    performanceScore: 82,
    surveyResponses: {
      engagement: 4.1,
      leadership: 4.0,
      workLifeBlend: 4.2,
      development: 4.0,
      recognition: 4.3
    },
    feedbackComments: [
      "Emily has been very supportive to all employees.",
      "She could work on improving her communication speed.",
      "Reminder: Schedule an HR process improvement meeting with Emily.",
      "Focus Area: Emily could benefit from training in effective HR communication strategies.",
      "Apply: Use survey data to identify new areas of support for employee engagement initiatives."
    ],
    trendData: [4.0, 4.1, 4.1, 4.1]
  },
  {
    id: 6,
    name: 'Frank Miller',
    role: 'DevOps Engineer',
    department: 'Engineering',
    performanceScore: 84,
    surveyResponses: {
      engagement: 4.3,
      leadership: 3.9,
      workLifeBlend: 4.1,
      development: 4.2,
      recognition: 4.0
    },
    feedbackComments: [
      "Frank is proactive in resolving infrastructure issues.",
      "He should focus on documenting processes more clearly.",
      "Reminder: Encourage Frank to document recent infrastructure changes.",
      "Focus Area: Provide training sessions for Frank on best practices in documentation.",
      "Apply: Leverage survey feedback to prioritize DevOps automation improvements."
    ],
    trendData: [4.1, 4.2, 4.2, 4.3]
  },
  {
    id: 7,
    name: 'Grace Kim',
    role: 'Marketing Specialist',
    department: 'Marketing',
    performanceScore: 79,
    surveyResponses: {
      engagement: 3.7,
      leadership: 4.0,
      workLifeBlend: 3.8,
      development: 3.9,
      recognition: 3.7
    },
    feedbackComments: [
      "Grace has been creative in her campaigns.",
      "She needs to work on better aligning with sales initiatives.",
      "Reminder: Schedule a cross-team meeting between marketing and sales for alignment.",
      "Focus Area: Grace could benefit from training in integrated marketing strategies.",
      "Apply: Use insights from recent sales data to refine marketing focus areas."
    ],
    trendData: [3.5, 3.6, 3.7, 3.7]
  },
  {
    id: 8,
    name: 'Henry Adams',
    role: 'Data Analyst',
    department: 'Data Science',
    performanceScore: 86,
    surveyResponses: {
      engagement: 4.4,
      leadership: 4.0,
      workLifeBlend: 4.3,
      development: 4.1,
      recognition: 4.2
    },
    feedbackComments: [
      "Henry provides insightful data analysis.",
      "He could improve by presenting his findings more clearly.",
      "Reminder: Encourage Henry to present data insights during the next team meeting.",
      "Focus Area: Provide Henry with opportunities to attend workshops on data storytelling.",
      "Apply: Use survey feedback to enhance Henry's communication skills in presenting data."
    ],
    trendData: [4.0, 4.2, 4.3, 4.4]
  },
  {
    id: 9,
    name: 'Isabella Brown',
    role: 'Content Writer',
    department: 'Content',
    performanceScore: 81,
    surveyResponses: {
      engagement: 4.0,
      leadership: 3.9,
      workLifeBlend: 4.1,
      development: 4.0,
      recognition: 3.8
    },
    feedbackComments: [
      "Isabella writes compelling content.",
      "She should work on aligning content with SEO strategies.",
      "Reminder: Schedule an SEO training session for Isabella.",
      "Focus Area: Provide Isabella with opportunities to collaborate with the SEO team.",
      "Apply: Use survey insights to identify key content improvement areas."
    ],
    trendData: [3.8, 3.9, 4.0, 4.0]
  },
  {
    id: 10,
    name: 'Jack Wilson',
    role: 'Sales Executive',
    department: 'Sales',
    performanceScore: 77,
    surveyResponses: {
      engagement: 3.6,
      leadership: 3.8,
      workLifeBlend: 3.7,
      development: 3.5,
      recognition: 3.9
    },
    feedbackComments: [
      "Jack is dedicated to achieving sales targets.",
      "He could improve by focusing on building long-term client relationships.",
      "Reminder: Provide Jack with feedback on recent client interactions.",
      "Focus Area: Encourage Jack to attend relationship-building workshops.",
      "Apply: Leverage insights from the recent sales feedback to develop client strategies."
    ],
    trendData: [3.4, 3.5, 3.6, 3.6]
  }, 
  {
    id: 11,
    name: 'Samantha Turner',
    role: 'Sales Executive',
    department: 'Sales',
    performanceScore: 59,
    surveyResponses: {
      engagement: 1,
      leadership: 1.9,
      workLifeBlend: 2.3,
      development: 2.2,
      recognition: 1.8
    },
    feedbackComments: [
      "Samantha feels overwhelmed by her workload.",
      "Leadership lacks direction, contributing to a lack of engagement.",
      "Reminder: Recognize Samantha's efforts to boost morale.",
      "Focus Area: Samantha requires support for workload management and clearer goals.",
      "Apply: Schedule one-on-one sessions to address Samantha's concerns."
    ],
    trendData: [2.0, 1.5, 1.3, 1.0]
  },
  {
    id: 12,
    name: 'Mark Peterson',
    role: 'Customer Service Specialist',
    department: 'Customer Support',
    performanceScore: 48,
    surveyResponses: {
      engagement: 1.8,
      leadership: 1.5,
      workLifeBlend: 2.0,
      development: 1.6,
      recognition: 2.1
    },
    feedbackComments: [
      "Mark feels unsupported by management.",
      "There is frustration with a lack of career growth opportunities.",
      "Reminder: Discuss possible career development paths with Mark.",
      "Focus Area: Mark needs realistic expectations and increased support.",
      "Apply: Acknowledge Mark's efforts and offer assistance with workload."
    ],
    trendData: [1.6, 1.7, 1.8, 1.8]
  },
  {
    id: 13,
    name: 'Emily Johnson',
    role: 'Marketing Coordinator',
    department: 'Marketing',
    performanceScore: 55,
    surveyResponses: {
      engagement: 2.5,
      leadership: 2.1,
      workLifeBlend: 1.9,
      development: 2.4,
      recognition: 1.9
    },
    feedbackComments: [
      "Emily struggles with work-life balance, affecting her performance.",
      "Lack of recognition from management is causing disengagement.",
      "Reminder: Recognize Emily's recent accomplishments in marketing.",
      "Focus Area: Emily requires clearer direction and goals to increase engagement.",
      "Apply: Explore flexible work options to improve work-life balance."
    ],
    trendData: [2.1, 2.3, 2.4, 2.5]
  }
];

##Pocket Scientist

Pocket Scientist is an AI-powered insights platform designed for performance management. This project leverages AI to generate actionable insights, streamline feedback, and support employee development using technologies like React, Next.js, Express, and MongoDB.

Table of Contents

Introduction

Features

Installation

Running the Project

API Endpoints

Tech Stack

Environment Variables

Contributing

License

Introduction

Pocket Scientist provides a data-driven solution for managing employee performance and growth, incorporating AI-assisted features such as a Writing Assistant and dynamic insights. The platform offers easy-to-understand analytics to enhance team engagement and facilitate constructive feedback.

##Features

Employee Profiles: View and manage detailed profiles of employees with performance metrics.

AI Insights Generation: Generate actionable insights from employee feedback.

Writing Assistant: Get AI-assisted feedback suggestions to improve communication.

Dynamic Engagement Trends: Visualize employee engagement trends over time.

User-Friendly Dashboard: Navigate easily between insights, feedback, and employee profiles.

##Installation

To get started with Pocket Scientist, follow these steps:

Clone the repository:

Install dependencies:

Set up environment variables:
Create a .env file in the root directory and add the necessary environment variables (refer to the Environment Variables section).

Connect to MongoDB:
Make sure MongoDB is running locally or provide a MongoDB connection string for a cloud instance in your .env file.

Running the Project

Development Mode

To start the development server:

The application will be available at http://localhost:3000.

Production Mode

Build the application for production:

Start the production server:

The production server will run at http://localhost:3000.

API Endpoints

/api/insights

GET: Retrieve insights generated from employee feedback.

/api/feedback

POST: Submit feedback for a specific employee.

/api/write-assistant

POST: Get AI-assisted feedback using a prompt.

Tech Stack

Frontend: React, Next.js

Backend: Express.js, Node.js

Database: MongoDB

AI Integration: OpenAI API

Styling: CSS with modern animations, parallax effects

Environment Variables

Create a .env file in the root directory with the following variables:

Contributing

Contributions are welcome! To contribute:

Fork the repository.

Create a new branch (git checkout -b feature-branch).

Commit your changes (git commit -m 'Add new feature').

Push to the branch (git push origin feature-branch).

Open a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.



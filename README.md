# Threads App Backend API Clone using GraphQL

This project is a backend API clone of the Threads app by Facebook, leveraging the power of GraphQL. It's built with a robust tech stack, including NodeJS, ExpressJS, Prisma ORM, and PostgreSQL with Docker Compose.

## Documentation

For detailed information on the API endpoints, authentication, and more, please refer to our [Documentation](https://siddanth-reddy.notion.site/Thread-s-app-backend-clone-graphql-abd8ab2f40054fdfa8c79e9b90cb8e77?pvs=74).

## Tech Stack

- **NodeJS:** A JavaScript runtime for building server-side applications.
- **ExpressJS:** A fast and minimalist web framework for NodeJS.
- **Prisma ORM:** A modern database toolkit for TypeScript and NodeJS.
- **GraphQL:** A query language for APIs and a runtime for executing those queries.
- **PostgreSQL - Docker Compose:** A relational database management system with Docker Compose for easy setup.

## Features Implemented

- **Authentication:**
  - User signup and signin functions.
  - Authorization checks for protected routes.

- **GraphQL Schema:**
  - User model created.
  - Context setup for handling authentication.

## Usage

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/threads-app-backend-clone.git
   cd threads-app-backend-clone
2. **Install Dependencies:**
   ```bash
   npm install
3. **Set Up Environment Variables:**
Create a .env file based on the provided .env.example and add necessary configuration.
4. **Create an build folder**
5. **Run the Application:**
  ```bash
    npm run dev

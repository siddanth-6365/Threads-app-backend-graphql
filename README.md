# Threads App Backend API Clone using GraphQL

- A robust backend API clone of the Threads app by Facebook, built with GraphQL and a modern tech stack.
- Seamlessly handles user authentication, thread creation, media management, and interactions.
- Designed with a focus on scalability, maintainability, and developer experience.

## Documentation

For detailed information on the API endpoints, authentication, and more, please refer to our [Documentation](https://siddanth-reddy.notion.site/Thread-s-app-backend-clone-graphql-abd8ab2f40054fdfa8c79e9b90cb8e77?pvs=74).
## Key Features

- **Authentication:**
   - Secure user signup and signin functionality.
   - Role-based authorization for protected routes.
- **GraphQL API:**
   - Flexible and efficient data fetching with GraphQL.
   - Models for users, threads, comments, media, and likes.
   - Core CRUD operations for managing content.

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

- **GraphQL Schemas:**
  - User model created - (createUser,getCurrentLoginUser,getUserToken)
  - Threads - (createThread)
  - Comments
  - Media
  - Likes

## Getting Started

1. Install dependencies: `npm install`
2. create an new folder build
3. create an copy on env.example and add your own details
4. Start development server: `npm run dev`
5. Access GraphQL Playground: `http://localhost:<port>/graphql`

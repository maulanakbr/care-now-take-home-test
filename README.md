# Care Now Take Home Test

## Project Overview

Care Now Take Home Test is a project designed to manage medical treatment records. This application allows users to submit and track treatment information with relevant descriptions and prescribed medications.

## Features

- Treatment Form for entering patient details.
- Selection of treatment descriptions and prescribed medications.
- Automatic cost calculation based on selected treatments and medications.
- Success and failure states after form submission.

## Tech Stack

- **Frontend:** React, Next.js, TypeScript, Tailwind CSS
- **State Management:** React Hook Form, Redux Toolkit
- **Backend:** NestJS, Prisma
- **Database:** PostgreSQL (via Prisma ORM)
- **API Queries:** RTK Query
- **Date Handling:** Moment.js
- **UI Components:** Radix UI

## Installation and Setup

### Prerequisites

Ensure you have the following installed on your system:

- **Node.js** (version 16 or higher)
- **npm**, **yarn**, or **pnpm** (package managers)
- **PostgreSQL** (for the database)
- **Prisma CLI** (for database management)

### Steps to Install and Run the Project

1. **Clone the Repository\*\*\*\***
   Open your terminal and run:
   ```sh
   git clone https://github.com/yourusername/care-now-take-home.git
   cd care-now-take-home
   ```
2. **Install Dependencies**
   Run the following command to install the required dependencies:

   ```sh
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and configure the necessary environment variables. Refer to `.env.example` for guidance.

4. **Run Database Migrations**
   Use Prisma CLI to apply database migrations:

   ```sh
   npx prisma migrate dev
   ```

5. **Start the Development Server**
   Run the following command to start the development server:

   ```sh
   npm run dev
   ```

6. **Access the Application**
   Open your browser and navigate to `http://localhost:3000` to access the application.

## Additional Scripts

The project includes several useful scripts to streamline development and database management:

### General Scripts

- **Clean Build Artifacts**:
  Cleans the workspace and removes the `dist` directory.
  ```sh
  npm run clean
  ```

### Database Management

- **Generate Prisma Client**:
  Generates the Prisma client based on the schema.
  ```sh
  npm run database:generate
  ```
- **Apply Database Migrations**:
  Applies migrations to the database.
  ```sh
  npm run database:migration
  ```
- **Push Schema to Database**:
  Pushes the Prisma schema to the database without migrations.
  ```sh
  npm run database:push
  ```
- **Reset Database**:
  Resets the database and applies migrations.
  ```sh
  npm run database:reset
  ```
- **Seed Database**:
  Seeds the database with initial data.
  ```sh
  npm run database:seed
  ```
- **Setup Database**:
  Combines schema push and seeding.
  ```sh
  npm run database:setup
  ```

### Development Servers

- **Serve All Applications**:
  Starts both the frontend and backend servers concurrently.
  ```sh
  npm run serve:all
  ```
- **Serve API**:
  Starts the backend server.
  ```sh
  npm run serve:api
  ```
- **Serve Web**:
  Starts the frontend server.
  ```sh
  npm run serve:web
  ```

## Project Structure

The project is organized into multiple applications and libraries located in the `apps` and `libs` directories. Below is an overview of the `apps` directory:

### `apps`

- **`api`**: Contains the backend application built with NestJS. This application handles API requests, database interactions, and business logic.
- **`web`**: Contains the frontend application built with Next.js. This application provides the user interface for interacting with the system.

Each application is self-contained and can be developed and deployed independently.

### How to Navigate

To explore the applications, navigate to the `apps` directory:

```sh
cd /media/maulanakbr/CODE/my-projects/nx/care-now/apps
```

- Use `apps/api` for backend development.
- Use `apps/web` for frontend development.
- Shared logic and utilities are located in the `libs` directory.

# OurGlam

OurGlam is an app designed to connect small businesses with aspiring models who are willing to participate in marketing campaigns in exchange for compensation or merchandise. The app allows businesses to post job opportunities and individuals to browse and apply for these modeling gigs.

## Project Overview

This project is being developed as a learning experience with ReactJS and React Router, aiming to build a functional web application from scratch. The project involves:

- Learning ReactJS: Understanding the fundamentals of React components, state management, and JSX syntax.
- Using React Router: Implementing routing to handle navigation between different pages within the app.
- Building a Multi-Page App: Creating a structured layout with multiple pages, including a homepage, a jobs listing page, individual job detail pages, and a custom 404 error page.
- Data Handling: Learning how to pass data between components and use loaders to fetch job-specific data dynamically.

## Project Structure

- `src/layouts/MainLayout`: The main layout component that wraps around all pages.
- `src/pages/HomePage`: The homepage component.
- `src/pages/JobsPage`: The jobs listing page component where users can see available jobs.
- `src/pages/JobPage`: The job detail page component, utilizing a loader to fetch job-specific data.
- `src/pages/NotFoundPage`: A custom 404 error page component for handling unknown routes.

## Getting Started

To get started with the project, follow these steps:

1. Clone the Repository:
    ```Bash
    git clone https://github.com/your-username/ourglam.git
    ```

2. Install Dependencies:
    ```Bash
    npm install
    ```

3. Run the App:
    ```Bash
    npm start
    ```

## Future Plans

Here are some future plans for the project:

- Expand Functionality: Add more features such as user authentication, job application submission, and user profile management.
- Backend Integration: Connect the app to a backend service to manage data and handle business logic.
- Styling: Improve the UI/UX with modern design principles using CSS or a styling framework like Tailwind CSS.
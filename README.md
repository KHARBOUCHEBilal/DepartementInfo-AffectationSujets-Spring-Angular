# DépartementInfo - AffectationSujets

## Description
This project is a distributed system designed to facilitate the management of scientific activities within the university's computer science department. The system allows the creation, modification, and assignment of research topics to students. It supports real-time operations and leverages Spring Boot for the backend and Angular for the frontend.

## Technologies Used
- **Backend :** Spring Boot (Java)
- **Frontend :** Angular (TypeScript)
- **Database :** MySQL or PostgreSQL
- **Others :** Spring Security, REST APIs, JWT for authentication, WebSocket for real-time updates.

## Features
- Admin panel to manage topics and assign them to students.
- User authentication and authorization using JWT tokens.
- Real-time updates using WebSockets.
- Distributed architecture to handle multiple users concurrently.

## System Architecture
This project follows a microservices architecture where each service is independent and communicates via REST APIs and WebSockets.

![Architecture Diagram](link_to_image)

## Prerequisites
To run this project, you will need the following:
- Java 17 or later
- Node.js and npm
- MySQL or PostgreSQL (configure in application.properties)
- Angular CLI

## Installation and Setup

### Backend (Spring Boot)
1. Clone the repository: 
    ```bash
    git clone https://github.com/username/DepartementInfo-AffectationSujets-Spring-Angular.git
    cd backend
    ```
2. Install dependencies:
    ```bash
    mvn clean install
    ```
3. Configure database settings in `src/main/resources/application.properties`:
    ```properties
    spring.datasource.url=jdbc:mysql://localhost:3306/your_database
    spring.datasource.username=your_username
    spring.datasource.password=your_password
    ```
4. Run the backend server:
    ```bash
    mvn spring-boot:run
    ```

### Frontend (Angular)
1. Navigate to the frontend directory:
    ```bash
    cd frontend
    ```
2. Install Angular dependencies:
    ```bash
    npm install
    ```
3. Run the Angular development server:
    ```bash
    ng serve
    ```
4. Open your browser and navigate to:
    ```
    http://localhost:4200
    ```

## Usage
- Admin can log in and assign topics to students.
- Students can view available topics and choose one for their final project.
- Real-time updates ensure all changes are reflected immediately.

## Future Improvements
- Add notifications for users about topic assignments.
- Integrate cloud-based solutions for better scalability.

## Contributing
If you'd like to contribute to this project, please fork the repository and use a feature branch. Pull requests are warmly welcome.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

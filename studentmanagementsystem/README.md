````markdown
# Student Management System (Java + React)

This is a minimal full-stack Student Management System:
- Backend: Spring Boot + Spring Data JPA (H2 in-memory DB)
- Frontend: React (Create React App style)

## How to run

1. Backend
   - From repo root or studentmanagementsystem folder:
     - Build: `mvn clean package`
     - Run: `mvn spring-boot:run` (app will start on port 8080)
   - H2 console: http://localhost:8080/h2-console (JDBC URL: jdbc:h2:mem:studentsdb)

2. Frontend (in another terminal)
   - Change directory: `cd studentmanagementsystem/frontend`
   - Install: `npm install`
   - Start: `npm start` (dev server runs on http://localhost:3000 and proxies /api to backend)

## API
- GET /api/students
- GET /api/students/{id}
- POST /api/students
- PUT /api/students/{id}
- DELETE /api/students/{id}

## Next improvements
- Add validation (server-side and client-side)
- Add authentication/authorization (Spring Security + JWT)
- Persist to MySQL/Postgres and add Flyway/Liquibase migrations
- Add pagination and search/filter
- Add tests (controller/service/unit/integration)
- Improve UI (React Router, forms lib, design system)
````
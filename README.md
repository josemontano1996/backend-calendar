# Calendar React Application - REST API

This is the REST API for my Calendar React Application. With it, we handle authentication and authorization via JWT and provide rights to create, update, or delete events from the calendar stored in our MongoDB database. Additionally, the API incorporates input validation to ensure we only handle valid requests on the server-side.

## Technologies Used

The REST API is built using the following technologies:

- Node.js with Express for the server logic and routing.
- MongoDB with Mongoose for database CRUD operations.
- JSON Web Tokens (JWT) for authentication and authorization.

1. **Authentication**
   - `POST /api/auth/new`: Register a new user.
   - `POST /api/auth`: Authenticate and get a JWT token.
   - `GET /api/auth/renew`: Renew expired JWT token.

2. **Calendar Events**
   - `GET /api/events`: Get all events.
   - `GET /api/events/:id`: Get a specific event by its ID.
   - `POST /api/events/new`: Create a new event.
   - `PUT /api/events/:id`: Update an existing event.
   - `DELETE /api/events/:id`: Delete an event.

## Input Validation

The API ensures that incoming requests are properly validated to avoid any potential security risks. It rejects requests with invalid data and returns appropriate error responses.


# Calendar React Application - REST API

This is the REST API for my Calendar React Application. With it, we handle authentication and authorization via JWT and provide rights to create, update, or delete events from the calendar stored in our MongoDB database. Additionally, the API incorporates input validation to ensure we only handle valid requests on the server-side. Our database is also closed so only certain IPs are allowed to interact with it.

The whole point of the App is to create a team calendar webpage, where people from the same team can register and log in to create events in a shared calendar for better organization, all the user and events data come through this API and are properly handled. 

Depending on who created the events different permissions for modifying the events are given as well as different physical appearance.

You can visit our Client side app in the following links: 
-[Calendar Web](https://thriving-moonbeam-22f2bd.netlify.app)
-[Github Client Side Code](https://github.com/josemontano1996/react-calendar-app)

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

## CORS Protection

 We also implement CORS protection, so only authorized domains can use the API. 
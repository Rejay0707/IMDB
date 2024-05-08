# IMDB
Backend:

Technologies Used:

MongoDB: For database storage.
Express.js: For building the RESTful API.
Node.js: As the backend runtime environment.
Joi Validation: For request payload validation.

Components:
Models: Defined schemas for users and movies, ensuring data consistency.
Services and Controllers: Implemented logic for login, register, create movie, view all movie, and edit movie functionalities. Separated business logic (services) from HTTP handling (controllers).

Middleware: Created middleware for request payload validation using Joi.
Routes: Defined different routes for various API endpoints.

Commands to Run Backend:
npm start

Running Backend and Frontend Together:
Access the IMDb clone frontend via https://imdb-frontend-seven.vercel.app/.

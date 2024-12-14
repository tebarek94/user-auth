react-user-auth-product-management

Repository Description
A React-based web application with user authentication and product management functionalities.
The project uses React Router for navigation and a Node.js/Express backend with MySQL for database operations.
The app supports user registration, login, and product management (adding and listing products) with conditional rendering based on authentication status.
Features
User Authentication:

Registration form with validation.
Login form with user credentials.
Conditional rendering:
Login is accessible only after successful registration.
After login, users see product management features.
Product Management:

Add new products with name, description, and price.
View a list of all products.
Routing:

Uses React Router for navigation.
Routes for Registration (/), Login (/login), Home (/home), Add Product, and Product List.
Backend:

Built with Node.js and Express.js.
RESTful APIs for user authentication and product management.
MySQL as the database for storing users and products.
Frontend:

Built with React.
Uses react-hook-form for form validation.
Axios for API calls.
Responsive and user-friendly design.

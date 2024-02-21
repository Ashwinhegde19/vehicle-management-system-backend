# Vehicle Management System

## Description
This is a Vehicle Management System built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. The system allows users to manage vehicle information, vendors, and products.

## Features
- CRUD operations for vehicles, vendors, and products
- API endpoints for retrieving vendor and product information based on the Purchase Order (P.O.) number
- Middleware for authentication and authorization
- MongoDB database schema for vehicles, vendors, and products

 **Install dependencies:**
cd vehicle-management-system
npm install

**Start the server:**
npm start

## API Endpoints
- **Vehicles:**
- GET `/api/vehicles`: Get all vehicles
- GET `/api/vehicles/:id`: Get a specific vehicle by ID
- POST `/api/vehicles`: Create a new vehicle
- PUT `/api/vehicles/:id`: Update an existing vehicle
- DELETE `/api/vehicles/:id`: Delete a vehicle

- **Vendors:**
- GET `/api/vendors`: Get all vendors
- GET `/api/vendors/:id`: Get a specific vendor by ID
- POST `/api/vendors`: Create a new vendor
- PUT `/api/vendors/:id`: Update an existing vendor
- DELETE `/api/vendors/:id`: Delete a vendor

- **Products:**
- GET `/api/products`: Get all products
- GET `/api/products/:id`: Get a specific product by ID
- POST `/api/products`: Create a new product
- PUT `/api/products/:id`: Update an existing product
- DELETE `/api/products/:id`: Delete a product

## Technologies Used
- Node.js
- Express.js
- MongoDB
- Mongoose

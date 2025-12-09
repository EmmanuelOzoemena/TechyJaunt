# Registratin CRUD API with Node.js, Express & MongoDB

This project is a simple CRUD API built with **Node.js**, **Express**, and **MongoDB**.  
It demonstrates how to create routes, update data, delete data, and organize an Express server.

## **What I Built**

I developed a **registration API** that allows you to:

* **Create** a new registration record
* **Read** all registration records
* **Read** a single record by ID
* **Update** a registration record
* **Delete** a registration record

The app also uses:

* **Express** → backend framework
* **MongoDB + Mongoose** → database
* **dotenv** → for environment variable management
* **Morgan** → for request logging in development mode


## **Folder Structure & Rationale**

backend/
│── controller/        → Handles logic for each route
│── models/            → Mongoose schemas for MongoDB
│── routes/            → All API routes/endpoints
│── app.js             → Entry point of the application
│── package.json       → Dependencies & scripts
│── .env               → Environment variables (NOT pushed to GitHub)
│── README.md          → Project documentation

**Why this structure?**
Keeping routes, controllers, and models in separate folders makes the project cleaner and easier to maintain. It also follows a common Node.js best practice.

Even though it’s a small project, this structure will scale well if more features are added later.

## **Technologies Used**

* **Node.js**
* **Express.js**
* **MongoDB**
* **Mongoose**
* **Morgan**
* **dotenv**
* **nodemon**

## **Environment Variable Setup**

Create a `.env` file in the root folder:

PORT=4000
MONGODB_URI=mongo_connection_string

**Important:**
Make sure your `.env` **is included in `.gitignore`** so it doesn’t get pushed to GitHub.


## **Available API Routes**

### **POST** – Create registration

`/api/register/`

### **GET** – Get all registrations

`/api/register/reg-details`

### **GET** – Get one registration by ID

`/api/register/reg-details/:id`

### **PUT** – Update registration

`/api/register/:id`

### **DELETE** – Delete registration

`/api/register/:id`


## **Assumption I Made**

* Since my schema used a **Number** type for phone numbers, JSON could not accept values starting with `0`, so during testing I removed the first `0` from the phone number to prevent a “Unexpected number in JSON” error.


## **Resources Used While Building**

* Official **Express.js documentation**
* **YouTube tutorials** on Express, MongoDB, and CRUD operations
* Debugging with StackOverflow & little AI


## **Status**

Project completed and functioning locally.
All CRUD endpoints work correctly, MongoDB connection is successful, and server logs are properly displayed using Morgan.



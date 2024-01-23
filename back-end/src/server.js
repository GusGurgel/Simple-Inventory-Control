/**************************************************
//
// Backend - Simple Inventory Control
//
// server.js (Javascrip File)
//
// About: This script initiate fastfy server and
// set API endpoints
//
// Criação:     23 Jan 2023
// Atualização: 23 Jan 2023
//
// Criado Por:
// Gustavo Gurgel Medeiros
//
************************************************/

import { fastify } from "fastify"

//Create fastify server
const server = fastify();

// Post API request
// Create a new product in postgres database
server.post("/product", (request, reply) => {
    const { title, description, duration } = request.body;

    return reply.status(201).send();
});


// Get API request
// Returns all products
// user category= query to search by category
server.get("/product", (request, reply) => {
    const search = request.query.category;

    if(search) {
        return "get request whit category=" + search
    } else {
        return "get request"
    }
});

// Put API request
server.put("/product/:name", (request, reply) => {
    const productName = request.params.id;
    const { title, description, duration } = request.body;

    console.log("PUT call whit name: " + productName);

    return reply.status(204).send();
});

// Delete API request
server.delete("/product/:name", (request, reply) => {
    const productName = request.params.id;

    console.log("DELETE call whit name: " + productName);

    return reply.status(204).send();
});

// Launch server on port 4444
server.listen({
    port: 4444
});
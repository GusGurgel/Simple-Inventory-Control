/**************************************************
//
// Backend - Simple Inventory Control
//
// server.js (Javascrip File)
//
// About: This script initiates fastify server and
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
import ProductService from "./products-service.js"

//Create fastify server
const server = fastify();

const productService = new ProductService();

// Post API request
// Create a new product in postgres database
server.post("/products", async (request, reply) => {

    await productService.createProduct(request.body)

    return reply.status(201).send();
});


// Get API request
// Returns all products
// user category= query to search by category
server.get("/products", async (request, reply) => {
    const category = request.query.category;

    return await productService.getAllProducts(category);
});

// Put API request
server.put("/products/:id", async (request, reply) => {
    const productId = request.params.id;
    productService.updateProduct(productId, request.body);

    return reply.status(204).send();
});

// Delete Product API request
server.delete("/products/:id", (request, reply) => {
    const productId = request.params.id;

    productService.deleteProduct(productId);

    return reply.status(204).send();
});

// Get All Categories API request
// This request return all categories and
// how many products this category has
server.get("/categories", async (request, reply) => {
    return await productService.getAllCategories(); 
});

// Launch server on port 4444
server.listen({
    port: 4444
});
/*************************************
// Run this script to create/reset
// all tables required in the database
*************************************/

import { sql } from "./db.js";

// Drop tables if exists
await sql`DROP TABLE IF EXISTS products;`
await sql`DROP TABLE IF EXISTS categories;`

// Create categories table
await sql`
    CREATE TABLE IF NOT EXISTS categories (
        name TEXT PRIMARY KEY
    );
`

// Create products table
await sql`
    CREATE TABLE IF NOT EXISTS products (
        id UUID PRIMARY KEY,
        name TEXT,
        category TEXT,
        quantity INTEGER,
        FOREIGN	KEY (category) REFERENCES categories(name) 
    );
`.then(() => {
    console.log("all tables created");
})
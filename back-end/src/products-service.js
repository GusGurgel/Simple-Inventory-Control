/**************************************************
//
// Backend - Simple Inventory Control
//
// porducts-service.js (Javascrip File)
//
// About: This script provides the class ProductsService.
// This class handles the CRUD with the Postgres database 
//
// Criação:     23 Jan 2023
// Atualização: 23 Jan 2023
//
// Criado Por:
// Gustavo Gurgel Medeiros
//
************************************************/

import { sql } from "./db.js"
import {v4 as uuidv4} from "uuid"

export default class ProductsService {
    async createProduct(product) {
        const {pName, pCategory, pQuantity} = product
        
        await this.#createCategoryIfNotExists(pCategory);

        const productsFound = await sql`
            SELECT * FROM products where name = ${ pName } 
        `

        // If product exists then update
        if(productsFound.length > 0) {
            const id = productsFound[0].id;
            await this.updateProduct(id, {pName, pCategory, pQuantity});
            return;
        };

        // If product not exists then create
        await sql`
            INSERT INTO 
                products(id, name, category, quantity)
            VALUES
                ( ${uuidv4()}, ${pName}, ${pCategory}, ${pQuantity} );
        `;
    } 
   
    // Get all products
    // Filter by category if passed
    async getAllProducts(category) {
        let products;

        if(category) {
            return await sql`
                SELECT 
                    *
                FROM 
                    products
                WHERE
                    category = ${ category }
            `
        } else {
            return await sql`
                SELECT 
                    *
                FROM 
                    products;
            `
        }
    } 

    async updateProduct(pID, product) {
        const {pName, pCategory, pQuantity} = product;

        this.#createCategoryIfNotExists(pCategory);

        await sql`
            UPDATE products 
            SET name = ${pName},
                category = ${pCategory},
                quantity = ${pQuantity}
            WHERE
                id = ${pID} 
        `;
    }

    async deleteProduct(productId) {
        await sql`
            DELETE FROM
                products 
            WHERE
                id = ${ productId };
        `
    }

    async getAllCategories() {
        return sql`
        SELECT 
            categories.name, products.quantity
        FROM 
            products 
        JOIN 
            categories ON categories.name = products.category;`;

    }

    async #createCategoryIfNotExists(categoryName) {
        const categoriesFound = await sql`
            SELECT * FROM categories where name = ${ categoryName }
        `;

        if(categoriesFound.length === 0) {
            await sql`
                INSERT INTO
                    categories(name) 
                VALUES
                    ( ${ categoryName } );
            ` 
        };
    }
}
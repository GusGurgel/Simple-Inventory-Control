/**************************************************
//
// Backend - Simple Inventory Control
//
// db.js (Javascrip File)
//
// About: This script connet to the postgres data
// base using postgres.js lib
//
// Criação:     23 Jan 2023
// Atualização: 23 Jan 2023
//
// Criado Por:
// Gustavo Gurgel Medeiros
//
************************************************/

import postgres from "postgres";

const { PGDATABASE, PGUSER, PGPASSWORD } = process.env
const URL = `postgres://${PGUSER}:${PGPASSWORD}@localhost:5432/${PGDATABASE}`

export const sql = postgres(URL);
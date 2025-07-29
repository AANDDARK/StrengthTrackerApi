import { Client } from 'pg'
export const db = new Client({
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    host: 'localhost',
    port:  5432,
    database: process.env.POSTGRES_DB,
});

await db.connect();
import mysql from 'mysql2/promise'
import { getSecret } from 'astro:env/server'

let pool;

function getPool() {
   if(!pool) {
        pool = mysql.createPool({
            host: getSecret('MYSQL_HOST'),
            port: getSecret('MYSQL_PORT'),
            database: getSecret('MYSQL_DATABASE'),
            user: getSecret('MYSQL_USER'),
            password: getSecret('MYSQL_ROOT_PASSWORD'),
            charset: 'utf8mb4'
        })
    }

    return pool;
}

export async function getAllProducts() {
    const [productos] = await getPool().query(
        'SELECT id, nombre, precio, stock FROM productos'
    )
    return productos;
}
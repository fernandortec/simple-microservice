const DB_USER = 'nodeuser'
const DB_PASS = 'nodeuser'
const DB_NAME = 'db'
const DB_HOST = '0.0.0.0'
const DB_PORT = 27017

export const dbUrl = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
import pg from 'pg'
import 'dotenv' 


// this is the connecting factor of the databse
const pool=new pg.Pool({
    host:'localhost',
    port:5432,
    database:'threadsclone',
    user:'postgres',


})


// testing the connection to the database


export default pool


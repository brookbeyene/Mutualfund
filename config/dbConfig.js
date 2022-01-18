require('dotenv/config')
   module.exports = {
        HOST: process.env.HOST, // your endpoint
        USER: process.env.USER, // your username
        PASSWORD: process.env.PASSWORD, // your password
        DB: process.env.DB, // your db name
        dialect: process.env.DIALECT,
        }


//    module.exports = {
//         HOST: 'database-1.chmpqhs2m0rr.us-east-2.rds.amazonaws.com', // your endpoint
//         USER: 'postgres_brook', // your username
//         PASSWORD: 'thunderCo21', // your password
//         DB: 'aws_course_db', // your db name
//         dialect: 'postgres',
//         }
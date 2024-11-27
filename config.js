import  { Sequelize }  from "sequelize";
import dotenv from 'dotenv'
dotenv.config();

const db = new Sequelize(process.env.DB_NAME,process.env.DB_HOST,process.env.DB_PASSWORD,{
    host: process.env.HOST,
    dialect: process.env.DIALECT
})

export default db;
import { Sequelize } from 'sequelize';
import mysql2 from 'mysql2'; 
import dotenv from 'dotenv';
dotenv.config()

// Konfigurasi koneksi database
const db = new Sequelize(process.env.DB_NAME,process.env.DB_HOST,process.env.PASSWORD, {
  host: process.env.HOST,
  dialect: process.env.DIALECT, 
  dialectModule: mysql2, 
});

export default db;

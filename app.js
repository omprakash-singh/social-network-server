const express = require('express');
const router = require('./router');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// DataBase connection
const DB = process.env.DB;
mongoose.connect(DB)

// Router
app.use('/', router)

// App listen
app.listen(3000)
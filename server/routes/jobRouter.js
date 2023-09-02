const express = require( 'express')
const {AddJob} = require('../controllers/jobConeller')
const jobrouter = express.Router();

jobrouter.post("/addjob",AddJob)

module.exports = jobrouter;

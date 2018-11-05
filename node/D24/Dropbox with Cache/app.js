const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');
const fileUpload = require('express-fileupload')
const path = require('path');

const app = express();
const upload = multer();

//set up the middleware for the program, app.use bodyParser - allows us to read the data, 
app.use(bodyParser.urlencoded({ extended: false }));

// app.use fileUpload allows express to handle different files being uploaded to the server.
app.use(fileUpload());


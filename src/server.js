
//Server
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

server.use(express.json());

mongoose.connect('mongodb+srv://doublepeppers:kss046dp@cluster0-tswtt.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
server.use(cors());
server.use(routes);
server.listen(3333);
const express = require('express');
const routes = express.Router();


const boostedCreature = require('./controllers/boostedCreature');


routes.get('/boostedCreature' , boostedCreature.getBoostedCreature);



module.exports = routes;


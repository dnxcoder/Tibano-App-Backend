const express = require('express');
const routes = express.Router();


const boostedCreature = require('./controllers/boostedCreature');


routes.get('/boostedCreature' , boostedCreature.getBoostedCreature);

routes.get('/wikiBoostedCreature', boostedCreature.getBoostedCreatureFromWikiTibia);



module.exports = routes;


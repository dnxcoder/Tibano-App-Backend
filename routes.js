const express = require('express');
const routes = express.Router();


const boostedCreature = require('./controllers/boostedCreature');
const getMonster = require('./controllers/getMonster');



routes.get('/wikiBoostedCreature', boostedCreature.getBoostedCreatureFromWikiTibia);

routes.get('/getMonster', getMonster.getMonster);


module.exports = routes;


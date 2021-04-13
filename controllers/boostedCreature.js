const jsdom = require('jsdom');
const axios = require('axios');


const { JSDOM } = jsdom;

const boostedCreatureURL = 'https://www.tibia.com/library/?subtopic=creatures';
const wikiBoostedCreatureURL = 'https://tibia.fandom.com/wiki/Boosted_Creature';


module.exports = {


    getBoostedCreatureFromWikiTibia(req, res) {

        axios.get(wikiBoostedCreatureURL)
            .then(response => {

                console.log(response.data.toString());
                const allDomPage = new JSDOM(response.data.toString()).window.document;

                const elementContainer = allDomPage.querySelector('.compact-box');
                const nameBoostedCreature = elementContainer.querySelector('a').text;
                const imgLink = elementContainer.querySelector(`img[alt="${nameBoostedCreature}"]`).src;

                res.json({
                    name: nameBoostedCreature,
                    imgLink: imgLink
                })
            }).catch((error) => {

                res.send('Este foi o erro encontrado :' + error)
            })

    },




}
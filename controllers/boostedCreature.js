

const got = require('got');
const jsdom = require('jsdom');
const axios = require('axios');


const { JSDOM } = jsdom;

const boostedCreatureURL = 'https://www.tibia.com/library/?subtopic=creatures';
const wikiBoostedCreatureURL = 'https://tibia.fandom.com/wiki/Boosted_Creature';


module.exports = {

    getBoostedCreature(req, res) {

        got(boostedCreatureURL)
            .then(response => {

                const allDomPage = new JSDOM(response.body.toString()).window.document;

                const elementContainer = allDomPage.querySelector('.InnerTableContainer');
                const imgLink = elementContainer.querySelector('img');
                const linkElement = elementContainer.querySelector('a');


                res.json({
                    name: linkElement.text,
                    imgLink: imgLink.src
                })

            });
    },

    getBoostedCreatureFromWikiTibia(req, res) {

        axios.get(wikiBoostedCreatureURL)
            .then(response => {

                const allDomPage = new JSDOM(response.data.body.toString()).window.document;

                const elementContainer = allDomPage.querySelector('.compact-box');
                const nameBoostedCreature = elementContainer.querySelector('a').text;
                const imgLink = elementContainer.querySelector(`img[alt="${nameBoostedCreature}"]`).src;

                res.json({
                    name: nameBoostedCreature,
                    imgLink: imgLink
                })
            })

    }



}
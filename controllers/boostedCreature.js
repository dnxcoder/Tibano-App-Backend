

const got = require('got');
const jsdom = require('jsdom');
const { JSDOM } = jsdom;

const boostedCreatureURL = 'https://www.tibia.com/library/?subtopic=creatures';


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
    }



}
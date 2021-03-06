//jshint esversion:6

const express = require('express');
const app = express();
const port = 5000;
<<<<<<< HEAD
const mw = require('./my-middleware.js');
const vempro = require('./my-vempro.js');

app.use(mw());

console.log(vempro.v1.information.name);


app.get('/', (req, res) => {
    res.send(`The path is: ${req.path}`);
})

app.get('/api/:version', (req, res) => {
    if ( req.params.version == "v1" ) {
        res.send(`The api version is: ${req.params.version}`);
    } else if ( req.params.version == "v99" ) {
        res.send(`The api version is: ${req.params.version}`);
    } else {
        res.send(`Invalid version: ${req.params.version}`);
    }
})

app.get('/api/:version/:collection', (req, res) => {
    if ( req.params.collection == "information" ) {
        res.send(`The collection is: ${req.params.collection}`);
    } else if ( req.params.collection == "measurements") {
        res.send(`The collection is: ${req.params.collection}`)
    } else if ( req.params.collection == "meters") {
        res.send(`The collection is: ${req.params.collection}`)
    } else if ( req.params.collection == "history") {
        res.send(`The collection is: ${req.params.collection}`)
    } else {
        res.send(`Invalid collection: ${req.params.collection}`);
    }
})
=======
const values = require('src/values.js');

console.log(values);
>>>>>>> 6d253dab63d98f778a7fe12f4e20c491e088d9aa

app.get('/api/:version/:collection/:endpoint', (req, res) => {
    if ( req.params.collection == "information" && req.params.endpoint == "name" ) {
        res.send(`Collection: ${req.params.collection} and endpoint: ${req.params.endpoint}`);
    } else if ( req.params.collection == "measurements" && req.params.endpoint == "p" ) {
        res.send(`Collection: ${req.params.collection} and endpoint: ${req.params.endpoint}`);
    } else if ( req.params.collection == "meters" && req.params.endpoint == "ea-pos" ) {
        res.send(`Collection: ${req.params.collection} and endpoint: ${req.params.endpoint}`);
    } else if ( req.params.collection == "history" && req.params.endpoint == "meters" ) {
        res.send(`Collection: ${req.params.collection} and endpoint: ${req.params.endpoint}`);
    } else {
        res.send(`Endpoint not found`);
    }
})

app.listen(port, () => {
    console.log("Express is listening on port 5000");
})
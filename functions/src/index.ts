'use strict';

import * as functions from 'firebase-functions';
import * as express from 'express';
import * as helmet from 'helmet';
import { getSVG } from './getSVG';

const app = express();
app.use(helmet());

app.get('/*', function (req, res, next) {

    // cache for one 7 days
    res.set('Cache-Control', 'public, max-age=604800, s-maxage=604800');

    res.setHeader('Content-Type', 'image/svg+xml');
    next();
});

app.get('/angular', (req, res) => {
    res.send(getSVG(req, 'angular'));
});

app.get('/angular/:preset', (req, res) => {
    res.send(getSVG(req, 'angular'));
});

app.get('/linear', (req, res) => {
    res.send(getSVG(req, 'linear'));
});

app.get('/linear/:preset', (req, res) => {
    res.send(getSVG(req, 'linear'));
});

app.get('/burst', (req, res) => {
    res.send(getSVG(req, 'burst'));
});

app.get('/burst/:preset', (req, res) => {
    res.send(getSVG(req, 'burst'));
});

app.get('/stripes', (req, res) => {
    res.send(getSVG(req, 'stripes'));
});

app.get('/stripes/:preset', (req, res) => {
    res.send(getSVG(req, 'stripes'));
});

exports.app = functions.https.onRequest(app);
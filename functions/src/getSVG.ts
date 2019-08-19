'use strict';

import * as fs from 'fs';
import * as express from 'express';

export function getSVG(req: express.Request, style: string): string {

    const { preset, width, height, c1, c2, deg } = parseQueryParams(req);

    let template = "";

    if (fs.existsSync(__dirname + `/templates/${style}-${preset}.svg`)) {
        template = fs.readFileSync(__dirname + `/templates/${style}-${preset}.svg`, 'utf8');
    } else {
        template = fs.readFileSync(__dirname + '/templates/angular-1.svg', 'utf8');
    }

    template = template.replace(/%WIDTH%/gi, width);
    template = template.replace(/%HEIGHT%/gi, height);

    // replace c1, c2, deg only if set, 
    // otherwise use the default variable within template
    if (c1 !== '') {
        template = template.replace("var(--c1)", "#" + c1);
    }

    if (c2 !== '') {
        template = template.replace("var(--c2)", "#" + c2);
    }

    if (deg !== '') {
        template = template.replace("var(--deg)", deg + "deg");
    }

    return template;

};

function parseQueryParams(req: express.Request) {

    const preset = (parseInt(req.params.preset) || 1).toString();
    const width = (parseInt(req.query.width) || '100%').toString();
    const height = (parseInt(req.query.height) || '100%').toString();
    const deg = (parseInt(req.query.deg) || '').toString();
    const c1 = (parseInt(req.query.c1) || '').toString();
    const c2 = (parseInt(req.query.c2) || '').toString();

    return {
        preset: preset,
        width: width,
        height: height,
        c1: c1,
        c2: c2,
        deg: deg,
    };

}
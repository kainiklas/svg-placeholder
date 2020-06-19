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

    const preset = req.params.preset ? req.params.preset.replace(/\D/gi, '') : 1;
    const width = req.query.width ? req.query.width.toString().replace(/\D/gi, '') : '100%';
    const height = req.query.height ? req.query.height.toString().replace(/\D/gi, '') : '100%';
    const deg = req.query.deg ? req.query.deg.toString().replace(/\D/gi, '') : '';

    const c1 = req.query.c1 ? req.query.c1.toString().replace(/\W/gi, '').substring(0, 6) : '';
    const c2 = req.query.c2 ? req.query.c2.toString().replace(/\W/gi, '').substring(0, 6) : '';

    return {
        preset: preset,
        width: width,
        height: height,
        c1: c1,
        c2: c2,
        deg: deg,
    };

}
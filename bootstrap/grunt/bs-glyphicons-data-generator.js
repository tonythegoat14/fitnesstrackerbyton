'use strict';
var fs = require('fs');

module.exports = function generateGlyphiconsData() {

    var glyphiconsFile = fs.readFileSync('less/glyphicons.less', 'utf8');
    var glpyhiconsLines = glyphiconsFile.split('\n');

    var iconClassName = /^\.(glyphicon-[^\s]+)/;
    var glyphiconsData = '# This file is generated via Grunt task. **Do not edit directly.**\n' +
        '# See the \'build-glyphicons-data\' task in Gruntfile.js.\n\n';
    for (var i = 0, len = glpyhiconsLines.length; i < len; i++) {
        var match = glpyhiconsLines[i].match(iconClassName);

        if (match !== null) {
            glyphiconsData += '- ' + match[1] + '\n';
        }
    }

    if (!fs.existsSync('docs/_data')) {
        fs.mkdirSync('docs/_data');
    }

    fs.writeFileSync('docs/_data/glyphicons.yml', glyphiconsData);
};
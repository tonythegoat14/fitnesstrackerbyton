'use strict';
var canonicallyJsonStringify = require('canonical-json');
var NON_CANONICAL_FILE = 'npm-shrinkwrap.json';
var DEST_FILE = 'test-infra/npm-shrinkwrap.canonical.json';


function updateShrinkwrap(grunt) {
    var shrinkwrapData = grunt.file.readJSON(NON_CANONICAL_FILE);
    grunt.log.writeln('Deleting ' + NON_CANONICAL_FILE.cyan + '...');
    grunt.file.delete(NON_CANONICAL_FILE);
    grunt.file.write(DEST_FILE, canonicallyJsonStringify(shrinkwrapData));
    grunt.log.writeln('File ' + DEST_FILE.cyan + ' updated.');
}


module.exports = updateShrinkwrap;
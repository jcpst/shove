#!/usr/bin/env node
var fs = require('fs')
var path = require('path')
var mkdirp = require('mkdirp')
var outfile = process.argv[2]

mkdirp.sync(path.dirname(outfile))
process.stdin.pipe(fs.createWriteStream(outfile))


var fs = require('fs')
var path = require('path')

var mkdirp = require('mkdirp')
var argv = require('minimist')(process.argv.slice(2))

var outfile = argv.o || argv.outfile

mkdirp.sync(path.dirname(outfile))

var ws = fs.createWriteStream(outfile)

process.stdin.pipe(ws)


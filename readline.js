var readline = require('readline');
var os = require('os');


console.log(__dirname, __filename, os.uptime(), process.platform);
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

rl.on('line', function(line){
    console.log('the line:' + line);
});
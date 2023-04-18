const os = require('node:os');
const path = require('path');
const events = require('events');

///////////////////////////////////////////////////////////////////////
//OS module
///////////////////////////////////////////////////////////////////////
console.log(os.EOL)
console.log(os.availableParallelism())
console.log(os.arch())
console.log(os.constants)
console.log(os.cpus())
console.log(os.devNull)
console.log(os.endianness())
console.log(os.freemem())
console.log(os.homedir())
console.log(os.hostname())
console.log(os.loadavg())
console.log(os.machine())
console.log(os.networkInterfaces())
console.log(os.platform())
console.log(os.release())
console.log(os.tmpdir())
console.log(os.totalmem())
console.log(os.type())
console.log(os.uptime())
console.log(os.version())

///////////////////////////////////////////////////////////////////////////
//path module
///////////////////////////////////////////////////////////////////////////
console.log(path.basename('/folder1/folder2/myFile.txt'));
console.log(path.dirname('/folder1/folder2/myFile.txt'));
console.log(path.extname('/folder1/folder2/myFile.txt'));
console.log(path.parse('/folder1/folder2/myFile.txt'));

let pathToFile = path.format({
    dir: 'folder1/folder2/',
    base: 'myFile.txt'
});

console.log(pathToFile);


///////////////////////////////////////////////////////////////////////
//Event module
///////////////////////////////////////////////////////////////////////
let eventEmitter = new events.EventEmitter();

//Create an event handler:
let myEventHandler = function () {
    console.log('I hear a whistle!');
}

//Assign the event handler to an event:
eventEmitter.on('whistle', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('whistle');
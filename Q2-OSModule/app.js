//Q2 - Using Node's core module 'os'

const os = require('os');

// Print this system's architecture, platform and number of CPU's
console.log('Architecture: ' + os.arch());
console.log('CPUs: ' + os.cpus().length);
console.log('OS: ' + os.platform());
const fs = require('fs');

const file = fs.readFileSync('./index.html','utf-8');
console.log(file);   
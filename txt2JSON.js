// 'use strict';
// const txt = require('../OneDrive/Documents/oracle_json2.txt');
// const fs = require('fs');
// const readline = require('readline');

// function convert(file) {

//     return new Promise((resolve, reject) => {

//         const stream = fs.createReadStream(file);
//         stream.on('error', reject);

//         const reader = readline.createInterface({
//             input: stream
//         });

//         const array = [];

//         reader.on('line', line => {
//             array.push(JSON.parse(line));
//         });

//         reader.on('close', () => resolve(array));
//     });
// }


// convert(txt)
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => console.error(err));

const json = require('../OneDrive/Documents/oracle_json2.json')

console.log(json)
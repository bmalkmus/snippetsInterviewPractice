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

// const json = require('../OneDrive/Documents/oracle_json2.json')

// console.log(json)

const actual = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"

const error = "0x746f3d30786337616237666663346663326633633735666662363231663537346434623963383631333330663026646174613d30783635613662623239266d6f64756c653d70726f787926616374696f6e3d6574685f63616c6c266170696b65793d344258465a4d314d34525144364d324232435045525648384e4837594b4643354a59"

console.log(error.slice(0, 42))
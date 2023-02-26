// requestSync.js
var request = require('sync-request');
const url = "https://api.appworks-school-campus3.online/api/v1/clock/delay";

var XMLHttpRequest = require('xhr2');
var xhr = new XMLHttpRequest();

function requestSync(){
    const start = Date.now();
    var res = request('GET', url);
    const end = Date.now();
    console.log(`${end - start}`);
}

// function requestSync(url) {
//     const start = Date.now();
//     const request = https.get(url, (response)=>{})
//     const end = Date.now();
//     console.log(`${end - start}`);
// }
requestSync(url); // would print out the execution time
requestSync(url);
requestSync(url);


// console.log(`Execution time: ${end - start} ms`);

// requestAsync.js
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
const url = "https://api.appworks-school-campus3.online/api/v1/clock/delay";

function requestCallback(url, callback) {
    // write code to request url asynchronously
    const start = Date.now();
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onload = function(){
        const end = Date.now();
        callback(end-start)};
    xhr.send();
}

// function requestPromise(url) {
//     return new Promise((resolve, reject) => {
//         const start = Date.now();
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', url);
//         xhr.send();
//         resolve('success');
//         reject('fail')
//     });
//   }

function requestPromise(url) {
    return new Promise((resolve, reject)=> {
      // 定義 Http request
      const start = Date.now();
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.send();
      xhr.onload = function() {
        if (xhr.status == 200) {
          const end = Date.now();
          resolve(end - start);
        } else {
          reject(new Error(xhr))
        }
      };
    });
  }
  
async function requestAsyncAwait(url) {
    // write code to request url asynchronously
    // you should call requestPromise here and get the result using async/await.
    const start = Date.now();
    const peopleResponse = await fetch(url);
    const end = Date.now();
    console.log(end-start);
 }

requestCallback(url, console.log); // would print out the execution time
requestPromise(url).then(console.log);
requestAsyncAwait(url);

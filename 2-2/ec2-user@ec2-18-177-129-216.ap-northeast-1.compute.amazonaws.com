const express = require("express");
const app = express();

// server the GET request
app.get('/', (request, response)=> { // 第一個 argument 是 path, '/' 表示網站根目錄
    response.send("OK");
} );
app.get('/healthcheck', (request, response)=> { // 第一個 argument 是 path, '/' 表示網站根目錄
    response.send("OK");
} );
app.listen(3000);
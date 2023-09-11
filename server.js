const express = require('express');
const app = express();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: 'daycare'
});
con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});

app.get('/', (req, res) => {
    con.query("SELECT * FROM login", function (err, result, fields) {
        if (err) throw err;
        res.json(result)
    });
})

app.listen(process.env.PORT || 5000, () => {
    console.log('server started.....');
})
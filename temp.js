
const express = require('express');
const app = express();

const abc = require('abc');

app.use(abc());



app.use(express.static('abc'));
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));
//whether you want nested objects support  or not

const bodyParser = require('body-parser');

const dbconnection = mysql.createConnection({
    host: 'localhost',
    user: 'yugansh',
    password: 'cdac',
    database: 'db1',
	port:3306
});

var result="";

app.get(dbconnection.query("select * from book where bookid = ?", [req.], (err, res1) => {
	$.ajax({
		type: "get",
		dataType: "json",
		url: "http://localhost:8081/mdel",
		data: { xyz: pqr },
		success: function (gfs) {"sabled", true);
		},
		error: function (e) {
			alert('we have trouble ' + JSON.stringify(e));
		}
		if (err) {
		result = err;
		console.log("trouble " + err);
	} else {
		result = res1;
		console.log("success" + result)
	}
	
	console.log("38 " + );
	res.send(result);
});



app.get('/poc2', function (req, res) {
    
	
        console.log("reading input " + req.query.xyz);
		
    	var xyz ={ v1:37, v2:35};

		res.send(xyz);

		});




app.listen(8081, function () {
    console.log("server listening at port 8081...");
});
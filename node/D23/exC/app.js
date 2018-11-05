const express = require('express');
const app = express();

app.post('/login',(req,res)=>{
	res.send("Login Information Received.");
});

app.listen(8080)
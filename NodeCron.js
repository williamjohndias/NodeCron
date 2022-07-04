// imports
const cron = require("node-cron");
const express = require("express");

app = express();

app.listen(3000, () => {
	console.log('Server rodando na porta 3000') 

	cron.schedule('* * * * * *', () => console.log('Cron está funcionando...'))
  })


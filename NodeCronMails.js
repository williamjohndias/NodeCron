// imports
const cron = require("node-cron");
const express = require("express");
const nodemailer = require("nodemailer");

app = express();

// manda emails a cada minuto com a função sendMail()
cron.schedule("*/1 * * * *", function() {
sendMail();
});

// função sendMail() para enviar emails com o nodemailer
function sendMail() {
	let mailTransporter = nodemailer.createTransport({
		service: "hotmail",
		auth: {
		user: "(email)@hotmail.com",
		pass: "password"
		}
	});
	
	// inserindo detalhes do email
	let mailDetails = {
		from: "(email)@hotmail.com",
		to: "(email)@hotmail.com",
		subject: "E-mail test Cron",
		text: "Olá, tudo bem?"
		+ " testando.."
	};
	
	
	// mensagem de erro ou sucesso
	mailTransporter.sendMail(mailDetails,
					function(err, data) {
		if (err) {
			console.log("ERROR :(", err);
		} else {
			console.log("Email enviado com sucesso");
		}
	});
}

app.listen(3000);

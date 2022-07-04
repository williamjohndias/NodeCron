// imports
const cron = require("node-cron");
const express = require("express");
const nodemailer = require("nodemailer");

app = express();

// Calling sendEmail() function every 1 minute
cron.schedule("*/1 * * * *", function() {
sendMail();
});

// Send Mail function using Nodemailer
function sendMail() {
	let mailTransporter = nodemailer.createTransport({
		service: "hotmail",
		auth: {
		user: "(email)@hotmail.com",
		pass: "password"
		}
	});
	
	// Setting credentials
	let mailDetails = {
		from: "(email)@hotmail.com",
		to: "(email)@hotmail.com",
		subject: "E-mail test Cron",
		text: "Olá, tudo bem?"
		+ " testando.."
	};
	
	
	// Sending Email
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

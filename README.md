# NodeCron

<strong>Dependências:<br/></strong>

npm install express<br/>
npm install node-cron<br/>
npm i uidd<br/><br/>

# NodeCron para enviar e-mails<br/>

<strong>Dependências:<br/></strong>

npm install express<br/>
npm install nodecron<br/>
npm i uidd<br/>
npm install nodemailer<br/>

# Como usar

cron.schedule("* * * * *", function() {
    // o que ele vai repetir
});

*os asteríscos tem este significado:*<br/>
6 *-> Dias da semana<br/>
5 *-> Mês<br/>
4 *-> Dias do mês<br/>
3 *-> Horas<br/>
2 *-> Minutos<br/>
1 *-> Segundos (opcional)<br/>

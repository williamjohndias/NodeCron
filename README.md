# NodeCron

<strong>Dependências:<br/></strong>

npm install express<br/>
npm install node-cron<br/>
npm i uidd<br/><br/>

# NodeCron para enviar e-mails (nodemailer)<br/>

<strong>Dependências:<br/></strong>

npm install express<br/>
npm install nodecron<br/>
npm i uidd<br/>
npm install nodemailer<br/>

# Como usar

cron.schedule("* * * * *", function() {<br/>
    // o que ele vai repetir<br/>
});<br/>

<strong>*os asteríscos tem este significado:*</strong><br/>
1 *-> Segundos (opcional)<br/>
2 *-> Minutos<br/>
3 *-> Horas<br/>
4 *-> Dias do mês<br/>
5 *-> Mês<br/>
6 *-> Dias da semana<br/>

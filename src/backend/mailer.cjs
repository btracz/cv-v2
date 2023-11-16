/* eslint-disable no-undef */
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

//Setup Nodemailer transport, I chose gmail. Create an application-specific password to avoid problems.
const smtpTrans = nodemailer.createTransport(
  smtpTransport({
    host: "smtp.tracz.fr",
    port: 587,
    secure: false, // use SSL
    auth: {
      user: "benjamin@tracz.fr",
      pass: "benji89",
    },
    tls: {
      rejectUnauthorized: false,
    },
  })
);

const sendContactMails = async ({ name, mail, body }) => {
  //Mail options
  mailOpts = {
    from: "no-reply@tracz.fr",
    to: "benjamin@tracz.fr",
    subject: "Contact",
    text: "Message de " + name + " <" + mail + ">\r\n" + body, //grab form data from the request body object
  };

  // ajout d'une trace dans les logs
  console.log("Contact de " + name + "(" + mail + "), message : " + body);

  try {
    // My mail
    await smtpTrans.sendMail(mailOpts);
    // Their mail
    await smtpTrans.sendMail({
      from: "no-reply@tracz.fr",
      to: mail,
      subject: "Confirmation d'envoi d'un message à Benjamin TRACZ",
      html: `Bonjour ${name},<br />
      <br />
      Merci d'avoir pris le temps de me contacter, je reviendrai vers vous si votre message retient mon attention.<br/>
      <br />
      Cordialement,<br/>
      Benjamin TRACZ.<br/>
      <br/>
      <p><small><i>Ceci est un mail automatique, merci de ne pas y répondre.</i></small></p>`,
    });
  } catch (error) {
    // ajout d'une trace dans les logs
    console.log(
      "Contact de " +
        name +
        "(" +
        email +
        "), erreur lors de l'envoi de mail : " +
        error.toString()
    );
  }
};

module.exports = {
  sendContactMails,
};

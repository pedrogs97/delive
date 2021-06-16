const functions = require("firebase-functions");
const sgMail = require("@sendgrid/mail");

exports.sendEmail = functions.firestore
    .document("submits/{submitId}").onCreate((snap, context) => {
      sgMail.setApiKey(functions.config().sgapi.key);
      const data = snap.data();
      const textMsg = `
        Dados:
        Nome: ${data.name}
        E-mail: ${data.email}
        Telefone: ${data.phone}
        Dados de quem irá receber:
        E-mail: ${data.receiverEmail}
        Telefone: ${data.receiverPhone}
        Observações:
        ${data.observations}`;
      const msg = {
        to: "pedroemonteiro@outlook.com",
        from: "pgls.dev@gmail.com",
        subject: "Reserva de " + data.name,
        text: textMsg,
      };
      sgMail.send(msg)
          .then(() => {
            console.log("Email sent");
          })
          .catch((error) => {
            console.error(error.response.body);
          });
      return 1;
    });

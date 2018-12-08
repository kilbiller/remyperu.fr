var nodemailer = require("nodemailer");

module.exports = {
  index: function(req, res, next) {
    res.render("contact");
  },

  post: function(req, res, next) {
    var email = req.body.email;
    var nom = req.body.nom;
    var message = req.body.message;

    if (!email || !nom || !message) {
      res.render("contact", {
        error: "Remplissez tous les champs s'il vous plaît."
      });
    } else {
      // create reusable transporter object using SMTP transport
      var transporter = nodemailer.createTransport({
        service: "Mailgun",
        auth: {
          user:
            "postmaster@sandbox37fa23be0e57496e89768204e7097db9.mailgun.org",
          pass: "f033ad61e71daccded430aaa4867ed79"
        }
      });

      // setup e-mail data with unicode symbols
      var mailOptions = {
        from: email, // sender address
        to: "peru.remy@gmail.com", // list of receivers
        subject: "Mail de remyperu.fr", // Subject line
        text: message // plaintext body
      };

      // send mail with defined transport object
      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
          res.render("contact", {
            error: "Un problème a été rencontré lors de l'envoi du message."
          });
        } else {
          console.log("Message sent: " + info.response);
          res.render("contact", {
            sucess: "Votre message a bien été envoyé."
          });
        }
      });
    }
  }
};

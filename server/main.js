import { Meteor } from 'meteor/meteor';

// Meteor.startup(() => {
//   // code to run on server at startup
// });

Meteor.startup(function(){
  // Carica future
  var Future = Npm.require("fibers/future");

  // Carica exec
  var exec = Npm.require("child_process").exec;

  // Set env mail server variable
  // Da sistemare, ultra insicuro.
  process.env.MAIL_URL = "smtps://postmaster@sandboxe3362d49940a40608beb65efd5554f84.mailgun.org:94193a77589e5d418177b0d728d5a169@smtp.mailgun.org:587";
 
  // Metodi per il server
  Meteor.methods({
    // Metodo per lanciare comandi shell
    runCode: function(fileName) {
      
      // Check input
      check([fileName], [String]);

      // Metodo asincrono
      this.unblock();
      
      var future=new Future();

      // Comando Shell per lanciare la scansione.
      // Il file per ora viene salvato nella cartella /public del progetto, da sistemare per servire i file al browser
      // Sarà possibile scegliere l'estensione del file. 
      var command='hp-scan -o /home/aulettarappresentanti/meteor/Alboino_eXtreme_v2/public/scanner/' + fileName + '.png';
      exec(command, {maxBuffer : Infinity}, function(error,stdout,stderr){
        if(error){
          console.log(error);
          throw new Meteor.Error(500,command+" failed");
        }
        future.return(stdout.toString());
      });
      return future.wait();
    },

    // Metodo per inviare email
    sendMail: function(to, from, subject, html, attachments){

      // Check inputs
      check([to, from, subject, html], [String]);

      // Metodo asincrono
      this.unblock();

      // Metodo mail
      Email.send({
	      to: to,
	      from: from,
	      subject: subject,
	      attachments: attachments
	    });
    },
  });
});

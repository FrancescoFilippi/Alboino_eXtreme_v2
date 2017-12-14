import { Meteor } from 'meteor/meteor';

// Meteor.startup(() => {
//   // code to run on server at startup
// });

Meteor.startup(function(){
  // carica future
  var Future = Npm.require("fibers/future");
  // carica exec
  var exec = Npm.require("child_process").exec;
 
  // Metodo per il server
  // Aggiungere variabili per la scelta del nome del file e dell'estensione
  Meteor.methods({
    runCode: function (fileName) {
      // La chiamata aspetta asincrona che finisca l'esecuzione; 'unblock' permette
      // di mettere in coda le chiamate
      this.unblock();
      var future=new Future();
      // Comando Shell per lanciare la scansione.
      // Il file per ora viene salvato nella cartella /public del progetto, da sistemare per servire i file al browser
      // Sarà possibile scegliere l'estensione del file. 
      var command='hp-scan -o /home/aulettarappresentanti/meteor/Alboino_eXtreme_v2/public/' + fileName + '.png';
      exec(command, {maxBuffer : Infinity}, function(error,stdout,stderr){
        if(error){
          console.log(error);
          throw new Meteor.Error(500,command+" failed");
        }
        future.return(stdout.toString());
      });
      return future.wait();
    }
  });
});

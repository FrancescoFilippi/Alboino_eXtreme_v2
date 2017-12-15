import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './main.html';

// Template body generale. onRendered() -> quando il body è pronto
Template.body.onRendered(function(){ 
  // Home page menu
  $(document)
    .ready(function() {
      // fix menu when passed
      $('.masthead')
        .visibility({
          once: false,
          onBottomPassed: function() {
            $('.fixed.menu').transition('fade in');
          },
          onBottomPassedReverse: function() {
            $('.fixed.menu').transition('fade out');
          }
        })
      ;
      // create sidebar and attach to menu open
      $('.ui.sidebar')
        .sidebar('attach events', '.toc.item')
      ;
    })
  ;
})

// Template Scanner.
Template.scanner.onRendered(function(){
  $(function(){
    $("#test").click(function(){
      $(".test").modal('show');
    });
    $(".test").modal({
      closable: true
    });
  });
});
Template.scanner.events({
  // click sul bottone #scanner, lancia il metodo server 'runCode' che runna il comando shell
  // Aggiungere estensione per il file.
  'click #scannerButton': function (event, template) {
    event.preventDefault();
    var date = new Date();
    var fileName = (event.target.inputNomeFile.value) ? event.target.inputNomeFile.value : 'hpscan-' + date.valueOf();
    var emailAddress = event.target.inputEmailAddress.value;
    var attachments = {
      fileName: fileName,
      filePath: '/home/aulettarappresentanti/meteor/Alboino_eXtreme_v2/public/scanner' + fileName + '.png'
    };
    
    Meteor.call('runCode', fileName, function (err, response) {
      console.log(response);
      Meteor.call('sendMail', emailAddress, "postmaster@sandboxe3362d49940a40608beb65efd5554f84.mailgun.org", "HP-SCAN: " + fileName, attachments);
    });
  }
});

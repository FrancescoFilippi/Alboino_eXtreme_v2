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
Template.scanner.events({
  // click sul bottone #scanner, lancia il metodo server 'runCode' che runna il comando shell
  // Aggiungere estensione per il file.
  'click #scannerButton': function (event, template) {
    event.preventDefault();
    var fileName;

    if(event.target.inputFileName.value){
      fileName = event.target.inputFileName.value;
    }
    if(!event.target.inputFileName.value){
      fileName = 'hpscan' + date.valueOf();
    } 
    
    Meteor.call('runCode', fileName, function (err, response) {
      console.log(response);
    });
  }
});

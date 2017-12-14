import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './main.html';

// Template body generale. Va sistemato tutto in sotto-template.
Template.body.events({
  // click sul bottone #scanner, lancia il metodo server 'runCode' che runna il comando shell
  // Aggiungere fileName e estensione per il file. Va fatto in un template a parte.
  'click #scanner': function () {
    Meteor.call('runCode', function (err, response) {
      console.log(response);
    });
  }
});

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

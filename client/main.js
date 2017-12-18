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

// // Template Scanner.
Template.scanner.events({

  'click #openScannerAndEmailButton': function(event, template){
    event.preventDefault();
    $(function(){
      $(".scannerAndMailModal").modal('show');
      $(".scannerAndMailModal").modal({
        closable: true,
        onApprove: function(){
          var date = new Date();
          var fileName = ($('input[name="inputNomeFile"]').val()) ? ($('input[name="inputNomeFile"]').val()) : 'hpscan-' + date.valueOf();
          var emailAddress = ($('input[name="inputEmailAddress"]').val());
          var attachments = {
            filename: fileName + '.png',
            path: '/home/aulettarappresentanti/meteor/Alboino_eXtreme_v2/public/scanner/' + fileName + '.png',
            //contentType: 'png'
          };
          Meteor.call('hpscan', fileName, function (err, response) {
            console.log(response);
            Meteor.call('sendMail', emailAddress, "postmaster@sandboxe3362d49940a40608beb65efd5554f84.mailgun.org", "HP-SCAN: " + fileName, "" ,attachments, 
            function(err, response){
              console.log(response);
            });
          });
          console.log(fileName, emailAddress, attachments);
        }
      });
    });
  }
});

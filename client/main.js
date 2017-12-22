import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Meteor } from 'meteor/meteor';

import './main.html';

// Template body generale. onRendered() -> quando il body è pronto
Template.body.onRendered(function(){ 
  // Home page menu
  // $(document)
  //   .ready(function() {
  //     // fix menu when passed
  //     $('.masthead')
  //       .visibility({
  //         once: false,
  //         onBottomPassed: function() {
  //           $('.fixed.menu').transition('fade in');
  //         },
  //         onBottomPassedReverse: function() {
  //           $('.fixed.menu').transition('fade out');
  //         }
  //       })
  //     ;
  //     // create sidebar and attach to menu open
  //     $('.ui.sidebar')
  //       .sidebar('attach events', '.toc.item')
  //     ;
  //   })
  // ;
  StarWars = (function() {
  
    /* 
     * Constructor
     */
    function StarWars(args) {
      // Context wrapper
      this.el = $(args.el);
      
      // Audio to play the opening crawl
      this.audio = this.el.find('audio').get(0);
      
      // Start the animation
      this.start = this.el.find('.start');
      
      // The animation wrapper
      this.animation = this.el.find('.animation');
      
      // Remove animation and shows the start screen
      this.reset();
  
      // Start the animation on click
      this.start.bind('click', $.proxy(function() {
        this.start.hide();
        this.audio.play();
        this.el.append(this.animation);
      }, this));
      
      // Reset the animation and shows the start screen
      $(this.audio).bind('ended', $.proxy(function() {
        this.audio.currentTime = 0;
        this.reset();
      }, this));
    }
    
    /*
     * Resets the animation and shows the start screen.
     */
    StarWars.prototype.reset = function() {
      this.start.show();
      this.cloned = this.animation.clone(true);
      this.animation.remove();
      this.animation = this.cloned;
    };
  
    return StarWars;
  })();
  
  new StarWars({
    el : '.starwars'
  });
})

// // Template Scanner.
// Template.scanner.events({

//   'click #openScannerAndEmailButton': function(event, template){
//     event.preventDefault();
//     var sendMail;
//     $(function(){
//       $('#ScanningAndSendingProgressBar').progress();
//       $(".scannerAndMailModal").modal('show');
//       $('#mailConfirm').checkbox({
//         onChecked: function(){
//           $('#emailField').removeClass("error disabled");
//           sendMail = true;
//         },
//         onUnchecked: function(){
//           $('#emailField').addClass("error disabled");
//           sendMail = false;
//         }
//       });
//       $(".scannerAndMailModal").modal({
//         closable: true,
//         onApprove: function(){
//           var date = new Date();
//           var fileName = ($('input[name="inputNomeFile"]').val()) ? ($('input[name="inputNomeFile"]').val()) : 'hpscan-' + date.valueOf();
//           var emailAddress = ($('input[name="inputEmailAddress"]').val());
//           var attachments = {
//             filename: fileName + '.png',
//             path: '/home/aulettarappresentanti/meteor/Alboino_eXtreme_v2/public/scanner/' + fileName + '.png',
//             //contentType: 'png'
//           };
//           // incrementProgressBar('#ScanningAndSendingProgressBar');
//           Meteor.call('hpscan', fileName, function (err, response) {
//             console.log(response);
//             if(sendMail == true){
//               Meteor.call('sendMail', emailAddress, "postmaster@sandboxe3362d49940a40608beb65efd5554f84.mailgun.org", "HP-SCAN: " + fileName, "No ma, brava Fede!" ,attachments, 
//               function(err, response){
//                 console.log(err);
//               });
//             }
//           });
//           console.log(fileName, emailAddress, attachments);
//         }
//       });
//     });
//   }
// });

//$("#chart").attr("data-percent", value.toString());
// function incrementProgressBar(elem){
//   var secs = 1000 * 60;
//   var count = 0;
//   setInterval(function() {
//       var $progressBar = $(elem);
//       count += 10;
//       $progressBar.attr("data-percent", count.toString());
//   }, secs);
// }

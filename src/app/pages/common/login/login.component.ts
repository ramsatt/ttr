import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $;
declare var TweenMax;
declare var cleanUI;
declare var Linear;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username : any;
  password : any;

  constructor( public router:Router) { }

  ngOnInit() {
    $(function() {

      // Form Validation
      $('#form-validation').validate({
        submit: {
          settings: {
            inputContainer: '.form-group',
            errorListClass: 'form-control-error',
            errorClass: 'has-danger'
          }
        }
      });

      // Show/Hide Password


      // Add class to body for change layout settings
      $('body').addClass('single-page single-page-inverse');

      // Set Background Image for Form Block
      function setImage() {
        var imgUrl = $('.page-content-inner').css('background-image');

        $('.blur-placeholder').css('background-image', imgUrl);
      };

      function changeImgPositon() {
        var width = $(window).width(),
            height = $(window).height(),
            left = - (width - $('.single-page-block-inner').outerWidth()) / 2,
            top = - (height - $('.single-page-block-inner').outerHeight()) / 2;


        $('.blur-placeholder').css({
          width: width,
          height: height,
          left: left,
          top: top
        });
      };

      setImage();
      changeImgPositon();

      $(window).on('resize', function(){
        changeImgPositon();
      });

      // Mouse Move 3d Effect
      var rotation = function(e){
        var perX = (e.clientX/$(window).width())-0.5;
        var perY = (e.clientY/$(window).height())-0.5;
        TweenMax.to(".effect-3d-element", 0.4, { rotationY:15*perX, rotationX:15*perY,  ease:Linear.easeNone, transformPerspective:1000, transformOrigin:"center" })
      };

      if (!cleanUI.hasTouch) {
        $('body').mousemove(rotation);
      }

    });
  }

  login()
  {
    if(this.username == 'admin@mcm.com' && this.password=='123456')
    {
      this.router.navigate(['admindash']);
    }
  }

}

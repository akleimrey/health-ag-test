import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $( document ).ready(function() {
      $('#slideArrowLeft').click(function(){
        if ($("#splashSliderWrapper").hasClass("slideTwoIsActive")) {
          $("#splashSliderWrapper").addClass('slideOneIsActive')
          $("#splashSliderWrapper").removeClass('slideTwoIsActive')
          $('#slideArrowLeft').fadeOut();
          $('.sliderButton').each(function(){
            $(this).removeClass('active');
          })
          $('#sliderButtonOne').addClass('active');
        }
        else if ($("#splashSliderWrapper").hasClass("slideThreeIsActive")) {
          $("#splashSliderWrapper").addClass('slideTwoIsActive')
          $("#splashSliderWrapper").removeClass('slideThreeIsActive')
          $('#slideArrowRight').fadeIn();
          $('.sliderButton').each(function(){
            $(this).removeClass('active');
          })
          $('#sliderButtonTwo').addClass('active');
        }
      })
      $('#slideArrowRight').click(function(){
        if ($("#splashSliderWrapper").hasClass("slideTwoIsActive")) {
          $("#splashSliderWrapper").addClass('slideThreeIsActive')
          $("#splashSliderWrapper").removeClass('slideTwoIsActive')
          $('#slideArrowRight').fadeOut();
          $('.sliderButton').each(function(){
            $(this).removeClass('active');
          })
          $('#sliderButtonThree').addClass('active');
        }
        // else if ($("#splashSliderWrapper").hasClass("slideThreeIsActive")) {
        //   $("#splashSliderWrapper").addClass('slideTwoIsActive')
        //   $("#splashSliderWrapper").removeClass('slideThreeIsActive')
        //   $('#sliderButtonTwo').addClass('active');
        // }
        else if ($("#splashSliderWrapper").hasClass("slideOneIsActive")) {
          $("#splashSliderWrapper").addClass('slideTwoIsActive')
          $("#splashSliderWrapper").removeClass('slideOneIsActive')
          $('#slideArrowLeft').fadeIn();
          $('.sliderButton').each(function(){
            $(this).removeClass('active');
          })
          $('#sliderButtonTwo').addClass('active');
        }
      })
    });
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import flatpickr from 'flatpickr';
import { German } from 'flatpickr/dist/l10n/de';

@Component({
  selector: 'app-vorzeitige-abloesung',
  templateUrl: './vorzeitige-abloesung.component.html',
  styleUrls: ['./vorzeitige-abloesung.component.scss']
})
export class VorzeitigeAbloesungComponent implements OnInit {

  @ViewChild('datePicker') datePicker;

  constructor() { }

  ngOnInit(): void {
    flatpickr('.datePicker', { locale: German, inline: true });
    // $(window).load(function(){
    //    $('div.flatpickr-calendar').css({
    //     'margin ' : 'auto',
    //  });
    //     console.log( "ready!" );
    // });
  }

}

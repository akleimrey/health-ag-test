import { Component, OnInit } from '@angular/core';
import flatpickr from 'flatpickr';
import { German } from 'flatpickr/dist/l10n/de';

@Component({
  selector: 'app-select-date',
  templateUrl: './select-date.component.html',
  styles: [
  ]
})
export class SelectDateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    flatpickr('.datePicker', { locale: German, inline: true });

  }

}

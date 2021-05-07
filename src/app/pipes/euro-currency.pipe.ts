import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'euroCurrency'
})
export class EuroCurrencyPipe implements PipeTransform {

  /* Pipes sind aehnlich wie 'Directives', sind aber dazu da um Werte auf dem Template umzuwandeln.
  Angular CLI schenkt uns das Setup durch die @Pipe Annotation und macht Pipes im ganzen Projekt aufrufbar.
  Das Interface 'PipeTransform' hat die Methode 'transform'. Man kann auch zusätzlich optional ein Array<T> Wert mitgeben, für z.B.
  weitere Konfigurationen. Fuer einfache Geschichten, reicht es bloss den Wert 'value' zu nutzen.  */
  transform(value: number): string {
    return new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(value);
  }

}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BrowserStorageService {

  readonly filterKey = 'INVOICE_FILTER';

  constructor() { }

  storeKeyValueInLocalStorage(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  storeKeyValueInSessionStorage(key: string, value: string): void {
    sessionStorage.setItem(key, value);
  }

  getLocalStorageKeyValue(key: string): string {
    return localStorage.getItem(key);
  }

  getSessionStorageKeyValue(key: string): string {
    return sessionStorage.getItem(key);
  }

}

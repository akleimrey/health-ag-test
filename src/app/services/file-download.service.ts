import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileDownloadService {

  constructor() { }

  /**
   * Programmatically triggers a download of a base64 file in a browser. It uses the fetch API to transform
   * the base64 string received into a BLOB
   * Triggering a download by using the base64 in the href (03.03.2021) is triggering a "Multiple File
   * Download" warning
   * @param base64File base64 encoded file
   */
   static async downloadPdf(base64File: string): Promise<void> {
    // Construct the base64Url
    const file = 'data:application/pdf;base64,' + base64File;
    const base64Response = await fetch(file);
    const blob = await base64Response.blob();

    // Create the link element
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = 'invoice.pdf';

    // Trigger the mouseclick
    downloadLink.dispatchEvent(new MouseEvent('click', { bubbles: true, view: window }));

    // Cleanup
    window.URL.revokeObjectURL(downloadLink.href);
    downloadLink.remove();
  }

  /**
   * Programmatically triggers a download of a base64 file in a browser. It uses the fetch API to transform
   * the base64 string received into a BLOB
   * Triggering a download by using the base64 in the href (03.03.2021) is triggering a "Multiple File
   * Download" warning
   * @param base64File base64 encoded file
   */
  async downloadPdf(base64File: string): Promise<void> {
    // Construct the base64Url
    const file = 'data:application/pdf;base64,' + base64File;
    const base64Response = await fetch(file);
    const blob = await base64Response.blob();

    // Create the link element
    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = 'invoice.pdf';

    // Trigger the mouseclick
    downloadLink.dispatchEvent(new MouseEvent('click', { bubbles: true, view: window }));

    // Cleanup
    window.URL.revokeObjectURL(downloadLink.href);
    downloadLink.remove();
  }
}

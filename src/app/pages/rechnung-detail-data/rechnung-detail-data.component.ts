import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { HealthAgApiService } from '../../services/health-ag-api.service';

@Component({
  selector: 'app-rechnung-detail-data',
  templateUrl: './rechnung-detail-data.component.html',
  styleUrls: ['./rechnung-detail-data.component.scss']
})
export class RechnungDetailDataComponent implements OnInit {

  objectPdfData: string;

  constructor(private api: HealthAgApiService, private domsanitizer: DomSanitizer) { }

  ngOnInit(): void {
    this.api.invoicePdf.subscribe((resp: any) => {
      console.log(resp.body);
      this.objectPdfData = resp.body.documentContentB64;
    });
  }

  get invoiceBase64File(): SafeResourceUrl {
    return this.domsanitizer.bypassSecurityTrustResourceUrl(`data:application/pdf;base64,${this.objectPdfData}`);
  }

}

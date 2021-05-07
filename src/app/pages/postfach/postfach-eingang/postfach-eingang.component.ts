import { Component, OnInit } from '@angular/core';
import { PostBoxFolder } from 'src/app/enum/postbox.folder';
import { IMessages } from 'src/app/interfaces/messages';
import { HealthAgApiService } from 'src/app/services/health-ag-api.service';

@Component({
  selector: 'app-postfach-eingang',
  templateUrl: './postfach-eingang.component.html',
  styles: [
  ]
})
export class PostfachEingangComponent implements OnInit {

  constructor(private service: HealthAgApiService) { }

  messages: IMessages[] = [];

  ngOnInit(): void {

    this.retrieveMessages();
  }

  retrieveMessages(): void {
    this.service.triggerMessagesReceiveAllInbox(PostBoxFolder.INBOX).subscribe((resp: any) => {
      console.log(resp);
      this.messages = resp;
    });
  }

}

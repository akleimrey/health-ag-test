import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PostBoxFolder } from 'src/app/enum/postbox.folder';
import { IMessages, IPostMessage } from 'src/app/interfaces/messages';
import { HealthAgApiService } from 'src/app/services/health-ag-api.service';
import { BrowserUtil } from 'src/app/util/browser.util';

@Component({
  selector: 'app-postfach-nachricht',
  templateUrl: './postfach-nachricht.component.html',
  styleUrls: ['./postfach-nachricht.component.scss']
})
export class PostfachNachrichtComponent implements OnInit {

  private messageId: string;
  private message: IMessages;
  private isResponseToMessage = false;
  private responseForm: FormGroup;

  constructor(private route: ActivatedRoute, private service: HealthAgApiService, private formBuilder: FormBuilder) {
    this._messageId = this.route.snapshot.paramMap.get('id');
    this.responseForm = this.createResponseForm();
  }

  createResponseForm(): FormGroup {
    return this.formBuilder.group({
      messageBody: [''],
      messageRead: [''],
      messageSubject: [''],
      invoiceReferences: [''],
      postboxFolder: [PostBoxFolder.SENT],
      messageAttachment: [null]
    });
  }

  ngOnInit(): void {
    this.getMessage();
  }

  getMessage(): void {
    this.service.triggerMessagesOneDetailMessage(this._messageId).subscribe((resp: any) => {
      this._message = resp;
      console.log(this._message);
    });
  }

  sendMessage() {
    const messageReplyBody = BrowserUtil.sanitizeHtml(document.querySelector('.custom-textfield').innerHTML);

    const message: IPostMessage = {
      messageBody: messageReplyBody,
      messageSubject: this._responseForm.get('messageSubject').value,
      invoiceReferences: this._responseForm.get('invoiceReferences').value,
      messageAttachment: null,
      messageRead: false,
      postboxFolder: PostBoxFolder.SENT
    };

    console.log(message);

    this.service.triggerSendMessage(message).subscribe((resp: any) => {
      console.log(this._message);
    });
  }

  switchToResponse(): void {
    if (this.isResponseToMessage) {
      this._isResponseToMessage = false;
    } else {
      this._isResponseToMessage = true;

      this._responseForm.get('messageBody').patchValue(this.message.messageBody);
      this._responseForm.get('messageSubject').patchValue(`AW: ${this.message.messageSubject}`);
      this._responseForm.get('invoiceReferences').patchValue(this.message.invoiceReferences);
      this._responseForm.get('messageAttachment').patchValue('');
    }
  }

  get _responseForm(): FormGroup {
    return this.responseForm;
  }

  get _isResponseToMessage(): boolean {
    return this.isResponseToMessage;
  }

  set _isResponseToMessage(flag: boolean) {
    this.isResponseToMessage = flag;
  }

  set _messageId(msgId: string) {
    this.messageId = msgId;
  }

  get _messageId() {
    return this.messageId;
  }

  set _message(message: IMessages) {
    this.message = message;
  }

  get _message() {
    return Object.assign({}, this.message) ;
  }
}

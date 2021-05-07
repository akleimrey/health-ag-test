import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { HealthAgApi } from '../customizing/health-ag.api';
import { UserFieldLock } from '../enum/lock.objects';
import { PostBoxFolder } from '../enum/postbox.folder';
import { IInvoice } from '../interfaces/invoice';
import { IMessages, IPostMessage } from '../interfaces/messages';
import { IUser } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class HealthAgApiService {

  private readonly LOCAL_STORAGE_USER_TOKEN = 'USER_TOKEN';
  private readonly SESSION_STORAGE_INVOICE_NO = 'INVOICE_NO';

  constructor(private httpClient: HttpClient) {
  }

  public triggerAuthentication(credentials: object): Observable<any> {
    return this.httpClient.post(HealthAgApi.LOGIN(), credentials);
  }

  public triggerAuthenticationViaInvoice(credentials: object): Observable<any> {
    return this.httpClient.post(HealthAgApi.LOGIN(), credentials);
  }

  public triggerRegistrationRequest(registrationObject: object): Observable<any> {
    return this.httpClient.post(HealthAgApi.REGISTRATION(),
      registrationObject, { headers: this.authHeaderInvoiceNo });
  }

  public triggerReceiveInvoiceForInvoiceUser(): Observable<any> {
    return this.httpClient.get(
      HealthAgApi.INVOICES_GET_ONE(sessionStorage.getItem(this.SESSION_STORAGE_INVOICE_NO)),
      { headers: this.authHeaderInvoiceNo });
  }

  public triggerReceiveAllInvoicesForUser(): Observable<IInvoice[]> {
    return this.httpClient.get<IInvoice[]>(HealthAgApi.INVOICES_GET_ALL(this.getUserName), { headers: this.authHeaderUser });
  }

  public triggerMessagesReceiveAllInbox(folder: PostBoxFolder): Observable<IMessages[]> {
    return this.httpClient.get<IMessages[]>(HealthAgApi.MESSAGES_GET_ALL(this.getUserName, folder), { headers: this.authHeaderUser });
  }

  public triggerMessagesOneDetailMessage(messageId: string): Observable<any> {
    return this.httpClient.get(HealthAgApi.MESSAGES_SINGLE(messageId), { headers: this.authHeaderUser });
  }

  public triggerSendMessage(message: IPostMessage): Observable<any> {
    return this.httpClient.post(HealthAgApi.MESSAGES_SEND_MESSAGE(this.getUserName), message, { headers: this.authHeaderUser });
  }

  public getUser() {
    return this.httpClient.get(HealthAgApi.GET_USER(this.getUserName), { headers: this.authHeaderUser });
  }

  public updateUser(user: IUser, lock: UserFieldLock) {
    return this.httpClient.put(HealthAgApi.UPDATE_USER(lock), user, { headers: this.authHeaderUser });
  }

  public get invoicePdf(): Observable<any> {
    return this.httpClient.get('https://actum-sandbox.de/hag-patient-portal-service/hag/api/v1/invoices/document/2347824424',
      { observe: 'response' });
  }

  public get token() {
    return localStorage.getItem(this.LOCAL_STORAGE_USER_TOKEN);
  }

  public get getUserName() {
    return new JwtHelperService().decodeToken(localStorage.getItem(this.LOCAL_STORAGE_USER_TOKEN))?.sub;
  }

  public get authHeaderInvoiceNo() {
    return new HttpHeaders({ Authorization: `Bearer ${localStorage.getItem(this.LOCAL_STORAGE_USER_TOKEN)}`, 'Content-Type': 'application/json' });
  }

  public get authHeaderUser() {
    return new HttpHeaders({ Authorization: `Bearer ${localStorage.getItem(this.LOCAL_STORAGE_USER_TOKEN)}`, 'Content-Type': 'application/json' });
  }
}

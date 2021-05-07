import { PostBoxFolder } from '../enum/postbox.folder';

export class HealthAgApi {

  private static readonly baseURL = 'https://actum-sandbox.de/hag-patient-portal-service/hag/api';

  public static LOGIN(): string {
    return `${this.baseURL}/auth`;
  }

  public static LOGIN_VIA_INVOICE(): string {
    return `${this.baseURL}/auth`;
  }

  public static REGISTRATION(): string {
    return `${this.baseURL}/v1/users/create`;
  }

  public static GET_USER(userName: string): string {
    return `${this.baseURL}/v1/users/${userName}`;
  }

  public static UPDATE_USER(fieldLock: string): string {
    return `${this.baseURL}/v1/users/update?userFieldLock=${fieldLock}`;
  }

  public static INVOICES_GET_ALL(username: string): string {
    return `${this.baseURL}/v1/invoices/all/${username}`;
  }

  public static INVOICES_GET_ONE(invoiceId: string): string {
    return `${this.baseURL}/v1/invoices/${invoiceId}`;
  }

  public static MESSAGES_GET_ALL(username: string, folder: PostBoxFolder): string {
    return `${this.baseURL}/v1/messages?username=${username}&folder=${folder}`;
  }

  public static MESSAGES_SINGLE(messageId: string): string {
    return `${this.baseURL}/v1/messages/${messageId}`;
  }

  public static MESSAGES_SEND_MESSAGE(username: string): string {
    return `${this.baseURL}/v1/messages/${username}`;
  }

}

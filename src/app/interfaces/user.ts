import { IAddress } from './address';
import { IBankInformation } from './bank-information';

export interface IUser {

  recipientNumber: number | string;
  username: string;
  firstName: string;
  lastName: string;
  activated: boolean;
  dateOfBirth: Date;
  bankInformation: IBankInformation;
  address: IAddress;
  phoneNumber: string;
  email: string;
  sendInvoicesDigitally?: boolean;
  // Spezialfall. Wir wollen im Frontend kein Password zurück kriegen.
  pwd?: string;
  //  Password Repeat ist hierbei auch nicht als Feld anzusehen, sondern sie müssen beide gegen das Backend verglichen werden.
  pwdRepeat?: string;
  securityQuestion: string;
  securityQuestionResponse?: string;
  accountLocked: boolean;
  lockedFields: string[];
}




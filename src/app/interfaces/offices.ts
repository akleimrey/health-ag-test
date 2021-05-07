import { IAddress } from './address';
import { IBankInformation } from './bank-information';

export interface IOffice {

  name: string;
  officeWebPage: string;
  phoneNo: string;
  officeBankInformation?: IBankInformation;
  address: IAddress;
  officeEmail: string;
}

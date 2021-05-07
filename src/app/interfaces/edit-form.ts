import { IAddress } from './address';
import { IBankInformation } from './bank-information';
import { IOffice } from './offices';
import { IUser } from './user';

export interface EditForm {
  saveChanges(formValue?: IUser | IAddress | IBankInformation | IOffice | string | object);
}

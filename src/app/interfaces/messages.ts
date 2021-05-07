import { PostBoxFolder } from '../enum/postbox.folder';
import { IMessageAttachment } from './message.attachment';

export interface IMessages {
  created: Date;
  messageCreateDate?: Date;
  messageReadDate?: Date;
  id: string | number;
  messageBody: string;
  messageSubject: string;
  invoiceReferences: string; // String separated by ;
  postboxFolder: PostBoxFolder;
  messageRead: boolean;
  messageAttachment: IMessageAttachment;
}

export interface IPostMessage {
  id?: string;
  messageBody: string;
  messageSubject: string;
  invoiceReferences: string;
  postboxFolder: PostBoxFolder;
  messageRead: boolean;
  messageAttachment: IMessageAttachment;
}

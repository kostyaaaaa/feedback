import {
  AutoIncrement,
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  IsUrl,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import { MESSAGE_STATUSES } from '../constants';
import Chat from './Chat';
import User from './User';

@Table
class Message extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => User)
  @Column
  authorId: number;

  @ForeignKey(() => Chat)
  @Column
  chatId: number;

  @IsUrl
  @Column
  imageUrl: string;

  @Column
  text: string;

  @Column(DataType.ENUM(...Object.values(MESSAGE_STATUSES)))
  status: string;

  @BelongsTo(() => Chat)
  chat: Chat;

  @BelongsTo(() => User)
  author: User;
}

export default Message;

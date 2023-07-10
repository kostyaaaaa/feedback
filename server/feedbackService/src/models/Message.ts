import {
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  Column,
  ForeignKey,
  IsUrl,
  DataType,
  BelongsTo,
} from 'sequelize-typescript';
import User from './User';
import Chat from './Chat';
import { MESSAGE_STATUSES } from '../constants';

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

Message.sync();

export default Message;

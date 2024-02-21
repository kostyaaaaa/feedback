import {
  AllowNull,
  AutoIncrement,
  BelongsToMany,
  Column,
  HasMany,
  Model,
  PrimaryKey,
  Table,
} from 'sequelize-typescript';

import Message from './Message';
import User from './User';
import UserChat from './UserChat';

@Table
class Chat extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @HasMany(() => Message, { onDelete: 'CASCADE' })
  messages: Message[];

  @BelongsToMany(() => User, { onDelete: 'CASCADE', through: () => UserChat })
  users: User[];

  @AllowNull(false)
  @Column
  name: string;
}

export default Chat;

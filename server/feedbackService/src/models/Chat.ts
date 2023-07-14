import {
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  Column,
  HasMany,
  BelongsToMany,
  AllowNull,
} from 'sequelize-typescript';
import Message from './Message';
import UserChat from './UserChat';
import User from './User';

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

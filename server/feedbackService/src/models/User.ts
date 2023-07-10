import {
  Table,
  Column,
  Model,
  AllowNull,
  PrimaryKey,
  AutoIncrement,
  Unique,
  DataType,
  IsEmail,
  IsUrl,
  Length,
  Default,
  HasMany,
  BelongsToMany,
} from 'sequelize-typescript';
import Feedback from './Feedback';
import Message from './Message';
import Chat from './Chat';
import UserChat from './UserChat';
import { USER_GENDERS, USER_STATUSES, USER_ROLES } from '../constants';
import Place from './Place';

@Table
class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @HasMany(() => Message, { onDelete: 'NO ACTION' })
  messages: Message[];

  @HasMany(() => Feedback, { onDelete: 'NO ACTION' })
  feedbacks: Feedback[];

  @HasMany(() => Place, { onDelete: 'NO ACTION' })
  ownPlaces: Place[];

  @BelongsToMany(() => Chat, { onDelete: 'CASCADE', through: () => UserChat })
  chats: Chat[];

  @AllowNull(false)
  @Column
  firstName: string;

  @AllowNull(false)
  @Column
  lastName: string;

  @Column(DataType.VIRTUAL)
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    throw new Error('Do not try to set the `fullName` value!');
  }

  @AllowNull(false)
  @Unique
  @IsEmail
  @Column
  email: string;

  @AllowNull(false)
  @Length({ min: 6 })
  @Column
  password: string;

  @Default(USER_ROLES.USER)
  @Column(DataType.ENUM(...Object.values(USER_ROLES)))
  role: string;

  @IsUrl
  @Column
  profileUrl: string;

  @AllowNull(false)
  @Column(DataType.ENUM(...Object.values(USER_GENDERS)))
  gender: string;

  @Default(USER_STATUSES.ACTIVE)
  @Column(DataType.ENUM(...Object.values(USER_STATUSES)))
  status: string;
}

User.sync();

export default User;

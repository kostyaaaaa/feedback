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
} from 'sequelize-typescript';

@Table
class User extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @AllowNull(false)
  @Unique
  @IsEmail
  @Column
  email: string;

  @AllowNull(false)
  @Length({ min: 6 })
  @Column
  password: string;

  @IsUrl
  @Column
  profileUrl: string;

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
  @Column(DataType.ENUM('female', 'male'))
  gender: string;
}

export default User;

import {
  Model,
  Table,
  PrimaryKey,
  AutoIncrement,
  Column,
  ForeignKey,
  DataType,
  Min,
  Max,
  BelongsTo,
} from 'sequelize-typescript';
import User from './User';
import Place from './Place';

@Table
class Feedback extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @ForeignKey(() => User)
  @Column
  authorId: number;

  @ForeignKey(() => Place)
  @Column
  placeId: number;

  @Min(1)
  @Max(5)
  @Column(DataType.FLOAT)
  rate: number;

  @Column
  text: string;

  @Column({ type: DataType.ARRAY(DataType.STRING), defaultValue: [] })
  photos: Array<string>;

  @BelongsTo(() => User)
  author: User;

  @BelongsTo(() => Place)
  place: Place;
}

export default Feedback;

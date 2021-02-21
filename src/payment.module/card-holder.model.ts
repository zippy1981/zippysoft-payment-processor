import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'card_holders' })
export class CardHolder {
  @ApiProperty({ description: 'Id column' })
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty()
  @Column()
  public lastName: string;

  @ApiProperty()
  @Column()
  public givenName: string;

  @ApiProperty()
  @Column()
  public middleInitial: string;
}

import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Address } from './address.model';

import { CardHolder } from './card-holder.model';

@Entity({ name: 'card_infos' })
export default class CardInfo {
  @ApiProperty({ description: 'Id column' })
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty()
  @OneToOne(() => CardHolder)
  @JoinColumn()
  public holder: CardHolder;

  @ApiProperty()
  @OneToMany(() => Address, (billingAddr) => billingAddr.cardInfo)
  public billingAddresses: Address[];
}

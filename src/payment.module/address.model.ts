import { ApiProperty } from '@nestjs/swagger';
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import CardInfo from './card-info.model';

@Entity({ name: 'addresses' })
export class Address {
  @ApiProperty({ description: 'Id column' })
  @PrimaryGeneratedColumn()
  public id: number;

  @ApiProperty({ description: 'Address field' })
  @Column()
  public address: string;

  @ApiProperty({ description: 'Address2 field' })
  @Column()
  public address2?: string;

  @ApiProperty({ description: 'City field' })
  @Column()
  public city: string;

  @ApiProperty({ description: 'State field' })
  @Column()
  public state: string;

  @ApiProperty({ description: 'Zip field' })
  @Column()
  public zip: string;

  @ManyToOne(() => CardInfo, (cardInfo) => cardInfo.billingAddresses)
  public cardInfo: CardInfo;
}

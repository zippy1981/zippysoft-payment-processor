import Address from './address.model';
import CardHolder from './card-holder.model';

export class CardInfo {
  holder: CardHolder;
  billingAddresses: Address[];
}

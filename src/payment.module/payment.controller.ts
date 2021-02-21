import { Controller, Get } from '@nestjs/common';
import CardInfo from './card-info.model';

@Controller('payments')
export class PaymentController {
  @Get('cards')
  getCardHolders(): CardInfo[] {
    return [];
  }
}

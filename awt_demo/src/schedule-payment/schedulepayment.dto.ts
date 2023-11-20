// src/schedule-payments/schedule-payment.dto.ts
import { IsDate, IsString, IsNumber } from 'class-validator';

export class SchedulePaymentDto {

  @IsNumber()
  referenceNumber:number;
  
  @IsString()
  companyName: string;

  @IsDate()
  paymentDate: Date;
  @IsNumber()
  amount: number;
}

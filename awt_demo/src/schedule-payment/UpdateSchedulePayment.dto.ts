// src/schedule-payments/schedule-payment.dto.ts
import { IsDate, IsString, IsNumber,IsOptional} from 'class-validator';

export class UpdateSchedulePaymentDto {

  @IsString()
  @IsOptional()
  referenceNumber:string;
  
  @IsString()
  @IsOptional()
  companyName: string;

  @IsDate()
  @IsOptional()
  paymentDate: Date;

  @IsNumber()
  @IsOptional()
  amount: number;
}

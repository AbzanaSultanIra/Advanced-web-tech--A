
import { IsDate, IsString, IsNumber } from 'class-validator';

export class MonthlyPurchesesDto {


  vendorName: string;

  @IsNumber()
  referenceNumber: number;

  @IsString()
  productName: string;
 
  @IsNumber()
  productQuantity: number;

  @IsNumber()
  productCost: number;

  @IsDate()
  purchaseDate: Date;
}



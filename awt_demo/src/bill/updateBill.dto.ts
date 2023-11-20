import { IsOptional } from 'class-validator';
 
export class UpdateBillDto {
  @IsOptional()
  referenceNumber: string;
  @IsOptional()
  company: string;
  @IsOptional()
  
  purchaseDate: Date;
  @IsOptional()
  dueDate: Date;
  @IsOptional()
  totalAmoun: number;
  @IsOptional()
  paidAmount:number;
  @IsOptional()
  pendingAmount: number
}
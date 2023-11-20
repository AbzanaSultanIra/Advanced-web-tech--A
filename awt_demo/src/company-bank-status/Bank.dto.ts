// src/bank-connection/dto/connect-bank.dto.ts
import { IsString, IsNumber } from 'class-validator';

export class BankStatusDto {
     
    @IsNumber()
    accountId: number;
    
    @IsString()
    BankName: string;
  
    @IsNumber()
    companyLoan: number;

    accountStatus: 'active' | 'disabled';
  }
  
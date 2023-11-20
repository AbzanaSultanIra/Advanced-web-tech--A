// src/bank-connection/bank-connection.controller.ts
import { Controller, Post, Get, Body } from '@nestjs/common';
import { CompanyBankStatusService } from './company-bank-status.service';
import { Bank } from 'src/entity/Bank.entity';
import { BankStatusDto } from './Bank.dto';

@Controller('Bank')
export class CompanyBankStatusController {
  constructor(private readonly companybankservice:CompanyBankStatusService) {}

  @Post()
  async connectBank(@Body() BankstatusDto: BankStatusDto): Promise<Bank> {
    return this.companybankservice.connectBank(BankstatusDto);
  }

  @Get('connect')
  async getAllBankConnections(): Promise<Bank[]> {
    return this.companybankservice.getAllBankinfo();
  }
}

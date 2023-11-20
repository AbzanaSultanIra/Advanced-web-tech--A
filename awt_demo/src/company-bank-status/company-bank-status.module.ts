import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CompanyBankStatusController } from './company-bank-status.controller';
import { CompanyBankStatusService } from './company-bank-status.service';
import { Bank } from 'src/entity/Bank.entity';

@Module({
 
  imports: [TypeOrmModule.forFeature([Bank])],
  controllers: [CompanyBankStatusController],
  providers: [CompanyBankStatusService]
})
export class CompanyBankStatusModule {}

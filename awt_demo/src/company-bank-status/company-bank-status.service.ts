// src/bank-connection/bank-connection.service.ts
import { Injectable ,NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bank } from 'src/entity/Bank.entity';
import { BankStatusDto } from './Bank.dto';
@Injectable()
export class CompanyBankStatusService {
  constructor(
    @InjectRepository(Bank)
    private readonly BankRepository: Repository<Bank>,
  ) {}

  async connectBank(BankstatusDto:BankStatusDto): Promise<Bank> {
    const Bank = this.BankRepository.create(BankstatusDto);
    return this.BankRepository.save(Bank);
  }

  async getAllBankinfo(): Promise<Bank[]> {
    return this.BankRepository.find();
  }


  
}

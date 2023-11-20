// src/monitor-purchases/monitor-purchases.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Between } from 'typeorm';
import { MonthlyPurchesesDto } from './monthlypurchases.dto';
import { YearlyPurchesesDto } from './yearlypurchases.dto';
import { purchases } from 'src/entity/purchases.entity'; // Assuming your entity is named 'purchases'
import { CreatePurchesesDto } from './createpurcheses.dto';

@Injectable()
export class monitorpurchasesService {
  constructor(
    @InjectRepository(purchases)
    private readonly purchasesRepository: Repository<purchases>,
  ) {}

  async createpurchases(createpurchasesDto:CreatePurchesesDto): Promise<purchases> {

    const purchases = this.purchasesRepository.create(createpurchasesDto)
    return  this.purchasesRepository.save(purchases);
  }
  
   
  async getmonthlypurchase(monthlypurchesesDto:CreatePurchesesDto ): Promise<purchases[]> {
    const monthly = new Date().getMonth() + 1;
    return this.purchasesRepository.find({
      where: {
        purchaseDate: Between(new Date(`${monthly}-01`), new Date(`${monthly + 1}-01`)),
      },
    });
  }

  async getyearlypurchase( yearlypurchesesDto: CreatePurchesesDto): Promise<purchases[]> {
    const yearly = new Date().getFullYear();
    return this.purchasesRepository.find({
      where: {
        purchaseDate: Between(new Date(`${yearly}-01-01`), new Date(`${yearly + 1}-01-01`)),
      },
    });
  }
}

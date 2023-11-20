// src/bill/bill.service.ts
import { Injectable,NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository} from 'typeorm';
import { Bill } from 'src/entity/bill.entity';
import { CreateBillDto } from './bill.dto';


@Injectable()
export class BillService {
  constructor(
    @InjectRepository(Bill)
    private readonly billRepository: Repository<Bill>,
  ) {}

  async getAllBills(): Promise<Bill[]> {
    return await this.billRepository.find();
  }

  async createBill(createBillDto: CreateBillDto): Promise<Bill> {
    const bill = this.billRepository.create(createBillDto);
    return await this.billRepository.save(bill);
  }
  async updateBill(id: number, updateBillDto:CreateBillDto): Promise<Bill> {
    const bill = await this.billRepository.findOne({where:{id}});

    if (!bill) {
      throw new NotFoundException(`ref not found`);
    }

    // Update properties
    bill.referenceNumber = updateBillDto.referenceNumber;
    bill.company = updateBillDto.company;
    bill.purchaseDate = updateBillDto.purchaseDate;
    bill.dueDate = updateBillDto.dueDate;
    bill.totalAmount = updateBillDto.totalAmount;

    return await this.billRepository.save(bill);
  }

  async deleteBill(id: number): Promise<void> {
    const result = await this.billRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`ref not found`);
    }
  } 

  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.billRepository.find({
      where: {
        id: id,
      },
      relations: {
        vendor: true,
        
      
      },
    });
  }
}

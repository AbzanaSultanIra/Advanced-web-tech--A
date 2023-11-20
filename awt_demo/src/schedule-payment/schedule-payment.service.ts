// src/schedule-payments/schedule-payments.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SchedulePayment } from 'src/entity/schedulepayment.entity';
import {  SchedulePaymentDto } from './schedulepayment.dto';


@Injectable()
export class SchedulePaymentService {
  constructor(
    @InjectRepository(SchedulePayment)
    private readonly SchedulePaymentRepository: Repository<SchedulePayment>,
  ) {}

  async getAllSchedulePayment(): Promise<SchedulePayment[]> {
    return this.SchedulePaymentRepository.find();
  }

  async createSchedulePayment(schedulePaymentDto: SchedulePaymentDto): Promise<SchedulePayment> {
    const { referenceNumber,companyName,paymentDate,amount } = schedulePaymentDto;

    const schedulePayment = this.SchedulePaymentRepository.create({

     referenceNumber,
      companyName,
      paymentDate,
      amount,
     
    });

    return this.SchedulePaymentRepository.save(schedulePayment);
  }

  async updateSchedulePayment(id: number, UpdateSchedulePaymentDto:SchedulePaymentDto): Promise<SchedulePayment> {
    const SchedulePayment = await this.SchedulePaymentRepository.findOne({where:{id}});

    if (!SchedulePayment) {
      throw new NotFoundException(`ref not found`);
    }

    // Update properties
    SchedulePayment.referenceNumber = UpdateSchedulePaymentDto.referenceNumber;
    SchedulePayment.companyName =UpdateSchedulePaymentDto.companyName;
    SchedulePayment.paymentDate = UpdateSchedulePaymentDto.paymentDate;
    SchedulePayment.amount = UpdateSchedulePaymentDto.amount;

    return await this.SchedulePaymentRepository.save(SchedulePayment);
  }

  async deleteBill(id: number): Promise<void> {
    const result = await this.SchedulePaymentRepository.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException(`ref not found`);
    }
  }

  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.SchedulePaymentRepository.find({
      where: {
        id: id,
      },
      relations: {
        bill: true,
        
      
      },
    });
  }


  

}


// src/schedule-payments/schedule-payments.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SchedulePaymentController } from './schedule-payment.controller';
import { SchedulePaymentService  } from './schedule-payment.service';
import { SchedulePayment } from 'src/entity/schedulepayment.entity';


@Module({
  imports: [TypeOrmModule.forFeature([SchedulePayment])],
  controllers: [SchedulePaymentController],
  providers: [SchedulePaymentService],
})
export class SchedulePaymentModule {}

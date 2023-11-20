
// src/schedule-payments/schedule-payments.controller.ts
import { Controller, Get, Post,Put,Delete, Body, Param } from '@nestjs/common';
import { SchedulePaymentService } from './schedule-payment.service';
import { SchedulePayment } from 'src/entity/schedulepayment.entity';
import { SchedulePaymentDto } from './schedulepayment.dto';

@Controller('paymentSchedule')

export class SchedulePaymentController {
  constructor(private readonly schedulePaymentsService: SchedulePaymentService) {}

  
  @Get()
  async getAllSchedulePayment(): Promise<SchedulePayment[]> {
    return this.schedulePaymentsService.getAllSchedulePayment()
  }

  @Post()
  async createSchedulePayment(@Body() schedulePaymentDto: SchedulePaymentDto): Promise<SchedulePayment> {
    return this.schedulePaymentsService.createSchedulePayment(schedulePaymentDto);
  }

  @Put(':id') // Example endpoint: PUT /bills/1
  async updateSchedulePayment(@Param('id') id: number, @Body() UpdateSchedulePaymentDto: SchedulePaymentDto): Promise<SchedulePayment> {
    return this.schedulePaymentsService.updateSchedulePayment(id,UpdateSchedulePaymentDto);
  }

  @Delete(':id')
  removeUser(@Param('id') id: string) {
    return this.schedulePaymentsService.deleteBill(parseInt(id));
  }

  @Post('/:id')
  findUser(@Param('id') id: string) {
    return this.schedulePaymentsService.findOne(parseInt(id));
  }

  
}

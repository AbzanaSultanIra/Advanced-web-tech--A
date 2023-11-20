// src/bill/bill.controller.ts
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { BillService } from './bill.service';
import { Bill } from 'src/entity/bill.entity';
import { CreateBillDto } from './bill.dto';

@Controller('bill')
export class BillController {
  constructor(private readonly billService: BillService) {}

  @Get()
  async getAllBills(): Promise<Bill[]> {
    return this.billService.getAllBills();
  }

  @Post()
  async createBill(@Body() createBillDto: CreateBillDto): Promise<Bill> {
    return this.billService.createBill(createBillDto);
  }
  @Put(':id') // Example endpoint: PUT /bills/1
  async updateBill(@Param('id') id: number, @Body() updateBillDto: CreateBillDto): Promise<Bill> {
    return this.billService.updateBill(id, updateBillDto);
  }

  @Delete(':id')
    removeUser(@Param('id') id: string) {
      return this.billService.deleteBill(parseInt(id));
    }

    @Post(':id')
    findUser(@Param('id') id: string) {
      return this.billService.findOne(parseInt(id));
    }
   
}

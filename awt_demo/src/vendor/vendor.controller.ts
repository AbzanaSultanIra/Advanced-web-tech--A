// src/vendors/vendor.controller.ts
import { Controller, Get, Param, Post, Body, Put, Delete } from '@nestjs/common';
import { VendorService } from './vendor.service';
import { CreateVendorDto } from './vendor.dto';
import { Vendor } from 'src/entity/vendor.entity';


@Controller('vendor')
export class VendorController {
  constructor(private readonly vendorService: VendorService) {}

  @Get()
  getAllVendors(): Promise<Vendor[]> {
    return this.vendorService.getAllVendors();
  }

  @Get('id')
  getVendorById(@Param('id') id: number): Promise<Vendor> {
    return this.vendorService.getVendorById(id);
  }

  @Post()
  addVendor(@Body() vendorDto: CreateVendorDto): Promise<Vendor> {
    return this.vendorService.addVendor(vendorDto);
  }

  @Put(':id')
  updateVendor(@Param(':id') id: number, @Body() UpdateVendorDto:CreateVendorDto): Promise<Vendor> {
    return this.vendorService.updateVendor(id,UpdateVendorDto);
  }

  @Delete(':id')
  removeVendor(@Param('id') id: number): Promise<void> {
    return this.vendorService.removeVendor(id);
  }
}

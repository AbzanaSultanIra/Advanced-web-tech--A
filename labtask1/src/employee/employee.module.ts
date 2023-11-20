
// src/employee/employee.module.ts

import { Module } from '@nestjs/common';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';

@Module({
  providers: [EmployeeService],
  controllers: [EmployeeController],
})
export class EmployeeModule {}

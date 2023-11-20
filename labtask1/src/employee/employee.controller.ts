// src/employee/employee.controller.ts

import { Controller, Post, Body, Put, Param, Delete, Get } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { Employee } from './employee.entity';

@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post('register')
  registerEmployee(@Body() employeeData: Employee): Employee {
    return this.employeeService.create(employeeData);
  }

  @Put(':username')
  updateEmployee(@Param('username') username: string, @Body() updatedData: Employee): Employee | null {
    return this.employeeService.update(username, updatedData);
  }

  @Delete(':username')
  deleteEmployee(@Param('username') username: string): boolean {
    return this.employeeService.delete(username);
  }

  @Get(':username')
  searchEmployee(@Param('username') username: string): Employee | null {
    return this.employeeService.search(username);
  }

  @Get()
  getAllEmployees(): Employee[] {
    return this.employeeService.getAllEmployees();
  }
}

// src/employee/employee.service.ts

import { Injectable } from '@nestjs/common';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeeService {
  private employees: Employee[] = [];

  create(employeeData: Employee): Employee {
    this.employees.push(employeeData);
    return employeeData;
  }

  update(username: string, updatedData: Employee): Employee | null {
    const employeeIndex = this.employees.findIndex((employee) => employee.username === username);

    if (employeeIndex !== -1) {
      this.employees[employeeIndex] = { ...this.employees[employeeIndex], ...updatedData };
      return this.employees[employeeIndex];
    }

    return null;
  }

  delete(username: string): boolean {
    const employeeIndex = this.employees.findIndex((employee) => employee.username === username);

    if (employeeIndex !== -1) {
      this.employees.splice(employeeIndex, 1);
      return true;
    }

    return false;
  }

  search(username: string): Employee | null {
    return this.employees.find((employee) => employee.username === username) || null;
  }

  getAllEmployees(): Employee[] {
    return this.employees;
  }
}

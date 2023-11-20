// src/bill/bill.dto.ts
export class CreateBillDto {
    referenceNumber: string;
    company: string;
    purchaseDate: Date;
    dueDate: Date;
    totalAmount: number;
    paidAmount: number;
    pendingAmount: number;
  }
  
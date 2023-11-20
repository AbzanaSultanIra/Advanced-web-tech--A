
import { Entity, PrimaryGeneratedColumn, Column,JoinColumn,OneToOne,ManyToOne} from 'typeorm';

import { Vendor } from './vendor.entity';
import { SchedulePayment } from './schedulepayment.entity';

@Entity()
export class Bill {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  referenceNumber: string;

  @Column()
  company: string;

  @Column({ type: 'date' })
  purchaseDate: Date;

  @Column({ type: 'date' })
  dueDate: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  totalAmount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  paidAmount: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0 })
  pendingAmount: number;

  @ManyToOne(() => Vendor, vendor => vendor.bill)
  @JoinColumn()
  vendor: Vendor[];

  @OneToOne(() => SchedulePayment, (schedulePayment) => schedulePayment.bill)

  schedulePayment: SchedulePayment[];

  
}

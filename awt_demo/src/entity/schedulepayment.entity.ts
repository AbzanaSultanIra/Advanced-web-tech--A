// src/schedule-payments/schedule-payment.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne,JoinColumn } from 'typeorm';
import { Bill } from './bill.entity';
//import { User } from './user.entity';

@Entity()
export class SchedulePayment {
  @PrimaryGeneratedColumn()
  id: number;


  @Column({ type: 'decimal', precision: 10})
  referenceNumber: number;

  @Column()
  companyName: string;

  @Column()
  paymentDate: Date;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  amount: number;

  @OneToOne(() => Bill, (bill) => bill.schedulePayment)
  @JoinColumn()
  bill: Bill[];

  /*@ManyToOne(() => User, user => user.schedulePayment)

  @JoinColumn()
  user: User[];
*/
  //@ManyToOne(() => User, (user) => user.schedulePayments)
  //user: User;
}

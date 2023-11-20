import { Entity, Column, PrimaryGeneratedColumn,OneToOne,JoinColumn } from 'typeorm';

import { Bank } from './Bank.entity';
//import { SchedulePayment } from './schedulepayment.entity';

 
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  phone: string;
  @Column()
  email: string;
  @Column()
  password: string;
  @Column()
  companyName: string;

  @OneToOne(() => Bank, (bank) => bank.user, { cascade: true })
  @JoinColumn( )
  bank: Bank[];

 /* @OneToMany(() => SchedulePayment, schedulePayment => schedulePayment.user)
 
  schedulePayment: SchedulePayment[];

  getPaymentLists(): SchedulePayment[] {
    // You can customize this method based on your requirements
    return this.schedulePayment;
  }
*/
  


  /*@OneToOne(type => Bank)
  @JoinColumn()
  bank: Bank;
 */
} 
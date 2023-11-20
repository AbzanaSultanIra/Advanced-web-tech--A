// src/vendors/vendor.entity.ts
import { Entity, PrimaryGeneratedColumn, Column,JoinColumn, OneToMany } from 'typeorm';
import { Bill } from './bill.entity';

@Entity()
export class Vendor {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'decimal', precision: 10})
  referenceNumber: number;

  @Column()
  name: string;

  @Column()
  phoneNumber: string;

  @Column()
  email: string;

  @OneToMany(() => Bill, bill => bill.vendor)
  bill: Bill[];
}

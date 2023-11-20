// src/bank-connection/bank-connection.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToOne} from 'typeorm';

import { User } from './user.entity';

@Entity()
export class Bank {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountId: number;

  @Column()
  BankName: string;
 
  @Column()
  companyLoan: number;

  @Column({ type: 'enum', enum: ['active', 'disabled'] })
  accountStatus: 'active' | 'disabled';


  @OneToOne(() => User, (user) => user.bank)
  user: User[];
  
}

// src/monitor-purchases/purchase.entity.ts
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class purchases {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  vendorName: string;

  @Column()
  referenceNumber: number;
  
  @Column()
  productName: string;

  @Column()
  productQuantity: number;

  @Column()
  productCost: number;

  @Column()
  purchaseDate: Date;
}

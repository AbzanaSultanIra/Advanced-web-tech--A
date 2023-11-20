import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MonitorPurchasesController } from './monitorpurchases.controller';
import { monitorpurchasesService } from './monitorpurchases.service';
import { purchases } from 'src/entity/purchases.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([purchases])],
     controllers: [MonitorPurchasesController],
     providers: [monitorpurchasesService],
})
export class MonitorpurchasesModule {}



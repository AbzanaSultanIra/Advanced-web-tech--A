import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
 
// import { UsersController } from './registration/users.controller';
// import { UsersService } from './registration/users.service';
import { User } from './entity/user.entity';
import { Bill } from './entity/bill.entity';
import { SchedulePayment } from './entity/schedulepayment.entity';
import { purchases } from './entity/purchases.entity';
import { Vendor } from './entity/vendor.entity';
import { Bank } from './entity/Bank.entity';
// import { PaymentController } from './controller/paymentdetails.controller';
// import { paymentService } from './services/paymentdetails.service';
import { UsersModule } from './auth/auth.module';
import { BillModule } from './bill/bill.module';
import { SchedulePaymentModule } from './schedule-payment/schedule-payment.module';
import { MonitorpurchasesModule } from './monitorpurchases/monitorpurchases.module';
import { VendorModule } from './vendor/vendor.module';
import { CompanyBankStatusModule } from './company-bank-status/company-bank-status.module';



@Module({
  imports: [
    TypeOrmModule.forFeature([User,Bill,SchedulePayment,purchases,Vendor,Bank]),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'registration',
      autoLoadEntities: true,
      entities: [User,Bill,SchedulePayment,purchases,Vendor,Bank],
      synchronize: true,
    }),
    /*TypeOrmModule.forRoot({
      name: 'billsConnection',
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '1234',
      database: 'bills',
      autoLoadEntities: true,
      entities: [Bill],
      synchronize: true,
    }),*/
    UsersModule,
    BillModule,
    SchedulePaymentModule,
    MonitorpurchasesModule,
    VendorModule,
    CompanyBankStatusModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
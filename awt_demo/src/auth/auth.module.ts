import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './auth.controller';
import { UsersService } from './auth.service';
import { User } from 'src/entity/user.entity';
import { AuthService } from './user.auth';
import { Bank } from 'src/entity/Bank.entity';




 
//import { PaymentService } from 'src/services/paymentdetails.service';
//import { PaymentAuthService } from 'src/services/payment.auth';
//import { Connect_bank } from 'src/entitys/connect-bank.entity';
//import { BankController } from 'src/controller/connect-bank.controller';
//import { ConnectBankAuthService } from 'src/services/connect-bank.auth';
//import { ConnectBankService } from 'src/services/connect-bank.service';
 
@Module({
  imports: [TypeOrmModule.forFeature([User,Bank])],
  controllers: [UsersController],
  providers: [
    UsersService,
    AuthService,
    
    //PaymentService,
    //PaymentAuthService,
    //ConnectBankService,
    //ConnectBankAuthService,
  ],
})
export class UsersModule {}
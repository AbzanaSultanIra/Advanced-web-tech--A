// src/vendors/vendor.dto.ts
import { IsString, IsNumber,IsEmail,IsNotEmpty ,Length} from 'class-validator';

export class CreateVendorDto {

    @IsNumber()
    referenceNumber:number;

    @IsString()
    name: string;

    @IsNumber()
    @IsNotEmpty()
    @Length(10)
    phoneNumber: string;

     @IsEmail()
    email: string;
  }
  
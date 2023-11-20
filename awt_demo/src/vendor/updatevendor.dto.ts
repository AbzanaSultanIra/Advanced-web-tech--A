
import { IsString, IsNumber,IsEmail ,Length,IsOptional} from 'class-validator';

export class updateVendorDto {

    @IsNumber()
    @IsOptional()
    referenceNumber:Number;
    
    @IsString()
    @IsOptional()
    name: string;

    @IsNumber()
    @IsOptional()
    @Length(10)
    phoneNumber: string;

     @IsEmail()
     @IsOptional()
    email: string;
  }
  
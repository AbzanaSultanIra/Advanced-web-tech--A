
import { Injectable ,NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateVendorDto } from './vendor.dto';
import { Vendor } from 'src/entity/vendor.entity';



@Injectable()
export class VendorService {
  constructor(
    @InjectRepository(Vendor)
    private readonly vendorRepository: Repository<Vendor>,
  ) {}

  async getAllVendors(): Promise<Vendor[]> {
    return this.vendorRepository.find();
  }

  async getVendorById(id: number): Promise<Vendor> {
    return this.vendorRepository.findOne({where:{id}});
  }

  async addVendor(vendorDto: CreateVendorDto): Promise<Vendor> {
    const vendor = this.vendorRepository.create(vendorDto);
    return this.vendorRepository.save(vendor);
  }

  async updateVendor(id: number, UpdateVendorDto:CreateVendorDto): Promise<Vendor> {
    const Vendor = await this.vendorRepository.findOne({where:{id}});

    if (!Vendor) {
      throw new NotFoundException(`ref not found`);
    }

    // Update properties
    Vendor.referenceNumber = UpdateVendorDto.referenceNumber;
    Vendor.name =UpdateVendorDto.name;
    Vendor.phoneNumber = UpdateVendorDto.phoneNumber;
    Vendor.email = UpdateVendorDto.email;

    return await this.vendorRepository.save(Vendor);
  }


  async removeVendor(id: number): Promise<void> {
    await this.vendorRepository.delete(id);
  }
}

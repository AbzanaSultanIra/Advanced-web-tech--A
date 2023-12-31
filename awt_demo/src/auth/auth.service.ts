import { Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entity/user.entity';
 import { Bank } from 'src/entity/Bank.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private repo: Repository<User>,
  
  
  )  {}
 
  create(
    name: string,
    phone: string,
    email: string,
    password: string,
    companyName: string,
  ) {
    const user = this.repo.create({
      name,
      phone,
      email,
      password,
      companyName,
    });
 
    return this.repo.save(user);
  }
  //
  /*findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.findOneBy({ id });
  }
  */
  findOne(id: number) {
    if (!id) {
      return null;
    }
    return this.repo.find({
      where: {
        id: id,
      },
      relations: {
        bank: true,
        
      
      },
    });
  }
  find(email: string) {
    return this.repo.findBy({ email });
  }
 


  async update(id: number, attrs: Partial<User>) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    Object.assign(user, attrs);
    return this.repo.save(user);
  }
 
  async remove(id: number) {
    const user = await this.findOne(id);
    if (!user) {
      throw new NotFoundException('user not found');
    }
    return this.repo.remove(user);
  }

 
  
}
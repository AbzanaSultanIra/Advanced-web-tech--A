import {
  Get,
    Body,
    Controller,
    Delete,
    Param,
    Post,
    Put,
    Session,
   
  } from '@nestjs/common';
  import { CreateUserDto } from './auth.dto';
  import { UsersService } from './auth.service';
  import { AuthService } from './user.auth';
  import { LoginUserDto } from './loginuser.dto';
  import { UpdateDto } from './update.dto';
   
  @Controller('auth')
  export class UsersController {
    constructor(
      private usersService: UsersService,
      private authService: AuthService,
    ) {}
   
    @Post('/signup')
    async createUser(@Body() body: CreateUserDto, @Session() session: any) {
      const user = await this.authService.signup(
        body.name,
        body.phone,
        body.email,
        body.password,
        body.companyName,
      );

     session.userId = user.id;

      return user;
    }
    @Post('/signin')
    async signin(@Body() body: LoginUserDto, @Session() session: any) {
      const user = await this.authService.signin(body.email, body.password);

     session.userId = user.id;

      return user;
    }
    @Post('/:id')
    findUser(@Param('id') id: string) {
      return this.usersService.findOne(parseInt(id));
    }

   @Post('/signout')
    logout(@Session() session: any) {
      session.userId = null;
      return 'sign out';
    }
   
    @Get('/profile')
  async profile(@Session() session: any) {
    const data = await this.usersService.findOne(session.userId);
    if (!data) {
      return 'log in first';
    } else {
      // const { password, ...profileData } = data;
      return data;
    }
  }

    @Delete('/:id')
    removeUser(@Param('id') id: string) {
      return this.usersService.remove(parseInt(id));
    }
   
    @Put('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateDto) {
      return this.usersService.update(parseInt(id), body);
    }

 
  }
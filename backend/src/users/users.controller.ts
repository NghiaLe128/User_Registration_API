import { Body, Controller, Post, BadRequestException, HttpStatus, ConflictException } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginUserDto } from './dto/login-user.dto';

@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto) {
    try {
      const newUser = await this.usersService.register(createUserDto);
      return {
        status: HttpStatus.CREATED,
        message: 'User registered successfully',
        user: newUser,
      };
    } catch (error) {
      // Capture specific error messages and send them to the client
      if (error instanceof ConflictException) {
        throw new BadRequestException(error.message); // Use the error's message
      }
      throw new BadRequestException('User registration failed');
    }
  }


  @Post('login')
async login(@Body() loginUserDto: LoginUserDto) {
  const { identifier, password } = loginUserDto;
  const user = await this.usersService.login(identifier, password);
  if (!user) {
    throw new BadRequestException('Invalid credentials');
  }
  return {
    status: 200,
    message: 'Login successful',
    user,
  };
}


}

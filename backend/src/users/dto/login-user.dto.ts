import { IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty({ message: 'Identifier (username or email) is required' })
  identifier: string; // This will hold either the username or email

  @IsNotEmpty({ message: 'Password is required' })
  password: string;
}
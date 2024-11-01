import { Injectable, ConflictException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import * as bcrypt from 'bcryptjs';
import { User } from '../schemas/user.schema';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async register(createUserDto: CreateUserDto): Promise<string> {
    const { username, email, password } = createUserDto;

    const existingUser = await this.userModel.findOne({
      $or: [{ email }, { username }],
    });
    if (existingUser) {
      throw new ConflictException('Username or email already exists');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new this.userModel({
      username,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    return 'User registered successfully';
  }

  async login(identifier: string, password: string): Promise<User | null> {
    // Kiểm tra xem identifier và password có được cung cấp không
    if (!identifier) {
      throw new UnauthorizedException('Identifier (username or email) is required');
    }
    if (!password) {
      throw new UnauthorizedException('Password is required');
    }

    // Tìm người dùng dựa trên identifier
    const user = await this.userModel.findOne({
      $or: [{ email: identifier }, { username: identifier }],
    });

    // Kiểm tra nếu người dùng không tồn tại
    if (!user) {
      throw new UnauthorizedException('User is not existed. Please register your new account');
    }

    // Kiểm tra mật khẩu
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Password is incorrect');
    }

    return user; 
  }
}

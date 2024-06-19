import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { AuthUserDto } from './dto/auth-user.dto';
import { hash, compare } from 'bcrypt';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import * as jwt from 'jsonwebtoken';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>
  ) {}

  async signUp(createUser: CreateUserDto): Promise<UserEntity> {
    const userExists = await this.findUserByEmail(createUser.email);
    if (userExists) throw new BadRequestException("Correo no disponible");
    createUser.password = await hash(createUser.password, 10);
    let user = this.usersRepository.create(createUser);
    user = await this.usersRepository.save(user);
    delete user.password;
    return user;
  }

  async signIn(authUser: AuthUserDto): Promise<UserEntity> {
    const userExists = await this.usersRepository.createQueryBuilder('users')
      .addSelect('users.password')
      .where('users.email=:email', { email: authUser.email })
      .getOne();
    if (!userExists) throw new BadRequestException("Las cedenciales son incorrectas");
    const match = await compare(authUser.password, userExists.password);
    if (!match) throw new BadRequestException("Las cedenciales son incorrectas");
    delete userExists.password;
    delete userExists.roles;
    delete userExists.updatedAt;
    return userExists;
  }

  async accessToken(user: UserEntity) { 
    const token = jwt.sign(
      { id: user.id, email: user.email},
      process.env.JWT_SECRET,
      {expiresIn: process.env.ACCESS_TOKEN_EXPIRATION}
    );
    return token;
  }

  async refreshToken(user: UserEntity) {
    const refreshToken = jwt.sign(
      { id: user.id, email: user.email},
      process.env.JWT_REFRESH_SECRET,
      {expiresIn: process.env.REFRESH_TOKEN_EXPIRATION}
    );
    return refreshToken;
  }

  async remove(id: number) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException("Usuario no encontrado");
    await this.usersRepository.remove(user);
  }

  async findUserByEmail(email: string) {
    return await this.usersRepository.findOne({ where: { email } });
  }

  async findAll(): Promise<UserEntity[]> {
    return await this.usersRepository.find();
  }

  async findOne(id: number): Promise<UserEntity> {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) throw new NotFoundException("Usuario no encontrado");
    return user;
  }
}

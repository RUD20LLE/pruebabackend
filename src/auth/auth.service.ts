import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    console.log('AuthService: validateUser called with username:', username);
    const user = await this.usersService.findOne(username);
    if (user && user.password === pass) {
      console.log('AuthService: User validated successfully');
      const payload = { username: user.username, sub: user.id };
      const accessToken = this.jwtService.sign(payload);
      console.log('Generated JWT Token:', accessToken);  // Línea añadida para imprimir el token en la consola
      return {
        access_token: accessToken,
      };
    }
    console.log('AuthService: User validation failed');
    return null;
  }
}

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class JwtAuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers.authorization;

    if (!authorization) {
      console.log('JwtAuthGuard: No authorization header found');
      return false;
    }

    try {
      const jwt = authorization.split(' ')[1];
      const decoded = this.jwtService.verify(jwt);
      console.log('JwtAuthGuard: Token verified successfully', decoded);
      return true;
    } catch (e) {
      console.log('JwtAuthGuard: Token verification failed', e.message);
      return false;
    }
  }
}

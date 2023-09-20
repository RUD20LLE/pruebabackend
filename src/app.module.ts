import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ToggleModule } from './toggle/toggle.module';
import { User } from './entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin',
      password: 'admin123',
      database: 'basededatosprueba',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    ToggleModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

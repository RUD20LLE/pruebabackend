import { Module } from '@nestjs/common';
import { ToggleController } from './toggle.controller';
import { ToggleService } from './toggle.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [ToggleController],
  providers: [ToggleService],
})
export class ToggleModule {}

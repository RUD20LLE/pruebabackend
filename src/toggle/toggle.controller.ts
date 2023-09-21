import { Controller, Get, Post } from '@nestjs/common';
import { ToggleService } from './toggle.service';
import { JwtAuthGuard } from '../jwt-auth/jwt-auth.guard';
import { UseGuards } from '@nestjs/common';

@UseGuards(JwtAuthGuard)
@Controller('toggle')
export class ToggleController {
  constructor(private toggleService: ToggleService) {}

  @Get()
  getState() {
    console.log('ToggleController: getState called');
    return { isOn: this.toggleService.getState() };
  }

  @Post()
  toggle() {
    console.log('ToggleController: toggle called');
    return { isOn: this.toggleService.toggle() };
  }
}

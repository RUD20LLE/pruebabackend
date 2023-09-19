import { Controller, Get, Post } from '@nestjs/common';
import { ToggleService } from './toggle.service';

@Controller('toggle')
export class ToggleController {
  constructor(private toggleService: ToggleService) {}

  @Get()
  getState() {
    return { isOn: this.toggleService.getState() };
  }

  @Post()
  toggle() {
    return { isOn: this.toggleService.toggle() };
  }
}

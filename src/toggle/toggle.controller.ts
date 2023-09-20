import { Controller, Get, Post } from '@nestjs/common';
import { ToggleService } from './toggle.service';

@Controller('toggle/')
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
    console.log('ToggleService: toggle called');
    return { isOn: this.toggleService.toggle() };
  }
}

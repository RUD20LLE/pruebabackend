import { Injectable } from '@nestjs/common';

@Injectable()
export class ToggleService {
  private isOn = false;

  toggle() {
    this.isOn = !this.isOn;
    return this.isOn;
  }

  getState() {
    return this.isOn;
  }
}

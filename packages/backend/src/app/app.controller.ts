import { Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { Entry } from '@alice-3.1/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post()
  addEntry(entry: Entry) {
    return this.appService.addEntry(entry);
  }
}

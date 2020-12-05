import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { Entries, Entry } from '@nx-monorepo/common/model.dto';
import { ApiResponse } from '@nestjs/swagger';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiResponse({ status: 200, type: Entries })
  getData(): Entries {
    return this.appService.getData();
  }

  @Post()
  @ApiResponse({ status: 200 })
  addEntry(@Body() entry: Entry) {
    this.appService.addEntry(entry);
  }
}

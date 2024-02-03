import { Controller, Get, Res } from '@nestjs/common';
import { HealthCheck } from '@nestjs/terminus';
import { Response } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private service: AppService) { }

  @Get()
  @HealthCheck()
  async getServiceStatus(@Res() res: Response) {
    const { status, message } = await this.service.getServicesStatuses();

    return res.status(status).send(message) || 'Hello, world!';
  }

}

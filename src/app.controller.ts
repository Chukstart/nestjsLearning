import { Controller, Get,Header } from '@nestjs/common';
import { AppService } from './app.service';

//root route
//route with decorators
@Controller()
export class AppController {
  //dependancy injection
  constructor(private readonly appService: AppService) {}

  

  @Get()
  @Header('Content-Type','text/html')
  getHello(): any {
    return this.appService.getHello();
  }
}

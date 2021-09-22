import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/product.module';

//the @ is a decorator
//module is a decorator that is added to a class
@Module({
  //a nestjs feature to link files together
  imports: [ProductsModule],
  //responsible for incoming requests and send responses
  controllers: [AppController],
//extra classes for providing functionality
  providers: [AppService],
})
export class AppModule {}
//very important thing it embraces modularity
//you need to tell nest js 
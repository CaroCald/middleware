import {Module, NestMiddleware, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MiddlewaresConsumer} from "@nestjs/common/interfaces/middlewares";
import {LogMiddleware} from "./log.middleware";

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {

    configure(consumer: MiddlewaresConsumer): void {
        const variable='archivo';
        consumer.apply(LogMiddleware).with(variable).forRoutes(
            AppController
        );

    }
}
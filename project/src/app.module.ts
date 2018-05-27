import {Module, NestMiddleware, NestModule} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {MiddlewaresConsumer} from "@nestjs/common/interfaces/middlewares";
import {LogMiddleware} from "./log.middleware";
import {UsuarioController} from "./usuario.controller";
import {usuarioMiddleware} from "./usuario.middleware";

@Module({
  imports: [],
  controllers: [AppController, UsuarioController],
  providers: [AppService],
})
export class AppModule implements NestModule {

    configure(consumer: MiddlewaresConsumer): void {
        /*const variable='todo';
        consumer.apply(LogMiddleware).with(variable).forRoutes(
            AppController
        );*/

        consumer.apply(usuarioMiddleware).with().forRoutes(UsuarioController);
    }
}
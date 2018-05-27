import {Injectable, NestMiddleware} from "@nestjs/common";
import {ExpressMiddleware} from "@nestjs/common/interfaces/middlewares/express-middleware.interface";
const fs = require('fs');@Injectable()
export class usuarioMiddleware implements NestMiddleware {
    resolve(): ExpressMiddleware {
        return (request, response, next) => {
            const nombreCookie = request.cookies;
            if (nombreCookie=='EN CACHE') {
                return response.send({mensaje: 'En cache'});

            } else {
                next();
                return response.send({mensaje: 'No ESTA EN CACHE', status: 400});
            }


        }
    }
}
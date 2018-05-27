import {Injectable, NestMiddleware} from "@nestjs/common";
import {ExpressMiddleware} from "@nestjs/common/interfaces/middlewares/express-middleware.interface";
const fs = require('fs');@Injectable()
export class usuarioMiddleware implements NestMiddleware {
    resolve(): ExpressMiddleware {
        return (request, response, next) => {
            /*if(request.cookies!=undefined){
                response.send({mensaje: 'ESTA EN CACHE'});
            }
            else
            {
                response.send({mensaje: 'No esta en cache'});
            }*/
            next();

        }
        }
}
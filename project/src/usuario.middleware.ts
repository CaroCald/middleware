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
            this.comparar(response, request);
            next();

        }

        }

    ponerCookie(response, parametro:string){
        console.log(parametro);
        response.cookie(parametro);
        return response.send();
    }
    getCookie(request){
        console.log(request.cookies);
        return request.cookies;
    }
    comparar(response, request){
       const variable =  this.getCookie(request);
       if(variable!=undefined){
        response.send({mensaje: 'SI ESTA EN CACHE'});
       }else
       {
           response.send({mensaje: 'NO ESTA EN CACHE'});
           if(variable==undefined){
               this.ponerCookie(response, 'en cache');
           }
       }
    }
}
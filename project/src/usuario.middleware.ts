import {Injectable, NestMiddleware} from "@nestjs/common";
import {ExpressMiddleware} from "@nestjs/common/interfaces/middlewares/express-middleware.interface";
const fs = require('fs');@Injectable()
export class usuarioMiddleware implements NestMiddleware {
    resolve(): ExpressMiddleware {
        return (request, response, next) => {

            if(request.cookies!=null){
                console.log("YA ESTA");
            }else {
                console.log("no esta");
                next();
            }
        }

        }

}
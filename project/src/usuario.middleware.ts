import {Injectable, NestMiddleware} from "@nestjs/common";
import {ExpressMiddleware} from "@nestjs/common/interfaces/middlewares/express-middleware.interface";
@Injectable()
export class usuarioMiddleware implements NestMiddleware {
    resolve(): ExpressMiddleware {
        return (request, response, next) => {
            console.log(request.cookies);
            if(request.cookies!=null){
                console.log("Esta en cache");
            }else {
                console.log("no esta en cache");
                next();
            }
        }
        }

}
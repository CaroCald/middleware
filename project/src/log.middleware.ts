import {Injectable, NestMiddleware} from "@nestjs/common";
import {ExpressMiddleware} from "@nestjs/common/interfaces/middlewares/express-middleware.interface";
const fs = require('fs');
@Injectable()
export class LogMiddleware implements NestMiddleware {

    resolve(nivelDeLog:string): ExpressMiddleware {
        return (request, response, next) => {

            if(nivelDeLog=='archivo') {
                console.log(nivelDeLog);
                this.guardarArchivo(request);
                next();
            }

            if(nivelDeLog=='consola'){
                console.log(nivelDeLog);
                console.log(this.guardarRespuesta(request));
                next();
            }

            if(nivelDeLog=='todo'){
                console.log(nivelDeLog);
                this.guardarArchivo(request);
                console.log(this.guardarRespuesta(request));

                next();
            }



        };

    }
    guardarRespuesta(request){
       const respuesta = {
            baseUrl: request.baseUrl,
            hostname: request.hostname,
            subdomains: request.subdomains,
            ip: request.ip,
            method: request.method,
            originalUrl: request.originalUrl,
            path: request.path,
            protocol: request.protocol,
            headers: request.headers,
        };
        return respuesta;
    }

    guardarArchivo(request){
        fs.writeFile(__dirname + '/archivoTxt/logs.txt', JSON.stringify(this.guardarRespuesta(request)), function (err) {
            if (err) {
                console.log(err);
            }
        });
    }


}
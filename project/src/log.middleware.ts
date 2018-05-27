import {Injectable, NestMiddleware} from "@nestjs/common";
import {ExpressMiddleware} from "@nestjs/common/interfaces/middlewares/express-middleware.interface";
const fs = require('fs');
@Injectable()
export class LogMiddleware implements NestMiddleware {

    resolve(nivelDeLog:string): ExpressMiddleware {
        let respuesta ={};
        return (request, response, next) => {




        };

    }

    guardarParametros(request, response, next, nivelDeLog, respuesta){
        respuesta = {
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
    guardarArchivo(request, response, next, nivelDeLog, respuesta) {
        if(nivelDeLog=='archivo') {
            console.log(nivelDeLog);
            this.guardarParametros(request, response, next, nivelDeLog, respuesta);
        };
        fs.writeFile(__dirname + '/archivoTxt/logs.txt', JSON.stringify(respuesta), function (err) {
            if (err) {
                console.log(err);
            }
        });
        next();

    }
    imprimirEnConsola(){
        con
    }



}
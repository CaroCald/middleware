import {Middleware, NestMiddleware} from "@nestjs/common";
import {ExpressMiddleware} from "@nestjs/common/interfaces/middlewares/express-middleware.interface";
const fs = require('fs');
@Middleware()
export class LogMiddleware implements NestMiddleware {

    resolve(nivelDeLog:string): ExpressMiddleware {
        return (request, response, next) => {
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
            fs.open(__dirname+'/archivoTxt/logs.txt', 'w', function(err, fd) {
                if (err) {
                    throw 'error opening file: ' + err;
                }

                fs.write(fd, respuesta, 0, respuesta!=null, null, function(err) {
                    if (err) throw 'error writing file: ' + err;
                    fs.close(fd, function() {
                        console.log('file written');
                    })
                });
            });
            next();
            console.log(respuesta);
            next();

             //para ir al siguiente middleware
        };
    }


}
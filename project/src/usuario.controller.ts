import {Controller, Get, Req, Res} from "@nestjs/common";

@Controller('Usuario')
export class UsuarioController {

    @Get('sesion')
    visitarPagina(@Res() response, @Req() request){
        const parametros = {
            nombre: request.query.nombre,
            valor: request.query.valor
        };
        response.cookie(parametros.nombre, parametros.valor);

        return response.send();

    }

}
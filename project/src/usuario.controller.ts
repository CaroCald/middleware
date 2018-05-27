import {Controller, Get, Req, Res} from "@nestjs/common";

@Controller('')
export class UsuarioController {

    @Get('sesion')
    ponerCookie(@Res() response, @Req() request){
        let parametro={
            nombre:'cookie',
            valor: 'cache'
        };
        response.cookie(parametro.nombre, parametro.valor);
        return response.send({mensaje: 'LA COOKIE SE COLOCO EN CACHE'})
    }
}
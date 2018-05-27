import {Controller, Get, Req, Res} from "@nestjs/common";

@Controller('')
export class UsuarioController {

    @Get('sesion')
    sesion(@Res() response, @Req() request){
        const parametros={
            nombre: 'EN CACHE',
            valor: 'CACHE'
        };
        console.log(parametros.nombre, parametros.valor);
        response.cookie(parametros.nombre, parametros.valor);
        return response.send();
    }


}
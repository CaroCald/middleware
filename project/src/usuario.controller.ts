import {Controller, Get, Req, Res} from "@nestjs/common";

@Controller('')
export class UsuarioController {

    @Get('sesion')
    visitarPagina(@Res() response, @Req() request){
       response.cookies('EN CACHE');
       return response.send();
    }



}
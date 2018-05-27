import {Controller, Get, Req, Res} from "@nestjs/common";

@Controller('')
export class UsuarioController {

    @Get('sesion')
    ponerCookie(@Res() response, @Req() request){

    }



}
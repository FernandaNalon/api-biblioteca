import { Controller, Body, Post, Get, Param, ParseIntPipe, Put, Delete } from '@nestjs/common';
import { AutoresService } from './autores.service';
import { CreateAutorDto } from './dto/create-autor.dto';
import { UpdateAtorDto } from './dto/update-autor.dto';

@Controller('autores')
export class AutoresController {
    constructor (private readonly autoresService:AutoresService){}

    @Post()
    criar(@Body() createAutorDto:CreateAutorDto){
        return this.autoresService.criar(createAutorDto);
    };

    @Get()
    listarTodos(){
        return this.autoresService.listarTodos();
    }

    @Get(':id')
    buscarPorId(@Param('id', ParseIntPipe) id: number){
        return this.autoresService.buscarPorId(id);
    }

    @Put(':id')
    atualizar(@Param('id', ParseIntPipe) id:number, @Body() dados: UpdateAtorDto) {
        return this.autoresService.atualizar(id,dados);
    }

    @Delete(':id')
    remover(@Param('id', ParseIntPipe) id:number){
        return this.autoresService.remover(id);
    }
}

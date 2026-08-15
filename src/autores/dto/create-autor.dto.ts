import { IsInt, IsString, IsNotEmpty, IsPositive} from "class-validator";

export class CreateAutorDto {
    @IsString()
    @IsNotEmpty()
    nome: string;

    @IsString()
    @IsNotEmpty()
    nacionalidade: string;

    @IsInt()
    @IsPositive()
    ano_nascimento: number;
}
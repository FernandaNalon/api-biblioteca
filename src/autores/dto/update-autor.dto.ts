import { IsString, IsInt, IsOptional } from "class-validator";

export class UpdateAtorDto{
    @IsOptional()
    @IsString()
    nome?: string;

    @IsOptional()
    @IsString()
    nacionalidade?: string;

    @IsOptional()
    @IsInt()
    ano_nascimento?: number;
}
import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {
  @IsNotEmpty({ message: "Se requiere un nombre" })
  @IsString({ message: "Por favor ingresa un nómbre válido" })
  firstname: string;

  @IsNotEmpty({ message: "Se requiere un apellido" })
  @IsString({ message: "Por favor ingresa un apellido válido" })
  lastname: string;

  @IsNotEmpty({ message: "Se requiere un correo" })
  @IsEmail({}, { message: "Ingrese un correo válido" })
  email: string;

  @IsNotEmpty({ message: "Se requiere una contraseña" })
  @MinLength(5,{message: "La contraseña es muy corta" })
  password: string;
}

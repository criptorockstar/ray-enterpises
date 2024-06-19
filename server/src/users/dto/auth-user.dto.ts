import { IsEmail, IsNotEmpty } from "class-validator";

export class AuthUserDto {
  @IsNotEmpty({ message: "Se requiere un correo" })
  @IsEmail({}, { message: "Ingrese un correo válido" })
  email: string;

  @IsNotEmpty({ message: "Se requiere una contraseña" })
  password: string;
}

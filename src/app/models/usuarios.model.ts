import { EnderecoModel } from "./endereco.model";

export class UsuariosModel {
  nome!: string;
  cpf!: string;
  contato!: string;
  email!: string;
  endereco!:EnderecoModel;
  _id!: string;
  createdAt!: string;
  updatedAt!: string;
}

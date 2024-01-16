import { Component, OnInit } from '@angular/core';

import {MatTableModule} from '@angular/material/table';
import { UsuariosModel } from 'src/app/models/usuarios.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.scss'],
})
export class UsuarioComponent implements OnInit {

displayedColumns: string[] = ['nome', 'cpf', 'contato', 'email', 'endereco', 'acoes'];
dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
const ELEMENT_DATA: UsuariosModel[] = [
  {
    nome:"Andre Teixeira",
    cpf:"12345678912",
    contato:"21999999999",
    email:"exemple@gmail.com",
    endereco:{
      logradouro:"Rua D",
      numero: 8,
      complemento:"Bl 10 ap 8",
      cep:"23572333",
      bairro:"Santa Cruz",
      cidade:"Rio de janeiro",
      estado:"Rj"
    },
    _id:"5as5d1as65-515-5d1asd16asd5as",
    createdAt: "2023-04-21T21:39:34.000Z",
    updatedAt: "2023-08-21T21:39:34.000Z",
  }
]

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { LivrosComponent } from 'src/app/pages/livros/livros.component';
import { UsuarioComponent } from 'src/app/pages/usuario/usuario.component';
import { EmprestimoComponent } from 'src/app/pages/emprestimo/emprestimo.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'livros', component: LivrosComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'emprestimo', component: EmprestimoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

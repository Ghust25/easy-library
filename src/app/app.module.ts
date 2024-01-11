import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LivrosComponent } from './pages/livros/livros.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { EmprestimoComponent } from './pages/emprestimo/emprestimo.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LivrosComponent,
    UsuarioComponent,
    EmprestimoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    SidebarModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbogadosComponent } from './abogados/abogados.component';
import { AppComponent } from './app.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InicioComponent } from './inicio/inicio.component';
import { OfficesComponent } from './offices/offices.component';

const routes: Routes = [
  {
    path: 'nosotros',
    component: NosotrosComponent
  },
  {
  path: '',
  component: InicioComponent
},
{
  path: 'abogados',
  component: AbogadosComponent
},
  {
    path: 'oficinas',
    component: OfficesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

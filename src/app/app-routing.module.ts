import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbogadosComponent } from './abogados/abogados.component';
import { AppComponent } from './app.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  {
    path: 'nosotros',
    component:NosotrosComponent
  },
  {
  path: ' ',
  component:AppComponent
},
{
  path: 'abogados',
  component:AbogadosComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

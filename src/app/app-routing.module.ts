import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DespesasSenadorComponent } from './despesas-senador/despesas-senador.component';
import { ListaDeSenadoresComponent } from './lista-de-senadores/lista-de-senadores.component';

const routes: Routes = [
  { path: 'senadores', component: ListaDeSenadoresComponent },
  {
    path: 'senadores/:id',
    component: DespesasSenadorComponent,
  },
  { path: '', redirectTo: 'senadores', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

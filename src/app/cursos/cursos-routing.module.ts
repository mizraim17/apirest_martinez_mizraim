import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { ListaComponent } from './components/lista/lista.component';
import { EditarEstudianteComponent } from './components/editar-estudiante/editar-estudiante.component';
import { AgregarEstudianteComponent } from './components/agregar-estudiante/agregar-estudiante.component';
import { TablaComponent } from './components/tabla/tabla.component';

const routes: Routes = [
  {
    path: 'cursos',
    children: [
      { path: 'list', component: ListaComponent },
      { path: 'edit', component: EditarEstudianteComponent },
      { path: 'add', component: AgregarEstudianteComponent },
      { path: 'table', component: TablaComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CursosRoutingModule {}

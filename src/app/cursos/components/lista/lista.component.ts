import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../../models/estudiante';
import { Observable, Subscription } from 'rxjs';

import { EditarEstudianteComponent } from '../editar-estudiante/editar-estudiante.component';
import { MatDialog } from '@angular/material/dialog';
import { CursosService } from '../../services/cursos.service';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../../../core/services/sesion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent {
  estudiantes!: Estudiante;
  estudiantes$!: Observable<Estudiante[]>;
  suscripcion!: Subscription;
  sesion$!: Observable<Sesion>;

  constructor(
    private dialog: MatDialog,
    private estudianteService: CursosService,
    private sesion: SesionService
  ) {}

  filtrar(event: Event) {
    let word = (event.target as HTMLInputElement).value;
    this.estudianteService.filtrarEstudiante(word);
  }

  ngOnInit() {
    this.estudiantes$ = this.estudianteService.obtenerEstudiantesObservable();
    this.sesion$ = this.sesion.obtenerSesison();
  }

  editarDatos(estudiante: Estudiante) {
    const dialogRef = this.dialog.open(EditarEstudianteComponent, {
      data: estudiante,
    });
  }

  eliminarDatos(i: number) {
    this.estudianteService.eliminarEstudiante(i);
  }
}

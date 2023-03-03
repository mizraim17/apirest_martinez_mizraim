import { Component, OnInit } from '@angular/core';
import { Estudiante } from '../../../models/estudiante';
import { Observable, Subscription } from 'rxjs';

import { EditarEstudianteComponent } from '../editar-estudiante/editar-estudiante.component';
import { MatDialog } from '@angular/material/dialog';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent {
  estudiantes!: Estudiante;
  estudiantes$!: Observable<Estudiante[]>;
  suscripcion!: Subscription;

  constructor(
    private dialog: MatDialog,
    private estudianteService: CursosService
  ) {}

  filtrar(event: Event) {
    let word = (event.target as HTMLInputElement).value;
    this.estudianteService.filtrarEstudiante(word);
  }

  ngOnInit() {
    this.estudiantes$ = this.estudianteService.obtenerEstudiantesObservable();
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

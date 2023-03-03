import {
  Component,
  ViewChild,
  AfterViewInit,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Estudiante } from '../../../models/estudiante';
import { MatDialog } from '@angular/material/dialog';
import { EditarEstudianteComponent } from '../editar-estudiante/editar-estudiante.component';

import { AgregarEstudianteComponent } from '../agregar-estudiante/agregar-estudiante.component';
import { Subscription } from 'rxjs';
import { CursosService } from '../../services/cursos.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss'],
})
export class TablaComponent implements OnInit, OnDestroy {
  dataSource!: MatTableDataSource<Estudiante>;
  suscripcion!: Subscription;

  columnas: string[] = [
    'Nombre',
    'Curso',
    'Calificacion',
    'Aprobado',
    'Acciones',
  ];

  constructor(
    private dialog: MatDialog,
    private estudianteService: CursosService
  ) {}

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Estudiante>();
    this.suscripcion = this.estudianteService
      .obtenerEstudiantesObservable()
      .subscribe((estudiantes: Estudiante[]) => {
        this.dataSource.data = estudiantes;
      });
  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  editarDatos(estudiante: Estudiante) {
    const dialogRef = this.dialog.open(EditarEstudianteComponent, {
      data: estudiante,
    });
  }

  addEstudiante() {
    const dialogRef = this.dialog.open(AgregarEstudianteComponent, {});
  }

  eliminarDatos(i: number) {
    let arr_copy = this.dataSource.data;
    arr_copy.splice(i, 1);
    this.dataSource.data = arr_copy;
  }
}

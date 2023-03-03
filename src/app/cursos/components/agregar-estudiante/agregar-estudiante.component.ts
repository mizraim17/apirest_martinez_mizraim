import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms';

import { Estudiante } from '../../../models/estudiante';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { CursosService } from '../../services/cursos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-estudiante',
  templateUrl: './agregar-estudiante.component.html',
  styleUrls: ['./agregar-estudiante.component.scss'],
})
export class AgregarEstudianteComponent {
  dataSource!: MatTableDataSource<Estudiante>;
  formulario: FormGroup;
  suscripcion!: Subscription;

  constructor(
    private estudianteService: CursosService,
    private router: Router
  ) {
    let controles: any = {
      nombre: new FormControl('', [Validators.required]),
      apellido: new FormControl('', [Validators.required]),
      curso: new FormControl('', [Validators.required]),
      foto: new FormControl('', [Validators.required]),
      correo: new FormControl('', [
        Validators.required,
        Validators.pattern(
          '[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*@[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)*[.][a-zA-Z]{2,5}'
        ),
      ]),
      fechaNacimiento: new FormControl('', [Validators.required]),
      calificacion: new FormControl('', [Validators.required]),
      becado: new FormControl('', []),
    };
    this.formulario = new FormGroup(controles);
  }

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

  addEstudiante(form: any) {
    console.log('form', form);
    this.estudianteService.agregarEstudiante(form.value);
    this.router.navigate(['cursos/list']);
  }
}

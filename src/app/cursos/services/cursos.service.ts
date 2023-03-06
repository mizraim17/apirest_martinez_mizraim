import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, of } from 'rxjs';
import { Estudiante } from 'src/app/models/estudiante';

import { env } from 'src/environment/environments';

@Injectable()
export class CursosService {
  // private estudiantes: Estudiante[] = [
  //   {
  //     nombre: 'Johnny  ',
  //     apellido: 'Depp',
  //     curso: 'ANGULAR',
  //     correo: 'johnny_depp@gmail.com',
  //     calificacion: 6,
  //     fechaNacimiento: new Date(1923, 0, 1, 20, 30, 0),
  //     becado: false,
  //     foto: 'https://rickandmortyapi.com/api/character/avatar/183.jpeg',
  //   },
  //   {
  //     nombre: 'Aqua',
  //     apellido: ' Morty',
  //     curso: 'NODE ',
  //     correo: 'aqua_norty@gmail.com',
  //     calificacion: 8.6,
  //     fechaNacimiento: new Date(1623, 11, 1, 20, 30, 0),
  //     becado: true,
  //     foto: 'https://rickandmortyapi.com/api/character/avatar/21.jpeg',
  //   },
  //   {
  //     nombre: 'Stan Lee  ',
  //     apellido: 'Rick',
  //     curso: 'NODE ',
  //     correo: 'stanlee_rick@gmail.com',
  //     calificacion: 1.9,
  //     fechaNacimiento: new Date(2023, 0, 1, 20, 30, 0),
  //     becado: false,
  //     foto: 'https://rickandmortyapi.com/api/character/avatar/810.jpeg',
  //   },
  //   {
  //     nombre: 'Supernova',
  //     apellido: ' ',
  //     curso: 'REACT',
  //     correo: 'amy@gmail.com',
  //     calificacion: 8.6,
  //     fechaNacimiento: new Date(1913, 9, 1, 20, 30, 0),
  //     becado: true,
  //     foto: 'https://rickandmortyapi.com/api/character/avatar/340.jpeg',
  //   },

  //   {
  //     nombre: 'Snake',
  //     apellido: 'Reporter',
  //     curso: 'NODE ',
  //     correo: 'snake_reporter@gmail.com',
  //     calificacion: 5.9,
  //     fechaNacimiento: new Date(2012, 4, 1, 20, 30, 0),
  //     becado: false,
  //     foto: 'https://rickandmortyapi.com/api/character/avatar/589.jpeg',
  //   },

  //   {
  //     nombre: 'Jacqueline',
  //     apellido: 'Entity',
  //     curso: 'NODE ',
  //     correo: 'karen@gmail.com',
  //     calificacion: 7.7,
  //     fechaNacimiento: new Date(2003, 9, 1, 20, 30, 0),
  //     becado: true,
  //     foto: 'https://rickandmortyapi.com/api/character/avatar/170.jpeg',
  //   },
  // ];

  private estudiante$!: BehaviorSubject<Estudiante[]>;

  constructor(private http: HttpClient) {}

  obtenerEstudiantesObservable(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(`${env.apiUrl}/estudiante`);
  }

  agregarEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    console.log('add stud', estudiante);

    return this.http.post<Estudiante>(`${env.apiUrl}/estudiante`, estudiante);
  }

  editarEstudiante(estudiante: any) {
    // console.log('estu id', arr.id);
    console.log('estu array', estudiante);

    return this.http.put<Estudiante>(
      `${env.apiUrl}/estudiante/${estudiante.id}`,
      estudiante
    );
  }

  eliminarEstudiante(id: string): Observable<Estudiante> {
    return this.http.delete<Estudiante>(`${env.apiUrl}/estudiante/${id}`);
  }

  filtrarEstudiante(word: string): void {}
}

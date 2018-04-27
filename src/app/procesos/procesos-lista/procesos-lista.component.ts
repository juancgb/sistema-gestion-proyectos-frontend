import { Component, OnInit } from '@angular/core';
/** Interfaces */
import { Proceso } from '../interfaces/procesos';

@Component({
  selector: 'app-procesos-lista',
  templateUrl: './procesos-lista.component.html',
  styleUrls: ['./procesos-lista.component.sass']
})
export class ProcesosListaComponent implements OnInit {

  private procesos: Array<Proceso>;

  constructor() { }

  ngOnInit() {
    this.procesos = [
      {
        id: 1, descripcion: 'Proceso 1', niveles: [
          {
            id: 1,
            nombre: 'Nivel 1',
            obligatorio: true,
            solicitud: true,
            actividades: [
              {
                id: 1,
                nombre: 'Actividad 1'
              },
              {
                id: 2,
                nombre: 'Actividad 2'
              }
            ]
          },
          {
            id: 2,
            nombre: 'Nivel 2',
            obligatorio: true,
            solicitud: true,
            actividades: [
              {
                id: 3,
                nombre: 'Actividad 3'
              }
            ]
          }
        ]
      },
      {
        id: 2, descripcion: 'Proceso 2', niveles: [
          {
            id: 3,
            nombre: 'Nivel 3',
            obligatorio: true,
            solicitud: true,
            actividades: [
              {
                id: 4,
                nombre: 'Actividad 4'
              },
              {
                id: 5,
                nombre: 'Actividad 5'
              }
            ]
          },
          {
            id: 4,
            nombre: 'Nivel 4',
            obligatorio: true,
            solicitud: true,
            actividades: [
              {
                id: 6,
                nombre: 'Actividad 6'
              },
              {
                id: 7,
                nombre: 'Actividad 7'
              },
              {
                id: 8,
                nombre: 'Actividad 6'
              }
            ]
          }
        ]
      }
    ];
  }

}

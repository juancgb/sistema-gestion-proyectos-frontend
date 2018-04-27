import { Actividad } from './actividades';

export interface Nivel {
    id: number;
    nombre: string;
    obligatorio: boolean;
    solicitud: boolean;
    actividades: Array<Actividad>;
}

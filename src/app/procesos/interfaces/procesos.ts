import { Nivel } from './nivel';

export interface Proceso {
    id: number;
    descripcion: string;
    niveles: Array<Nivel>;
}

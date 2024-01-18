export interface Persona {
    nombre: string;
    email: string;
}

export interface Ranking {
    id: number;
    persona: Persona;
    puntos: number;
}

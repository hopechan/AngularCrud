export class Juego {
     /**
      *Este constructor recibe las 
      *propiedades de nuestro objeto Juego
      *notese que se define el tipo de dato de cada propiedad
      */
     constructor(
        public id: number, 
        public titulo: string,
        public compania : string,
        public genero : string, 
        public fecha_lanzamiento: string
     ) {}
}

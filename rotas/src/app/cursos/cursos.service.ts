import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  getCursos(){
    return [
      {id: 1, nome: 'Angular 2'},
      {id: 2, nome: 'Java'}
    ];
  }

  getCurso(id: number){
    let cursos =  this.getCursos();

    for( let curso in cursos ) {
      if( cursos[curso].id == id ) {
        return cursos[curso];
      }
    }

    return null;  
  }

  constructor() { }

}

import { Injectable } from '@angular/core';

@Injectable()
export class AlunosService {

  private alunos: any[] = [
    { id: 1, nome: 'Sávio 1', email: 'savio1@savio.com.br' },
    { id: 2, nome: 'Sávio 2', email: 'savi2@savio.com.br' },
    { id: 3, nome: 'Sávio 3', email: 'savio3@savio.com.br' }
  ];

  constructor() { }

  getAlunos(){
    return this.alunos;
  }

  getAluno(id){
    let alunos =  this.getAlunos();

    for( let aluno in alunos ) {
      if( alunos[aluno].id == id ) {
        return alunos[aluno];
      }
    }

    return null; 
  }

}

import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunosService } from './alunos.service';
import { AlunosRoutingModule } from './alunos.module.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlunosComponent } from './alunos.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AlunosRoutingModule
  ],
  declarations: [AlunosComponent, AlunoFormComponent, AlunoDetalheComponent],
  providers: [
    AlunosService,
    AlunosDeactivateGuard
  ]
})
export class AlunosModule { }

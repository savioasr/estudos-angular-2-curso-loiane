import { AlunosDeactivateGuard } from './../guards/alunos-deactivate.guard';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunosComponent } from './alunos.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

const alunosRoutes: Routes = [
    { path: '', component: AlunosComponent, children: [
        { path: 'novo', component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard] },
        { path: ':id', component: AlunoDetalheComponent },
        { path: ':id/editar', component: AlunoFormComponent, canDeactivate: [AlunosDeactivateGuard] }
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {

}
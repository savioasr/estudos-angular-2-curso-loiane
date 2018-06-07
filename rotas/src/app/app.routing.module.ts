import { AlunosGuard } from './guards/alunos.guard';
import { CursosGuard } from './guards/cursos.guard';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { PaginaNaoEncontradaComponent } from './pagina-nao-encontrada/pagina-nao-encontrada.component';

const appRoutes: Routes = [
    { 
        path: 'cursos', 
        loadChildren: 'app/cursos/cursos.module#CursosModule',
        canActivate: [AuthGuard],
        canActivateChild: [CursosGuard]
    },
    { 
        path: 'alunos', 
        loadChildren: 'app/alunos/alunos.module#AlunosModule',
        canActivate: [AuthGuard],
        canActivateChild: [AlunosGuard]
    },
    { 
        path: 'login', component: LoginComponent 
    },
    { 
        path: 'home', 
        component: HomeComponent,
        canActivate: [AuthGuard]
    },
    {
        path: '', redirectTo: '/home', pathMatch: 'full'
    },
    { 
        path: '**', 
        component: PaginaNaoEncontradaComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
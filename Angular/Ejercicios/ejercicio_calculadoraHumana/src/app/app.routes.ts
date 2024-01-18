import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JugarComponent } from './jugar/jugar.component';
import { MisDatosComponent } from './mis-datos/mis-datos.component';
import { RankingComponent } from './ranking/ranking.component';

export const routes: Routes = [
    {path: '', pathMatch: 'full', redirectTo: '/home'},
    {path: 'home', component: HomeComponent},
    {path: 'home/jugar', component: JugarComponent},
    {path: 'home/mis-datos', component: MisDatosComponent},
    {path: 'home/ranking', component: RankingComponent}
];

import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { JugarComponent } from './jugar/jugar.component';
import { MisDatosComponent } from './mis-datos/mis-datos.component';
import { RankingComponent } from './ranking/ranking.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HomeComponent,
    JugarComponent,
    MisDatosComponent,
    RankingComponent,
    RouterLink,
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'ejercicio_calculadoraHumana';

  ngOnInit(): void {
    localStorage.clear();
  }
}

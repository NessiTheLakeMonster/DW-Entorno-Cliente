import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  verRanking() {
    alert('Va a ver el ranking')
  }

  verMisDatos() {
    alert('Va a ver sus datos')
  }

  verJugar() {
    alert('Va a jugar')
  }
}

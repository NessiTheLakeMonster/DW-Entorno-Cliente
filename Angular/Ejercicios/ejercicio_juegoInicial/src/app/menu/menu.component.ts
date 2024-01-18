import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  imagen1() {
    alert('Has pulsado la imagen 1');
  }

  imagen2() {
    alert('Has pulsado la imagen 2');
  }

  imagen3() {
    alert('Has pulsado la imagen 3');
  }
}

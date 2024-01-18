import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { Persona } from '../interfaces/todas-las-interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-datos',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './mis-datos.component.html',
  styleUrl: './mis-datos.component.css'
})
export class MisDatosComponent {

  constructor(private router: Router) { }

  formulario = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl('')
  });

  handleSubmit() {
    this.crearPersona();
    alert('Datos enviados');
    this.router.navigate(['/home']);
  }

  crearPersona() {
    var persona: Persona = {
      nombre: this.formulario.value.nombre || '',
      email: this.formulario.value.email || '',
    };

    localStorage.setItem('persona', JSON.stringify(persona));
    const serializarObj = localStorage.getItem('persona');

    if (serializarObj) {
      const persona = JSON.parse(serializarObj) as Persona;
      console.log('Persona:', persona);
    }
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Ranking } from '../interfaces/todas-las-interfaces';

@Component({
  selector: 'app-jugar',
  standalone: true,
  imports: [],
  templateUrl: './jugar.component.html',
  styleUrl: './jugar.component.css'
})
export class JugarComponent implements OnInit {
  public operacionActual: string = '';
  public resultadoActual: number = 0;
  public contador: number = 20;
  rankingId: number = 0;

  constructor(private router: Router) { }

  recuperarPersona() {
    const serializarObj = localStorage.getItem('persona');

    if (serializarObj) {
      const persona = JSON.parse(serializarObj);
      return persona;
    }
  }

  ngOnInit(): void {
    if (!this.recuperarPersona()) {
      this.router.navigate(['/home']);
      alert("Debes crear un usuario para poder jugar");
    }

    this.generarOperacionAleatoria();
    this.crearRanking();

    let intervalId = setInterval(() => {
      this.contador--;
      if (this.contador === 0) {
        clearInterval(intervalId);
        this.router.navigate(['/home']);
      }
    }, 1000);
  }

  crearRanking() {
    let persona = this.recuperarPersona();

    let ultimoId = Number(localStorage.getItem('ultimoId') || 0);

    var ranking: Ranking = {
      id: ultimoId + 1,
      persona: persona,
      puntos: 0
    };

    this.rankingId = ranking.id;
    localStorage.setItem('ultimoId', String(ranking.id));

    let serializarObj = localStorage.getItem('ranking');
    let arrayRanking: Ranking[] = [];

    if (serializarObj) {
      arrayRanking = JSON.parse(serializarObj);
    }

    arrayRanking.push(ranking);
    localStorage.setItem('ranking', JSON.stringify(arrayRanking));
  }

  generarOperacionAleatoria() {
    var n1 = Math.floor(Math.random() * 100);
    var n2 = Math.floor(Math.random() * 100);

    var operadores = ["+", "-", "*", "/"];
    var operador = operadores[Math.floor(Math.random() * 4)];

    this.operacionActual = n1 + operador + n2;
    try {
      this.resultadoActual = this.calcularOperacion(n1, n2, operador);
    } catch (error) {
      console.error('Error:', error);
    }

    if (this.resultadoActual % 1 != 0) { // Si el resultado no es entero
      this.generarOperacionAleatoria(); // Genera otra operación
    }
  }

  calcularOperacion(num1: number, num2: number, operador: string): number {
    switch (operador) {
      case '+':
        return num1 + num2;
      case '-':
        return num1 - num2;
      case '*':
        return num1 * num2;
      case '/':
        if (num2 === 0) {
          throw new Error('División por cero');
        }
        return num1 / num2;
      default:
        throw new Error('Operador no válido');
    }
  }

  sumarPuntosRanking() {
    let serializarObj = localStorage.getItem('ranking');
    let arrayRanking: Ranking[] = [];

    if (serializarObj) {
      arrayRanking = JSON.parse(serializarObj);
    }

    // Busca en el array 'arrayRanking' el objeto 'ranking' cuyo 'id' sea igual a 'this.rankingId'
    let ranking = arrayRanking.find(r => r.id === this.rankingId);

    if (ranking) {
      ranking.puntos += 1;
    }

    localStorage.setItem('ranking', JSON.stringify(arrayRanking));
  }

  validarOperacion(): boolean {
    let resultadoUsuario = (<HTMLInputElement>document.getElementById("resultadoUsuario")).value;

    if (resultadoUsuario == this.resultadoActual.toString()) {
      this.generarOperacionAleatoria();
      this.sumarPuntosRanking();
      alert("Correcto");
      (<HTMLInputElement>document.getElementById("resultadoUsuario")).value = "";
      return true;
    } else {
      alert("Incorrecto");
      (<HTMLInputElement>document.getElementById("resultadoUsuario")).value = "";
      return false;
    }
  }
}

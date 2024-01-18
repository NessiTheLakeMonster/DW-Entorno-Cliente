import { Component, OnInit } from '@angular/core';
import { Ranking } from '../interfaces/todas-las-interfaces';

@Component({
  selector: 'app-ranking',
  standalone: true,
  imports: [],
  templateUrl: './ranking.component.html',
  styleUrl: './ranking.component.css'
})
export class RankingComponent implements OnInit {
  ranking: any[] = [];
  public rankingList: Ranking[] = [];

  recuperarRanking() {
    const serializarObj = localStorage.getItem('ranking');

    if (serializarObj) {
      const ranking = JSON.parse(serializarObj);
      return ranking;
    }
  }

  ngOnInit() {
    this.ranking = this.recuperarRanking(); 
  }
}

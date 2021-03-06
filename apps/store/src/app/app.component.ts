import { Game } from '@bg-board/util-interface';
import { Component } from '@angular/core';
import { formatRating } from '@bg-board/store/util-formatters';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'bg-board-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  title = 'Board Game Hoard';
  games = this.http.get<Game[]>('/api/games');
  formatRating = formatRating;
}

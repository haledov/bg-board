import { Game } from '@bg-board/util-interface';
import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { formatRating } from '@bg-board/store/util-formatters';

@Component({
  selector: 'bg-board-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent {
  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  game$ = this.route.paramMap.pipe(
    map((params: ParamMap) => params.get('id')),
    switchMap(id => this.http.get<Game>(`/api/games/${id}`))
  );
  formatRating = formatRating;
}

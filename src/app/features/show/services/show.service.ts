import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ElementOnListOfShowBackend, Show, ShowAdapter, ShowBackend } from '../models/show.models';

@Injectable({
  providedIn: 'root',
})
export class ShowService {
  constructor(private http: HttpClient) {}

  /**
   * @description Asks the api for a list of shows
   * @returns {*}  {Observable<Show[]>}
   */
  public getShows(): Observable<Show[]> {
    return this.http
      .get<ElementOnListOfShowBackend[]>('http://api.tvmaze.com/search/shows?q=show')
      .pipe(
        map((showsInList: ElementOnListOfShowBackend[]) =>
          showsInList.map((showElement: ElementOnListOfShowBackend) => ShowAdapter.fromBackend(showElement.show))
        )
      );
  }

  /**
   * @description Asks the api for an specific show
   * @param {number} id
   * @returns {*}  {Observable<Show>}
   */
  public getShowById(id: number): Observable<Show> {
    return this.http.get<ShowBackend>(`http://api.tvmaze.com/shows/${id}`).pipe(map((show: ShowBackend) => ShowAdapter.fromBackend(show)));
  }

  // Client side caching could be implemented
}

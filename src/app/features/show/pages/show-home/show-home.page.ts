import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Show } from '../../models/show.models';
import { ShowService } from '../../services/show.service';

@Component({
  selector: 'app-show-home',
  templateUrl: './show-home.page.html',
  styleUrls: ['./show-home.page.scss'],
})
export class ShowHomePage {
  public readonly SHOWS_PER_PAGE = 6;
  public shows?: Show[];
  public currentPage = 1;

  constructor(private showSrv: ShowService, private router: Router) {
    this.getShows();
  }

  public trackById(_index: number, item: Show): number {
    return item.id;
  }

  public changePage(page: number): void {
    this.currentPage = page;
  }

  public goToDetail(show: Show): void {
    this.router.navigate(['show', 'detail', show.id]);
  }

  private getShows(): void {
    this.showSrv.getShows().subscribe((shows: Show[]) => (this.shows = shows));
  }
}

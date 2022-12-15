import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Show } from '../../models/show.models';
import { ShowService } from '../../services/show.service';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.page.html',
  styleUrls: ['./show-detail.page.scss'],
})
export class ShowDetailPage implements OnInit {
  public show?: Show;
  private id!: number;

  constructor(private showSrv: ShowService, private route: ActivatedRoute, private router: Router) {}

  public ngOnInit(): void {
    this.getId();
    this.getShowData();
  }

  public navigateBack(): void {
    this.router.navigateByUrl('..');
  }

  private getId(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    // @todo: We can add validations for the id here
  }

  private getShowData(): void {
    this.showSrv.getShowById(this.id).subscribe((show: Show) => (this.show = show));
    /*
     We could've used a service or the router to pass this object instead of calling the API again.
      The alternative to choose depends on a lot of factors that are outside the scope of the challenge.
      Right now an extra call to the API is not harmful and could be improved with client-side caching.
     */
  }
}

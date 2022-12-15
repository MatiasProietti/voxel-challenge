import { Router } from '@angular/router';
import { byTestId, createRoutingFactory, createSpyObject, SpectatorRouting, SpyObject } from '@ngneat/spectator';
import { NgxPaginationModule } from 'ngx-pagination';
import { of } from 'rxjs';
import { ShowCardModule } from '../../components/show-card/show-card.module';
import { Show } from '../../models/show.models';
import { ShowService } from '../../services/show.service';
import { ShowHomePage } from './show-home.page';

describe('ShowHomePage', () => {
  let spectator: SpectatorRouting<ShowHomePage>;
  let routerSpy: SpyObject<Router>;
  let showServiceSpy: SpyObject<ShowService>;
  const fakeShows: Show[] = [
    {
      id: 1,
      name: 'Fake Show',
      rating: { average: 7.3 },
      image: { medium: 'https://picsum.photos/200/300', original: '' }, //This is not ideal, it's only to make this test simpler for the excercise
      summary:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
      genres: ['Comedy', 'Action'],
    },
  ];

  const createComponent = createRoutingFactory({
    component: ShowHomePage,
    imports: [NgxPaginationModule, ShowCardModule],
  });

  beforeEach(() => {
    showServiceSpy = createSpyObject(ShowService);
    showServiceSpy.getShows.and.returnValue(of(fakeShows));

    routerSpy = createSpyObject(Router);
    spectator = createComponent({
      providers: [
        { provide: ShowService, useValue: showServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });
  });

  it('gets the shows', () => {
    spectator.detectChanges();
    expect(showServiceSpy.getShows).toHaveBeenCalled();
  });

  it('navigates to show detail when clicking the show card', () => {
    spectator.click(byTestId('card'));
    expect(routerSpy.navigate).toHaveBeenCalledWith(['show', 'detail', fakeShows[0].id]);
  });
});

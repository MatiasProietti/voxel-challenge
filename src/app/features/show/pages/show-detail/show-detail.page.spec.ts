import { ShowDetailPage } from './show-detail.page';

import { Router } from '@angular/router';
import { byTestId, createRoutingFactory, createSpyObject, SpectatorRouting, SpyObject } from '@ngneat/spectator';
import { of } from 'rxjs';
import { Show } from '../../models/show.models';
import { ShowService } from '../../services/show.service';

describe('ShowDetailPage', () => {
  let spectator: SpectatorRouting<ShowDetailPage>;
  let routerSpy: SpyObject<Router>;
  let showServiceSpy: SpyObject<ShowService>;
  const fakeShow: Show = {
    id: 1,
    name: 'Fake Show',
    rating: { average: 7.3 },
    image: { medium: 'https://picsum.photos/200/300', original: '' }, //This is not ideal, it's only to make this test simpler for the excercise
    summary:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
    genres: ['Comedy', 'Action'],
  };

  const createComponent = createRoutingFactory({
    component: ShowDetailPage,
    params: { id: fakeShow.id },
  });

  beforeEach(() => {
    showServiceSpy = createSpyObject(ShowService);
    showServiceSpy.getShowById.and.returnValue(of(fakeShow));

    routerSpy = createSpyObject(Router);
    spectator = createComponent({
      providers: [
        { provide: ShowService, useValue: showServiceSpy },
        { provide: Router, useValue: routerSpy },
      ],
    });
    spectator.detectChanges();
  });

  it('gets the show and sets the variable', () => {
    expect(spectator.component.show).toBe(fakeShow);
  });

  it('displays the show data', () => {
    expect(spectator.query(byTestId('image'))).toHaveAttribute('src', fakeShow.image.medium);
    expect(spectator.query(byTestId('name'))).toHaveText(fakeShow.name);
    expect(spectator.query(byTestId('genres'))).toHaveText(fakeShow.genres);
    expect(spectator.query(byTestId('summary'))).toHaveText(fakeShow.summary);
  });

  it('navigates back', () => {
    spectator.click(byTestId('button'));
    expect(routerSpy.navigateByUrl).toHaveBeenCalledWith('..');
  });
});

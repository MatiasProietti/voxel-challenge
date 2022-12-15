import { HttpClient } from '@angular/common/http';
import { createServiceFactory, createSpyObject, SpectatorService, SpyObject } from '@ngneat/spectator';
import { of } from 'rxjs';
import { ElementOnListOfShowBackend, Show, ShowAdapter } from '../models/show.models';

import { ShowService } from './show.service';

describe('ShowService', () => {
  let spectator: SpectatorService<ShowService>;
  let httpSpy: SpyObject<HttpClient>;

  const fakeShows: ElementOnListOfShowBackend[] = [
    {
      score: 1,
      show: {
        id: 1,
        name: 'Fake Show',
        rating: { average: 7.3 },
        image: { medium: 'https://picsum.photos/200/300', original: '' }, //This is not ideal, it's only to make this test simpler for the excercise
        summary:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
        genres: ['Comedy', 'Action'],
      },
    },
    {
      score: 2,
      show: {
        id: 1,
        name: 'Fake Show',
        rating: { average: 7.3 },
        image: { medium: 'https://picsum.photos/200/300', original: '' }, //This is not ideal, it's only to make this test simpler for the excercise
        summary:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
        genres: ['Comedy', 'Action'],
      },
    },
    {
      score: 3,
      show: {
        id: 1,
        name: 'Fake Show',
        rating: { average: 7.3 },
        image: { medium: 'https://picsum.photos/200/300', original: '' }, //This is not ideal, it's only to make this test simpler for the excercise
        summary:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim',
        genres: ['Comedy', 'Action'],
      },
    },
  ];

  const createService = createServiceFactory(ShowService);

  beforeEach(() => {
    httpSpy = createSpyObject(HttpClient);
    spectator = createService({
      providers: [{ provide: HttpClient, useValue: httpSpy }],
    });
  });

  it('gets a list of shows and maps it', () => {
    httpSpy.get.and.returnValue(of(fakeShows));
    const result = fakeShows.map((showElement: ElementOnListOfShowBackend) => ShowAdapter.fromBackend(showElement.show));
    spectator.service.getShows().subscribe((shows: Show[]) => expect(shows).toEqual(result));
  });

  it('gets a show by id and maps it', () => {
    httpSpy.get.and.returnValue(of(fakeShows[0].show));
    spectator.service
      .getShowById(fakeShows[0].show.id)
      .subscribe((show: Show) => expect(show).toEqual(ShowAdapter.fromBackend(fakeShows[0].show)));
  });
});

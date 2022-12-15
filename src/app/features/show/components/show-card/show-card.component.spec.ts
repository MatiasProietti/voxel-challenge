import { MatCardModule } from '@angular/material/card';
import { byTestId, createComponentFactory, Spectator } from '@ngneat/spectator';

import { ShowCardComponent } from './show-card.component';

describe('ShowCardComponent', () => {
  let spectator: Spectator<ShowCardComponent>;
  const createComponent = createComponentFactory({
    component: ShowCardComponent,
    imports: [MatCardModule],
  });

  beforeEach(() => (spectator = createComponent()));

  it('shows the title', () => {
    const fakeTitle = 'Hello World!';
    spectator.setInput('title', fakeTitle);
    expect(spectator.query(byTestId('title'))).toHaveText(fakeTitle);
  });

  it('shows the rating', () => {
    const fakeRating = 4.3;
    spectator.setInput('rating', fakeRating);
    expect(spectator.query(byTestId('rating'))).toHaveText(`Rating: ${fakeRating}`);
  });

  it('shows the image', () => {
    const fakeImage = 'https://picsum.photos/200/300'; //This is not ideal, it's only to make this test simpler for the excercise
    spectator.setInput('image', fakeImage);
    expect(spectator.query(byTestId('image'))).toHaveAttribute('src', fakeImage);
  });
});

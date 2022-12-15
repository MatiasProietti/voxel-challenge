export type ShowImage = {
  medium: string;
  original: string;
};

export type ShowRating = {
  average: number;
};

/*
  Depending on coding styles the types above could belong on a different
    file inside a "types" folder
*/

export interface ElementOnListOfShowBackend {
  score: number;
  show: ShowBackend;
}

export interface ShowBackend {
  id: number;
  name: string;
  image: ShowImage;
  rating: ShowRating;
  summary: string;
  genres: string[];
  // ... and more but for this excercise we only care about those 6.
}

export class Show {
  public readonly id: number;
  public name: string;
  public image: ShowImage;
  public rating: ShowRating;
  public summary: string;
  public genres: string[];

  constructor(id: number, name: string, image: ShowImage, rating: ShowRating, summary: string, genres: string[]) {
    this.id = id;
    this.name = name;
    this.image = image;
    this.rating = rating;
    this.summary = summary;
    this.genres = genres;
  }
}

export class ShowAdapter {
  static fromBackend(showFromBackend: ShowBackend): Show {
    return new Show(
      showFromBackend.id,
      showFromBackend.name,
      showFromBackend.image,
      showFromBackend.rating,
      showFromBackend.summary,
      showFromBackend.genres
    );
  }
}

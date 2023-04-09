export interface ICard {
  title: string;
  subtitle: string;
  image: string;
}

export interface IForm {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  country: string;
  gender: string;
  image: File | null;
}

export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
}

export interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
}

export interface Planet {
  name: string;
  climate: string;
  terrain: string;
  population: string;
}

export interface ApiAll extends Planet, Person, Film {}

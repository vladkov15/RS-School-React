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

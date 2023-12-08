export interface TypeOfResource {
  id: number;
  name: string;
}

export interface Author {
  id: number;
  name: string;
  biography: string;
}

export interface Genre {
  id: number;
  name: string;
  description: string;
}

export interface ResourceProps {
  id: number;
  title: string;
  quantity: number;
  available: boolean;
  description: string;
  typeOfResource: TypeOfResource;
  authors: Author[];
  genres: Genre[];
}

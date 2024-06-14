export interface Material {
    id: string;
    name: string;
    styles: {
      id: string;
      name: string;
      colors: {
        id: string;
        name: string;
        heights: {
          id: string;
          feet: string;
        }[];
      }[];
    }[];
  }
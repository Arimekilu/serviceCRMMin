export interface CarSelector {
  models: string[],
  brand: string,
}

export const cars: CarSelector[] = [
  {
    brand: "Audi",
    models: ["A1", "A3", "A4", "A5", "A6", "A7", "A8", "Q2", "Q3", "Q5", "Q7", "Q8", "TT"]
  },
  {
    brand: "BMW",
    models: ["1 Series", "2 Series", "3 Series", "4 Series", "5 Series", "6 Series", "7 Series", "8 Series", "X1", "X2", "X3", "X4", "X5", "X6", "X7"]
  },
  {
    brand: "Mercedes-Benz",
    models: ["A-Class", "B-Class", "C-Class", "CLA-Class", "CLS-Class", "E-Class", "G-Class", "GLA-Class", "GLB-Class", "GLC-Class", "GLE-Class", "GLS-Class", "S-Class"]
  },
  {
    brand: "Volkswagen",
    models: ["Arteon", "Atlas", "Beetle", "CC", "Golf", "Jetta", "Passat", "Tiguan", "Touareg"]
  }
];

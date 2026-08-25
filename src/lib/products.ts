export type Product = {
  id: number;
  name: string;
  images: string[];
  length: string;
  width: string;
  totalFabric: string;
  fabricType: string;
  laceDesign: string;
  sitaraWork: string;
  color: string;
  price: number;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Organza Fancy Cutwork Lace Dupatta",
    images: [
      "/images/dupta_1/1.jpg",
      "/images/dupta_1/2.jpg",
      "/images/dupta_1/3.jpg"
    ],
    length: "3 gaz",
    width: "4.5 gaz",
    totalFabric: "9 gaz",
    fabricType: "Organza",
    laceDesign: "Fancy Cutwork Lace",
    sitaraWork: "No Sitara Work",
    color: "Ivory",
    price: 10000
  },
  {
    id: 2,
    name: "Luxury Kashees Lace Net Dupatta",
    images: [
      "/images/dupta_2/1.jpg",
      "/images/dupta_2/2.jpg",
      "/images/dupta_2/3.jpg",
      "/images/dupta_2/4.jpg"
    ],
    length: "3 gaz",
    width: "4.5 gaz",
    totalFabric: "9 gaz",
    fabricType: "Net",
    laceDesign: "Luxury Kashees Lace",
    sitaraWork: "Light Sitara Work",
    color: "Gold",
    price: 9000
  },
  {
    id: 3,
    name: "Kundan Lace Duptta",
    images: [
      "/images/dupta_3/1.jpg",
      "/images/dupta_3/2.jpg",
      "/images/dupta_3/3.jpg",
      "/images/dupta_3/4.jpg"
    ],
    length: "3 gaz",
    width: "3 gaz",
    totalFabric: "2.5 gaz",
    fabricType: "Net",
    laceDesign: "Kundan Lace",
    sitaraWork: "Including",
    color: "Ivory",
    price: 10000
  },
  {
    id: 4,
    name: "Organza Fancy Cutwork Lace Dupatta",
    images: [
      "/images/dupta_4/1.jpg",
      "/images/dupta_4/2.jpg",
      "/images/dupta_4/3.jpg",
      "/images/dupta_4/4.jpg"
    ],
    length: "3 gaz",
    width: "4.5 gaz",
    totalFabric: "9 gaz",
    fabricType: "Organza",
    laceDesign: "Fancy Cutwork Lace",
    sitaraWork: "No Sitara Work",
    color: "Ivory",
    price: 10000
  },
  {
    id: 5,
    name: "Kashees Kiran Lace Dupatta",
    images: [
      "/images/dupta_5/1.jpg",
      "/images/dupta_5/2.jpg",
      "/images/dupta_5/3.jpg",
      "/images/dupta_5/4.jpg"
    ],
    length: "3 gaz",
    width: "4.5 gaz",
    totalFabric: "9 gaz",
    fabricType: "Net",
    laceDesign: "Kashees Kiran Lace",
    sitaraWork: "Including",
    color: "Ivory",
    price: 9999
  },
  {
    id: 6,
    name: "Hoor Classic Dupatta",
    images: [
      "/images/dupta_1/c785c36a-16bd-49c8-9b4c-d97918357828.jpg",
      "/images/dupta_2/1.jpg",
      "/images/dupta_2/2.jpg",
      "/images/dupta_2/3.jpg"
    ],
    length: "100 inches",
    width: "38 inches",
    totalFabric: "1.8 yards",
    fabricType: "Chiffon",
    laceDesign: "Kiran Lace",
    sitaraWork: "Light Sitara Work",
    color: "Maroon",
    price: 9500
  },
  {
    id: 7,
    name: "Zainab Signature",
    images: [
      "/images/dupta_2/4.jpg",
      "/images/dupta_2/1.jpg",
      "/images/dupta_2/2.jpg",
      "/images/dupta_2/3.jpg"
    ],
    length: "108 inches",
    width: "42 inches",
    totalFabric: "2.8 yards",
    fabricType: "Silk",
    laceDesign: "Minimalist Border",
    sitaraWork: "Medium Sitara Work",
    color: "Gold",
    price: 28000
  },
  {
    id: 8,
    name: "Maryam Royal Veil",
    images: [
      "/images/dupta_1/732d1b57-8e7d-4a23-9197-f373ad1e445d.jpg",
      "/images/dupta_1/c785c36a-16bd-49c8-9b4c-d97918357828.jpg",
      "/images/dupta_2/1.jpg",
      "/images/dupta_2/2.jpg"
    ],
    length: "115 inches",
    width: "48 inches",
    totalFabric: "4 yards",
    fabricType: "Organza",
    laceDesign: "Scalloped Lace",
    sitaraWork: "Heavy Sitara Work",
    color: "Ivory",
    price: 45000
  }
];

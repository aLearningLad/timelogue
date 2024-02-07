export type Inavlinks = {
  id: number;
  title: string;
  img: React.ReactElement;
  uniqueLink: string;
};

export type Ifromthenet = {
  id: number;
  articleTitle: string;
  articleLink: string;
  articleThumbnail: string;
  snippet: string;
};

export type Ibrandcarddata = {
  id: number;
  img: string;
  sociallink: string;
  index?: number;
  brandName: string;
};

export type Iwatchcard = {
  id: number | string;
  maker: string;
  model: string;
  shopping_link: string;
  rating: number;
  details: string;
  case_material: string;
  water_resistance: boolean;
  power_reserve_hours: number;
  mechanical: boolean;
  price: number;
};

export interface Product {
  id: string;
  title: string;
  brandId: string;
  image: string;
  price: number | string;
}

export interface Brand {
  id: string;
  title: string;
  logo: string;
}

export interface Catalog {
  products: Product[];
  brands: Brand[];
}

import type { Breadcrumb } from './breadcrumb';
import type { Product } from './product';

export interface Products {
  err: number;
  msg: string;
  breadcrumbs: Breadcrumb[];
  data: Product[];
}

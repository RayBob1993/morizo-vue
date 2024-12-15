import type { IVBreadcrumb } from '../../Breadcrumbs/types';

export interface IVPageLayoutProps {
  title?: string;
  loading?: boolean;
  breadcrumbs?: Array<IVBreadcrumb>;
}

export interface IVPageLayoutSlots {
  custom?: () => any;
  body?: () => any;
  default?: () => any;
}

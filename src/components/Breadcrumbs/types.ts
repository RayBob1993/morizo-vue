import type { IUrlProp } from '../../props';

export interface IVBreadcrumb extends IUrlProp {
  title: string;
}

export interface IVBreadcrumbProps {
  breadcrumbs: Array<IVBreadcrumb>;
}

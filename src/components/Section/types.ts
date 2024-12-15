export interface IVSectionProps {
  title?: string;
}

export interface IVSectionSlots {
  default?: () => any;
  body?: () => any;
  footer?: () => any;
}

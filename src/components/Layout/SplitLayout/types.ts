export interface IVSplitLayoutProps {
  sidebarDirection?: 'left' | 'right';
}

export interface IVSplitLayoutSlots {
  sidebar?: () => any;
  default?: () => any;
}

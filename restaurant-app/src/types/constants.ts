import { ComponentType } from 'react';

export interface Route {
  label: string;
  path: string;
  component?: ComponentType<any>;
  isHeader: boolean;
}

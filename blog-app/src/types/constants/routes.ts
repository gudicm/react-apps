import { FC } from 'react';

export interface Route {
  label: string;
  path: string;
  component: FC;
  isHeader: boolean;
}

import type { BaseShape } from '../common';

export type Quadrilateral = BaseShape & {
  type: 'rectangle';
  width: number;
  height: number;
};

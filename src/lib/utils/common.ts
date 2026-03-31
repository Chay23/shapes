import { clsx, type ClassValue } from 'clsx';
import {
  Circle,
  Hand,
  Minus,
  MousePointer,
  MoveRight,
  Square,
  Triangle,
  Type,
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import {
  TYPE_ARROW,
  TYPE_ELLIPSE,
  TYPE_LINE,
  TYPE_RECTANGLE,
  TYPE_TEXT,
  TYPE_TRIANGLE,
} from '../constants/common';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toolbarOptions = [
  {
    id: 'hand',
    component: Hand,
  },
  {
    id: '',
    component: MousePointer,
  },
  {
    id: 'rectangle',
    component: Square,
    dataType: TYPE_RECTANGLE,
  },
  { id: 'triangle', component: Triangle, dataType: TYPE_TRIANGLE },
  { id: 'arrow', component: MoveRight, dataType: TYPE_ARROW },
  { id: 'line', component: Minus, dataType: TYPE_LINE },
  { id: 'ellipse', component: Circle, dataType: TYPE_ELLIPSE },
  { id: 'text', component: Type, dataType: TYPE_TEXT },
];

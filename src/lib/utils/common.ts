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

export const getRotationAngle = (
  cx: number,
  cy: number,
  pointerX: number,
  pointerY: number,
) => {
  return Math.atan2(pointerY - cy, pointerX - cx) * (180 / Math.PI);
};

export function toRad(angle: number) {
  return (angle * Math.PI) / 180;
}

export function getLocalXAxisStep(rad: number) {
  return { x: Math.cos(rad), y: Math.sin(rad) };
}

export function getLocalYAxisStep(rad: number) {
  return { x: -Math.sin(rad), y: Math.cos(rad) };
}

export function getAxisMovement(
  dx: number,
  dy: number,
  axis: { x: number; y: number },
) {
  return dx * axis.x + dy * axis.y;
}

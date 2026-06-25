// src/lib/sharedState.ts
import * as Y from 'yjs';
import { HocuspocusProvider } from '@hocuspocus/provider';
import type { s } from '@/types';

export const ydoc = new Y.Doc();

// HocuspocusProvider connects directly to your new Hocuspocus server
export const provider = new HocuspocusProvider({
  url: 'ws://localhost:1234',
  name: 'main-canvas-room', // This becomes the roomName on the backend
  document: ydoc,
});

// Your shared shapes map stays exactly the same!
export const sharedShapesMap = ydoc.getMap<s.Shape>('shapes');
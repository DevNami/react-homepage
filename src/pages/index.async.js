import asyncRoute from 'lib/asyncRoute';

export const Home = asyncRoute(() => import('./Home'));
export const Guide = asyncRoute(() => import('./Guide'));
export const Write = asyncRoute(() => import('./Write'));

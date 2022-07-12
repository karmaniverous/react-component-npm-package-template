import { inspect as utilInspect } from 'util';

export const inspect = (o) => utilInspect(o, false, null);

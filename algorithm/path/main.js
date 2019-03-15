import { canonicalize } from './canonicalize';
import { close } from './close';
import { concatenate } from './concatenate';
import { flip } from './flip';
import { isClosed } from './isClosed';
import { measureArea } from './measureArea';
import { toGeneric } from './toGeneric';
import { toPolygon } from './toPolygon';
import { toZ0Polygon } from './toZ0Polygon';
import { transform } from './transform';

export {
  canonicalize,
  close,
  concatenate,
  flip,
  isClosed,
  measureArea,
  toGeneric,
  toPolygon,
  toZ0Polygon,
  transform
};

import { fromScaling } from '@jsxcad/math-mat4';
import { fromTranslation } from '@jsxcad/math-mat4';

export const translate = (vector, path) => transform(fromTranslation(vector), path);
export const scale = (vector, path) => transform(fromScaling(vector), path);


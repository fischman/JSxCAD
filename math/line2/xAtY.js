import { origin } from './origin';

/**
 * Determine the X coordinate of the given line at the Y coordinate.
 *
 * The X coordinate will be Infinity if the line is parallel to the X axis.
 *
 * @param {Number} y the Y coordinate on the line
 * @param {line2} line the 2D line of reference
 * @return {Number} the X coordinate on the line
 */
export const xAtY = (y, line) => {
  // px = (distance - normal.y * y) / normal.x
  let x = (line[2] - (line[1] * y)) / line[0];
  if (Number.isNaN(x)) {
    const org = origin(line);
    x = org[0];
  }
  return x;
};

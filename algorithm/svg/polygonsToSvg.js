import { canonicalize, measureBoundingBox, translate } from '@jsxcad/algorithm-polygons';
import { negate } from '@jsxcad/math-vec3';

/** Serialize the give objects to SVG format.
 * @param {Object} [options] - options for serialization
 * @param {Object|Array} objects - objects to serialize as SVG
 * @returns {Array} serialized contents, SVG format
 */
export const polygonsToSvg = (options = {}, rawPolygons) => {
  const polygons = canonicalize(rawPolygons);
  const min = measureBoundingBox(polygons)[0];
  // TODO: Add transform and translate support to polygons.
  const shiftedPolygons = canonicalize(translate(negate(min), polygons));
  const [width, height] = measureBoundingBox(polygons)[1];

  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<!-- Generated by jsxcad -->`,
    `<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1 Tiny//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11-tiny.dtd">`,
    `<svg baseProfile="tiny" height="${height} mm" width="${width} mm" viewBox="0 0 ${width} ${height}" version="1.1" xmlns="http://www.w3.org/2000/svg">`,
    ...shiftedPolygons.map(polygon => `<path d="${polygon.map((point, index) => `${index === 0 ? 'M' : 'L'}${point[0]} ${point[1]}`).join(' ')}"/>`),
    `</svg>`
  ].join('\n');
};

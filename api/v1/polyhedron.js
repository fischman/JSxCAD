import { CSG } from './CSG';

/**
 * polyhedron({      // openscad-like (e.g. pyramid)
 *   points: [ [10,10,0],[10,-10,0],[-10,-10,0],[-10,10,0], // the four points at base
 *             [0,0,10] ],                                  // the apex point
 *   triangles: [ [0,1,4],[1,2,4],[2,3,4],[3,0,4],          // each triangle side
 *                [1,0,3],[2,1,3] ]                         // two triangles for square base
 * });
 *
 */

export const polyhedron = ({ points = [], triangles = [] }) => {
  const polygons = [];

  for (const triangle of triangles) {
    polygons.push(triangle.map(point => points[point]));
  }

  return CSG.fromPolygons(polygons);
};

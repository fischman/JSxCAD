import { canonicalize as canonicalizePath } from '@jsxcad/algorithm-path';

export const canonicalize = (paths) => {
  let canonicalized = paths.map(canonicalizePath);
  if (paths.properties !== undefined) {
    // Transfer properties.
    canonicalized.properties = paths.properties;
  }
  return canonicalized;
};

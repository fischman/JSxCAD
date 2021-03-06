/**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */
export const max = ([ax, ay], [bx, by]) => [Math.max(ax, bx), Math.max(ay, by)];

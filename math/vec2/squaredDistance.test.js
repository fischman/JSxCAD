const squaredDistance = require('./squaredDistance');
const test = require('ava');

test('vec2: squaredDistance() should return correct values', (t) => {
  t.is(squaredDistance([0, 0], [0, 0]), 0);
  t.is(squaredDistance([0, 0], [1, 2]), 5);
  t.is(squaredDistance([0, 0], [-1, 2]), 5);
  t.is(squaredDistance([0, 0], [-1, -2]), 5);
  t.is(squaredDistance([0, 0], [1, -2]), 5);
});

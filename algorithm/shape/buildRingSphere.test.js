import { buildRingSphere } from './buildRingSphere';
import { canonicalize } from '@jsxcad/algorithm-polygons';
import { test } from 'ava';

test("Build a ring sphere", t => {
  t.deepEqual(canonicalize(buildRingSphere({ resolution: 8 })),
              [[[0,-0.70711,0.70711],[-0.5,-0.5,0.70711],[-0.70711,-0.70711,0]],
               [[0,-0.70711,0.70711],[-0.70711,-0.70711,0],[0,-1,0]],
               [[0,-0.70711,0.70711],[0,-1,0],[0.70711,-0.70711,0]],
               [[0,-0.70711,0.70711],[0.70711,-0.70711,0],[0.5,-0.5,0.70711]],
               [[0,-0.70711,0.70711],[0.5,-0.5,0.70711],[0,0,1]],
               [[0,-0.70711,0.70711],[0,0,1],[-0.5,-0.5,0.70711]],
               [[-0.70711,0,0.70711],[-0.5,-0.5,0.70711],[0,0,1]],
               [[-0.70711,0,0.70711],[0,0,1],[-0.5,0.5,0.70711]],
               [[-0.70711,0,0.70711],[-1,0,0],[-0.70711,-0.70711,0]],
               [[-0.70711,0,0.70711],[-0.70711,-0.70711,0],[-0.5,-0.5,0.70711]],
               [[0,0.70711,0.70711],[-0.5,0.5,0.70711],[0,0,1]],
               [[0,0.70711,0.70711],[0,0,1],[0.5,0.5,0.70711]],
               [[0.70711,0,0.70711],[0.5,-0.5,0.70711],[0.70711,-0.70711,0]],
               [[0.70711,0,0.70711],[0.70711,-0.70711,0],[1,0,0]],
               [[0.70711,0,0.70711],[0.5,0.5,0.70711],[0,0,1]],
               [[0.70711,0,0.70711],[0,0,1],[0.5,-0.5,0.70711]],
               [[-0.70711,0.70711,0],[-1,0,0],[-0.70711,0,0.70711]],
               [[-0.70711,0.70711,0],[-0.70711,0,0.70711],[-0.5,0.5,0.70711]],
               [[-0.70711,0.70711,0],[-0.5,0.5,0.70711],[0,0.70711,0.70711]],
               [[-0.70711,0.70711,0],[0,0.70711,0.70711],[0,1,0]],
               [[0.70711,0.70711,0],[0,1,0],[0,0.70711,0.70711]],
               [[0.70711,0.70711,0],[0,0.70711,0.70711],[0.5,0.5,0.70711]],
               [[0.70711,0.70711,0],[0.5,0.5,0.70711],[0.70711,0,0.70711]],
               [[0.70711,0.70711,0],[0.70711,0,0.70711],[1,0,0]],
               [[0,0.70711,-0.70711],[-0.5,0.5,-0.70711],[-0.70711,0.70711,0]],
               [[0,0.70711,-0.70711],[-0.70711,0.70711,0],[0,1,0]],
               [[0,0.70711,-0.70711],[0,1,0],[0.70711,0.70711,0]],
               [[0,0.70711,-0.70711],[0.70711,0.70711,0],[0.5,0.5,-0.70711]],
               [[0,0.70711,-0.70711],[0.5,0.5,-0.70711],[0,0,-1]],
               [[0,0.70711,-0.70711],[0,0,-1],[-0.5,0.5,-0.70711]],
               [[0.5,-0.5,-0.70711],[0.70711,-0.70711,0],[0,-1,0]],
               [[0.5,-0.5,-0.70711],[0,-1,0],[0,-0.70711,-0.70711]],
               [[0.5,-0.5,-0.70711],[0,-0.70711,-0.70711],[0,0,-1]],
               [[-0.5,-0.5,-0.70711],[0,0,-1],[0,-0.70711,-0.70711]],
               [[-0.5,-0.5,-0.70711],[0,-0.70711,-0.70711],[0,-1,0]],
               [[-0.5,-0.5,-0.70711],[0,-1,0],[-0.70711,-0.70711,0]],
               [[0.70711,0,-0.70711],[0.5,0.5,-0.70711],[0.70711,0.70711,0]],
               [[0.70711,0,-0.70711],[0.70711,0.70711,0],[1,0,0]],
               [[0.70711,0,-0.70711],[1,0,0],[0.70711,-0.70711,0]],
               [[0.70711,0,-0.70711],[0.70711,-0.70711,0],[0.5,-0.5,-0.70711]],
               [[0.70711,0,-0.70711],[0.5,-0.5,-0.70711],[0,0,-1]],
               [[0.70711,0,-0.70711],[0,0,-1],[0.5,0.5,-0.70711]],
               [[-0.70711,0,-0.70711],[-0.5,0.5,-0.70711],[0,0,-1]],
               [[-0.70711,0,-0.70711],[0,0,-1],[-0.5,-0.5,-0.70711]],
               [[-0.70711,0,-0.70711],[-0.5,-0.5,-0.70711],[-0.70711,-0.70711,0]],
               [[-0.70711,0,-0.70711],[-0.70711,-0.70711,0],[-1,0,0]],
               [[-0.70711,0,-0.70711],[-1,0,0],[-0.70711,0.70711,0]],
               [[-0.70711,0,-0.70711],[-0.70711,0.70711,0],[-0.5,0.5,-0.70711]]]);
});

export const knightMoves = (startingPos, targetPos) => {
  if (!Array.isArray(startingPos) || startingPos.length < 2) {
    throw new Error("Invalid start position");
  }

  if (!Array.isArray(targetPos) || targetPos.length < 2) {
    throw new Error("Invalid target position");
  }

  const startingV = { edge: startingPos, prevEdge: null };
  let targetReached = false;
  const path = [];
  const visited = [];
  const queue = [startingV];

  while (queue.length !== 0 && !targetReached) {
    const curr = queue.shift();
    if (visited.includes(curr)) return;

    let currPositions = getPositions(curr);
    currPositions.forEach((p) => {
      if (samePosition(p.edge, targetPos)) {
        targetReached = true; // break out the loop
        while (p !== null) {
          // save path that led us to the target
          path.push(p.edge);
          p = p.prevEdge;
        }
      }
    });

    queue.push(...currPositions);
    visited.push(curr);
  }

  console.log(`You made it in ${path.length - 1} moves!`);
  path.reverse();
  path.forEach((v) => {
    console.log(v);
  });
};

function getPositions(v) {
  const origin = v.edge;
  const validPositions = [];
  directions.forEach((d) => {
    const testPos = [];
    testPos[0] = origin[0] + d.stepsForward;
    testPos[1] = origin[1] + d.sideSteps;

    if (isOnLimits(testPos[0]) && isOnLimits(testPos[1]))
      validPositions.push({ edge: testPos, prevEdge: v });
  });

  return validPositions;
}

const directions = [
  { stepsForward: 1, sideSteps: 2 },
  { stepsForward: 1, sideSteps: -2 },
  { stepsForward: -1, sideSteps: 2 },
  { stepsForward: -1, sideSteps: -2 },
  { stepsForward: 2, sideSteps: 1 },
  { stepsForward: 2, sideSteps: -1 },
  { stepsForward: -2, sideSteps: 1 },
  { stepsForward: -2, sideSteps: -1 },
];

const isOnLimits = (a) => a <= 7 && a >= 0;
const samePosition = (a, b) => a[0] === b[0] && a[1] === b[1];

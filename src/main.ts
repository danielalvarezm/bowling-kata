function calculateBowlingScore(frames: string): number {
  return frames.replaceAll('-', '0')
    .split(' ')
    .flatMap((frame) => frame.split(''))
    .map((roll, index, frames) => interpretSpare(roll, index, frames))
    .map(Number)
    .reduce((a, b) => a + b);
}

export {calculateBowlingScore};

function interpretSpare(roll: string, index: number, frames: string[]): string {
  if (roll === '/' && index < frames.length - 2) {
    roll = (10 - Number(frames[index - 1]) + Number(frames[index + 1]))
      .toString();
  }
  if (roll === '/') {
    roll = (10 - Number(frames[index - 1])).toString();
  }
  return roll;
}


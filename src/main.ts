function calculateBowlingScore(frames: string): number {
  return frames.replaceAll('-', '0')
    .split(' ')
    .flatMap((frame) => frame.split(''))
    .map((roll, index, frames) => interpretSpare(roll, index, frames))
    .map((roll, index, frames) => interpretStrike(roll, index, frames))
    .map(Number)
    .reduce((a, b) => a + b);
}

export {calculateBowlingScore};

function interpretSpare(roll: string, index: number, frames: string[]): string {
  const isRollSpare = roll === '/';
  const isNotLastRoll = index < frames.length - 2;
  if (isRollSpare) {
    const calculusForSpareRoll = 10 - Number(frames[index - 1]);
    const calculusOfSpareWithAdditionOfNextThrow =
      calculusForSpareRoll + Number(frames[index + 1]);
    return isNotLastRoll ?
      calculusOfSpareWithAdditionOfNextThrow.toString() :
      calculusForSpareRoll.toString();
  }
  return roll;
}




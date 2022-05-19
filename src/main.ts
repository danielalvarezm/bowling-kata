/* eslint-disable max-len */

function calculateBowlingScore(frames: string): number {
  return frames.replaceAll('-', '0')
    .split(' ')
    .flatMap((frame) => frame.split(''))
    .map((roll, index, frames) => interpretSpecialShots(roll, index, frames))
    .map(Number)
    .reduce((a, b) => a + b);
}

// eslint-disable-next-line object-curly-spacing
export { calculateBowlingScore };

function interpretSpecialShots(roll: string, index: number, frames: string[]): string {
  const isRollSpare = roll === '/';
  const isRollStrike = roll === 'X';
  if (isRollSpare) {
    return interpretSpare(index, frames);
  }
  if (isRollStrike) {
    return interpretStrike(index, frames);
  }
  return roll;
}

function interpretSpare(index: number, frames: string[]): string {
  const isNotLastRoll = index < frames.length - 2;
  const calculusForSpareRoll = 10 - parseRollToPunctuation(frames[index - 1]);
  const calculusOfSpareWithAdditionOfNextThrow =
    calculusForSpareRoll + parseRollToPunctuation(frames[index + 1], index, frames);
  return isNotLastRoll ?
    calculusOfSpareWithAdditionOfNextThrow.toString() :
    calculusForSpareRoll.toString();
}

function interpretStrike(index: number, frames: string[]): string {
  const isNotLastRoll = index < frames.length - 2;
  const calculusForStrikeRoll = 10;
  const parseNextRoll = parseRollToPunctuation(frames[index + 1], index, frames);
  const parseSecondNextRoll = parseRollToPunctuation(frames[index + 2], index + 1, frames);
  const calculusOfSpareWithAdditionOfTwoNextThrows =
    calculusForStrikeRoll + parseNextRoll + parseSecondNextRoll;
  const parseLast2Rolls = 0;

  return isNotLastRoll ?
    calculusOfSpareWithAdditionOfTwoNextThrows.toString() :
    parseLast2Rolls.toString();
}

function parseRollToPunctuation(roll: string, index: number = 0, frames: string[] = []): number {
  if (roll === 'X') {
    return 10;
  }
  if (roll === '/') {
    return 10 - Number(frames[index]);
  }
  return Number(roll);
}

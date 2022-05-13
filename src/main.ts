function calculateBowlingScore(frames: string): number {
  return frames.split(' ')
    .flatMap((frame) => frame.split(''))
    .map(Number)
    .reduce((a, b) => a + b);
}

export {calculateBowlingScore};

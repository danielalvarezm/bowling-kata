function calculateBowlingScore(frames: string): number {
  return frames.replaceAll('-', '0')
    .split(' ')
    .flatMap((frame) => frame.split(''))
    .map(Number)
    .reduce((a, b) => a + b);
}

export {calculateBowlingScore};

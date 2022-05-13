import {calculateBowlingScore} from '../src/main';

/**
 * TODO: Bowling kata
 * ! Do not check for valid rolls.
 * ! Do not check for correct number of rolls and frames.
 * ! Do not provide scores for intermediate frames.
 * * Add all simple points.
 * * Correctly interpret misses.
 * * Correctly interpret spares.
 * * Correctly interpret strikes.
 */
describe('Bowling kata should', () => {
  it('Add all simple points', () => {
    const game = '52 52 52 52 52 52 52 52 52 52';
    expect(calculateBowlingScore(game) ).toBe(70);
  });
});

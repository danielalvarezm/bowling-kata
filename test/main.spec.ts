// eslint-disable-next-line object-curly-spacing
import { calculateBowlingScore } from '../src/main';

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
    expect(calculateBowlingScore(game)).toBe(70);
  });

  it('Correctly interpret misses', () => {
    const game = '5- 5- 5- 5- 5- 5- 5- 5- 5- 5-';
    expect(calculateBowlingScore(game)).toBe(50);
  });

  it('Correctly interpret spares', () => {
    const game = '5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/ 5/5';
    const game2 = '53 54 32 5/ 5/ 5/ 5/ 5/ 36 54';

    expect(calculateBowlingScore(game)).toBe(150);
    expect(calculateBowlingScore(game2)).toBe(113);
  });

  it('Correctly interpret strikes', () => {
    const game = 'X X X X X X X X X X X X';
    const game2 = 'X 23 34 X X X X X X X X X';

    expect(calculateBowlingScore(game)).toBe(300);
    expect(calculateBowlingScore(game2)).toBe(237);
  });

  it('Correctly interpret spares and strikes in the same game', () => {
    const game = '24 X 3/ 4- 72 -4 81 -- 9/ 71';

    expect(calculateBowlingScore(game)).toBe(91);
  });

  it('Correctly interprets complete failure game', () => {
    const game = '-- -- -- -- -- -- -- -- -- --';

    expect(calculateBowlingScore(game)).toBe(0);
  });
});


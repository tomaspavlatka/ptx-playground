/**
 * Code: https://leetcode.com/problems/zigzag-conversion/description/
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
 * (you may want to display this pattern in a fixed font for better legibility)
 *
 * P   A   H   N
 * A P L S I I G
 * Y   I   R
 *
 * And then read line by line: "PAHNAPLSIIGYIR"
 */

type Block = {
  letter: string
  row: number
  col: number
}

export function convert(s: string, numRows: number): string {
  let maze: Block[] = [];

  let row = 0;
  let col = 0;
  let direction = 'down';

  for (let i = 0; i < s.length; i++) {
    maze.push({
      letter: s[i],
      row: Math.max(row, 0), 
      col: Math.min(col, 0),
   });

    if (direction == 'down') {
      if (row + 1 >= numRows) {
        direction = 'up';
        row--;
        col++
      } else {
        row++;
      }
    } else if (direction == 'up') {
      if (row <= 0) {
        direction = 'down';
        row++;
      } else {
        row--
        col++;
      }
    }
  }

  const rows: string[] = [];
  for (let r = 0; r < numRows; r++) {
    const row = maze
      .filter((block) => block.row == r)
      .map((block) => block.letter)
      .join('');
    rows.push(row);
  }

  return rows.join('');
};


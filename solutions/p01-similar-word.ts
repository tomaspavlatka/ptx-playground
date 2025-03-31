/**
 * Practice: Find similar word
 *
 * You are given N words, each K long. Return a K-long word
 * which is in at most 1 position different from all the words
 * from the input. If more such words exist, any of them will be 
 * consider correct. If no such word exists, return empty string.
 * You will always get at least 2 words as input.
 *
 * Input: ['aaka', 'aaja', 'aaba', 'aaxa']
 * Result: 'aaba'. Note: b can be replace by any other letter and still the answer would be correct.
 *
 * Input: ['bay', 'zaz', 'bab']
 * Result: 'baz'
 *
 */

export function execute(words: string[]): string {
  const len = words[0].length;

  for (let j = 0; j < len; j++) {
    for (let i = 97; i <= 122; i++) {
      let chars = words[0].split('');
      chars[j] = String.fromCharCode(i);
      let canditate = chars.join('');

      let isValid = true;
      for (let word of words) {
        let diff = 0;
        for (let k = 0; k < len; k++) {
          if (canditate[k] !== word[k]) {
            if (++diff > 1) {
              isValid = false;
              break;
            }
          }
        }
      }

      if (isValid) {
        return canditate;
      }
    }
  }

  return '';
}

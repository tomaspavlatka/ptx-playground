import { execute } from "./p01-similar-word";

describe('practice-similar-word', () => {
  it('scenario 1', () => {
    const input = ['zzz', 'bcb', 'zzc'];

    const response = execute(input);

    expect(response).toStrictEqual('');
  });

  it('scenario 2', () => {
    const input = ['bay', 'zaz', 'bab'];

    const response = execute(input);

    expect(response).toStrictEqual('baz');
  });

  it('scenario 3', () => {
    const input = ['aya', 'aba', 'abb', 'zba'];

    const response = execute(input);

    expect(response).toStrictEqual('aba');
  });
  
  it('scenario 4', () => {
    const input = ['aaka', 'aaja', 'aaba', 'aaxa'];

    const response = execute(input);

    expect(response).toStrictEqual('aaka');
  });
});

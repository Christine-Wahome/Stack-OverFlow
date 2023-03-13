import { NewestPipe } from './newest.pipe';

describe('NewestPipe', () => {
  it('create an instance', () => {
    const pipe = new NewestPipe();
    expect(pipe).toBeTruthy();
  });
});

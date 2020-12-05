import { Entry } from './model.dto';

describe('Entry', () => {
  it('should work', () => {
    const e: Entry = {message: 'test'};
    expect(e.message).toEqual('test');
  });
});

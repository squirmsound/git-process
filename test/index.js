import { assert } from 'chai';
import { gitflow } from '../src/gitflow';

// or import * as awesomeModule from '../src/awesomeModule';

describe('Test.', () => {
  it('should test gitflow function', () => {
    assert(gitflow(1, 1) === 2, 'Not awesome :(');
  });
});

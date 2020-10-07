import {greet} from './greet';

describe('compute', () => {

  it('should include name in result', () => {
    expect(greet('Angular')).toContain('Angular')
    expect(greet('Angular')).toContain('Hello')
  })

})

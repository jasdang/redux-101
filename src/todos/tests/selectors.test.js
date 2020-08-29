import {expect} from 'chai';
import {getCompletedTodos} from '../selectors';

describe('Get completed todos selectors', () => {
  it('Returns only completed todos', () => {
    const fakeTodos = [
      {
        text: 'Say Hello',
        isCompleted: true,
      },
      {
        text: 'Say Goodbye',
        isCompleted: false,
      },
      {
        text: 'Climn Mount Everest',
        isCompleted: false,
      },
    ];
    const expected = [{text: 'Say Hello', isCompleted: true}];
    const actual = getCompletedTodos.resultFunc(fakeTodos);
    expect(actual).to.deep.equal(expected);
  });
});

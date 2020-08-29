import {expect} from 'chai';
import {getBorderStyleForDate} from '../TodoListItem';
import {todos} from '../reducers';

describe('getBorderStyleForDate', () => {
  it('returns none when the date is less than 5 days ago', () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 8640000 * 3);
    const expected = 'none';
    const actual = getBorderStyleForDate(recentDate, today);
    expect(actual).to.deep.equal(expected);
  });
  it('returns ap border when the date is more than 5 days ago', () => {
    const today = Date.now();
    const recentDate = new Date(Date.now() - 8640000 * 7);
    const expected = '2px solid red';
    const actual = getBorderStyleForDate(recentDate, today);
    expect(actual).to.deep.equal(expected);
  });
});

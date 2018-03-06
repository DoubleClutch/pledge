import React from 'react';
import PledgeInfo from './../client/src/components/PledgeInfo.jsx'
import { shallow } from 'enzyme';

describe('PledgeInfo test', () => {
  let wrapper;
  beforeEach(() => { wrapper = shallow(<PledgeInfo />); });

  it('inlcudes 1 div with class ".pledgeInfoContainer" when no props are passed', () => {
    expect(wrapper.find('div.pledgeInfoContainer'));
  });
});
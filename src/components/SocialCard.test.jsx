import React from 'react';
import renderer from 'react-test-renderer';
import SocialCard from './SocialCard';

test('SocialCard rendered correcly', () => {
  const component = renderer.create(<SocialCard image="pseudo-image" url="http://www.facebook.com" alt="images alt" />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

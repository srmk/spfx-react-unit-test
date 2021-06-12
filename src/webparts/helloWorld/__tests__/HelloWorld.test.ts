/// <reference types="jest" />

import * as React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import HelloWorld from '../components/HelloWorld';
import { IHelloWorldProps } from '../components/IHelloWorldProps';

describe('Enzyme basics', () => {
  let reactComponent: ReactWrapper<IHelloWorldProps, {}>;

  beforeEach(() => {
    reactComponent = mount(
      React.createElement(HelloWorld, {
        description: 'SPFx Test',
      })
    );
  });

  afterEach(() => {
    reactComponent.unmount();
  });

  it('should root web part element exists', () => {
    // define the css selector
    let cssSelector: string = '#HelloWorld';

    // find the element using css selector
    const element = reactComponent.find(cssSelector);
    expect(element.length).toBeGreaterThan(0);
  });
});

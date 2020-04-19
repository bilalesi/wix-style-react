import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import Timeline from '../Timeline';
import { timelinePrivateDriverFactory } from './Timeline.private.uni.driver';

describe(Timeline.displayName, () => {
  const render = createRendererWithUniDriver(timelinePrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<Timeline />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const { driver } = render(<Timeline />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<Timeline buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});

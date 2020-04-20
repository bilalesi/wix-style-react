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
    const { driver } = render(<Timeline items={[]} />);

    expect(await driver.isTimelineExists()).toBe(true);
  });

  it('should render timeline basic item', async () => {
    const items = [
      {
        id: 'item-id-1',
        label: 'timeline item number 1',
        suffix: 'suffix text',
      },
    ];

    const { driver } = render(<Timeline items={items} />);

    expect(await driver.getLabelText(items[0].id)).toEqual(items[0].label);
    expect(await driver.getSuffixText(items[0].id)).toEqual(items[0].suffix);
  });
});

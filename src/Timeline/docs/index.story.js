import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  divider,
  example as baseExample,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import * as examples from './examples';

import TextButton from '../../TextButton';
import Card from '../../Card';
import Timeline from '..';

const example = config => baseExample({ components: allComponents, ...config });
const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: storySettings.storyName,

  component: Timeline,
  componentPath: '..',

  componentProps: {
    items: [],
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl: `https://github.com/wix/wix-style-react/tree/master/src/${Timeline.displayName}/`,
      component: (
        <Timeline
          items={[
            {
              label: 'Quote #8 Accepted: Website setup, $7.00',
              suffix: 'Jan 1, 2019 12:03 AM',
              labelAction: (
                <TextButton weight="normal" size="small">
                  View Order
                </TextButton>
              ),
            },
            {
              label: 'Quote #8 Accepted: Website setup, $7.00',
              suffix: 'Jan 1, 2019 12:03 AM',
              labelAction: (
                <TextButton weight="normal" size="small">
                  View Order
                </TextButton>
              ),
            },
          ]}
        />
      ),
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          description({
            title: 'Description',
            text: 'A component to display events in a vertical timeline format',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A simple example with compact preview',
            source: examples.simple,
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};

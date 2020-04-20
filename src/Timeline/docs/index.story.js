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

import TextButton from '../../TextButton';
import Time from 'wix-ui-icons-common/Time';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

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
            text:
              'This line here should briefly describe component in just a sentence or two. It should be short and easy to read.',
          }),

          importExample(),

          divider(),

          title('Examples'),

          example({
            title: 'Simple Usage',
            text: 'A simple example with compact preview',
            source:
              '<Timeline items={[{' +
              "    label: 'Quote #8 Accepted: Website setup, $7.00',\n" +
              "    suffix: 'Jan 1, 2019 12:03 AM',\n" +
              '    labelAction: (\n' +
              '      <TextButton weight="normal" size="small">\n' +
              '        View Order\n' +
              '      </TextButton>\n' +
              '    ),\n' +
              '  },\n' +
              '  {\n' +
              "    label: 'Quote #8 Accepted: Website setup, $7.00',\n" +
              "    suffix: 'Jan 1, 2019 12:03 AM',\n" +
              '    labelAction: (\n' +
              '      <TextButton weight="normal" size="small">\n' +
              '        View Order\n' +
              '      </TextButton>\n' +
              '    ),\n' +
              '  }]}/>',
          }),

          code({
            title: 'Full Interactive Preview',
            description: 'A non compact version of same code example as above',
            source: '<Timeline items={[]}/>',
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

// [
// //   {
// //     label: 'Quote #8 Accepted: Website setup, $7.00',
// //     suffix: 'Jan 1, 2019 12:03 AM',
// //     labelAction: (
// //       <TextButton weight="normal" size="small">
// //         View Order
// //       </TextButton>
// //     ),
// //   },
// //   {
// //     label:
// //       'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
// //     suffix: 'Jan 1, 2019 12:03 AM',
// //     labelAction: (
// //       <TextButton weight="normal" size="small">
// //         View Order
// //       </TextButton>
// //     ),
// //     prefix: <Time />,
// //   },
// //   {
// //     label: 'Quote #8 Accepted: Website setup, $7.00',
// //     labelAction: (
// //       <TextButton weight="normal" size="small">
// //         View Order
// //       </TextButton>
// //     ),
// //   },
// //   {
// //     label:
// //       'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
// //     suffix: 'Jan 1, 2019 12:03 AM',
// //   },
// //   {
// //     label:
// //       'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
// //   },
// //   {
// //     label:
// //       'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
// //     suffix: 'Jan 1, 2019 12:03 AM',
// //     labelAction: (
// //       <TextButton weight="normal" size="small">
// //         View Order
// //       </TextButton>
// //     ),
// //   },
// // ]

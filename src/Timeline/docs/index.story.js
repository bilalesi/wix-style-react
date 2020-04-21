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
              '<Timeline items={[\n' +
              '  {\n' +
              '    label:\n' +
              "      'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',\n" +
              '    suffix: <TextButton weight="normal" size="small">\n' +
              '      suffix button\n' +
              '    </TextButton>,\n' +
              '    labelAction: (\n' +
              '      <TextButton weight="normal" size="small">\n' +
              '        View Order\n' +
              '      </TextButton>\n' +
              '    ),\n' +
              '  },\n' +
              '  {\n' +
              '    label:\n' +
              "      'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',\n" +
              "    suffix: 'Jan 1, 2019 12:03 AM',\n" +
              '    labelAction: (\n' +
              '      <TextButton weight="normal" size="small">\n' +
              '        View Order\n' +
              '      </TextButton>\n' +
              '    ),\n' +
              '    customPrefix: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.5,20 C8.35786438,20 5,16.6421356 5,12.5 C5,8.35786438 8.35786438,5 12.5,5 C16.6421356,5 20,8.35786438 20,12.5 C20,16.6421356 16.6421356,20 12.5,20 Z M12.5,19 C16.0898509,19 19,16.0898509 19,12.5 C19,8.91014913 16.0898509,6 12.5,6 C8.91014913,6 6,8.91014913 6,12.5 C6,16.0898509 8.91014913,19 12.5,19 Z M13,12.2928932 L15.3535534,14.6464466 L14.6464466,15.3535534 L12,12.7071068 L12,9 L13,9 L13,12.2928932 Z"/></svg>,\n' +
              '  },\n' +
              '  {\n' +
              "    label: 'Quote #8 Accepted: Website setup, $7.00',\n" +
              '  },\n' +
              '  {\n' +
              '    label:\n' +
              "      'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',\n" +
              '    labelAction: (\n' +
              '      <TextButton weight="normal" size="small">\n' +
              '        View Order\n' +
              '      </TextButton>\n' +
              '    ),\n' +
              '  },\n' +
              '  {\n' +
              '    label:\n' +
              "      'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',\n" +
              "    suffix: 'Jan 1, 2019 12:03 AM',\n" +
              '    labelAction: (\n' +
              '      <TextButton weight="normal" size="small">\n' +
              '        View Order\n' +
              '      </TextButton>\n' +
              '    ),\n' +
              '  },\n' +
              ']}/>',
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

import React from 'react';
import { Category } from '../storiesHierarchy';
import { header, description } from 'wix-storybook-utils/Sections';
import LinkTo from '@storybook/addon-links/react';
import { Text } from '../../src';

export default {
  category: Category.GETTINGSTARTED,
  storyName: 'Madefor Font',

  sections: [
    header(),

    description({
      title: 'Usage guide',
      text: (
        <Text>
          wix-style-react library is ready for Madefor!
          <br />
          For a nice preview, press the Madefor button at the top of each
          storybook page. (Including this one!)
        </Text>
      ),
    }),

    description({
      text: [
        <Text tagName="p">
          In order to use it in your code you need to follow these steps:
        </Text>,

        <ul>
          <li>
            <Text>
              If your code is part of the Business Manager, just activate the
              experiment:
            </Text>
            <Text tagName="div" weight="bold">
              specs.wos2.MadeforFont
            </Text>
          </li>
          <br />
          <li>
            <Text>
              If not, you need to import font definitions, visit{' '}
              <a
                href="https://wix-fonts.now.sh/"
                target="_blank"
                rel="noopener noreferrer"
              >
                wix-fonts
              </a>{' '}
              for more information.
            </Text>
            <Text tagName="div">
              And use the
              <LinkTo
                kind={Category.STYLING}
                story="FontUpgrade"
              >{` <FontUpgrade /> `}</LinkTo>
              wrapper component to activate the font.
            </Text>
          </li>
        </ul>,
      ],
    }),
  ],
};

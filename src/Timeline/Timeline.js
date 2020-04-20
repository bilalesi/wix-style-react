import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import TextButton from '../TextButton';
import styles from './Timeline.st.css';
import { dataHooks } from './constants';

/** A timeline is a display of a list of events */
class Timeline extends React.PureComponent {
  state = {};

  getItemNode(item) {
    return (
      <div className={styles.event}>
        <div className={styles.label}>
          <Text weight="normal" size="small">
            {item.label}
          </Text>
          <div className={styles.labelAction}>{item.labelAction}</div>
        </div>
        <div className={styles.suffix}>
          <Text skin="disabled" weight="normal" size="small">
            {item.suffix}
          </Text>
        </div>
      </div>
    );
  }

  render() {
    const { dataHook } = this.props;
    const timelineItems = [
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
        label:
          'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
        suffix: 'Jan 1, 2019 12:03 AM',
        labelAction: (
          <TextButton weight="normal" size="small">
            View Order
          </TextButton>
        ),
      },
      {
        label: 'Quote #8 Accepted: Website setup, $7.00',
        labelAction: (
          <TextButton weight="normal" size="small">
            View Order
          </TextButton>
        ),
      },
      {
        label:
          'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
        suffix: 'Jan 1, 2019 12:03 AM',
      },
      {
        label:
          'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
      },
      {
        label:
          'New Order: 1 item, $4.99 this will be a longer text that will be two lines or a very very long text for a vertical that needs a lot of text that will be three lines',
        suffix: 'Jan 1, 2019 12:03 AM',
        labelAction: (
          <TextButton weight="normal" size="small">
            View Order
          </TextButton>
        ),
      },
    ];

    return (
      <div {...styles('root', {}, this.props)} data-hook={dataHook}>
        <div className={styles.timeline}>
          {timelineItems.map(item => this.getItemNode(item))}
        </div>
      </div>
    );
  }
}

Timeline.displayName = 'Timeline';

Timeline.propTypes = {
  /** Applied as data-hook HTML attribute that can be used in the tests */
  dataHook: PropTypes.string,

  /** A css class to be applied to the component's root element */
  className: PropTypes.string,

  /** Text for the button */
  buttonText: PropTypes.string,
};

Timeline.defaultProps = {};

export default Timeline;

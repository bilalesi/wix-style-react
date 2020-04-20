import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import TextButton from '../TextButton';
import Time from 'wix-ui-icons-common/Time';
import styles from './Timeline.st.css';
import { dataHooks } from './constants';

/** A timeline is a display of a list of events */
class Timeline extends React.PureComponent {
  state = {};

  getListItem(item) {
    return (
      <div className={styles.event}>
        <div className={styles.prefix}>
          {item.prefix ? (
            <div className={styles.prefixCustom}>{item.prefix}</div>
          ) : (
            <div className={styles.prefixDefault} />
          )}
        </div>
        <div className={styles.label}>
          <Text weight="normal" size="small">
            {item.label}
          </Text>
          <span> </span>
          {item.labelAction}
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
    const { dataHook, className } = this.props;
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
        prefix: <Time />,
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
      <div
        className={className}
        {...styles('root', {}, this.props)}
        data-hook={dataHook}
      >
        <div className={styles.timeline}>
          {timelineItems.map(item => this.getListItem(item))}
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

  /** timeline events items */
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      label: PropTypes.string,
      labelAction: PropTypes.node,
      customPrefix: PropTypes.node,
      suffix: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    }),
  ).isRequired,
};

Timeline.defaultProps = {};

export default Timeline;

import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import Button from '../Button';
import TextButton from '../TextButton';
import styles from './Timeline.st.css';
import { dataHooks } from './constants';

/** A timeline is a display of a list of events */
class Timeline extends React.PureComponent {
  state = {
    count: 0,
  };

  _handleClick = () => {
    this.setState(({ count }) => ({
      count: count + 1,
    }));
  };

  render() {
    const { count } = this.state;
    const { dataHook, buttonText } = this.props;
    const isEven = count % 2 === 0;

    return (
      <div
        {...styles('root', { even: isEven, odd: !isEven }, this.props)}
        data-hook={dataHook}
      >
        <Text dataHook={dataHooks.timelineCount}>
          You clicked this button {isEven ? 'even' : 'odd'} number (
          <span className={styles.number}>{count}</span>) of times
        </Text>

        <div className={styles.button}>
          <Button
            onClick={this._handleClick}
            dataHook={dataHooks.timelineButton}
          >
            {buttonText}
          </Button>
        </div>

        <div className={styles.timeline}>
          <div className={styles.event}>
            <Text>Quote #8 Accepted: Website setup, $7.00</Text>
            <TextButton>View Quote</TextButton>
            <Text>Jan 1, 2019 12:03 AM</Text>
          </div>
          <div className={styles.event}>
            <Text>
              New Order: 1 item, $4.99 this will be a longer text that will be
              two lines or a very very long text for a vertical that needs a lot
              of text that will be three lines
            </Text>
            <TextButton>View Order</TextButton>
            <Text>Jan 1, 2019 12:03 AM</Text>
          </div>
          <div className={styles.event}>
            <Text>Quote #8 Accepted: Website setup, $7.00</Text>
            <TextButton>View Quote</TextButton>
            <Text>Jan 1, 2019 12:03 AM</Text>
          </div>
          <div className={styles.event}>
            <Text>
              New Order: 1 item, $4.99 this will be a longer text that will be
              two lines or a very very long text for a vertical that needs a lot
              of text that will be three lines
            </Text>
            <TextButton>View Order</TextButton>
            <Text>Jan 1, 2019 12:03 AM</Text>
          </div>
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

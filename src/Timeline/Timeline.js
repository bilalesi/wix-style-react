import React from 'react';
import PropTypes from 'prop-types';

import styles from './Timeline.st.css';
import { dataHooks } from './constants';
import TimelineItem from './TimelineItem';

/** A timeline is a display of a list of events */
class Timeline extends React.PureComponent {
  state = {};

  render() {
    const { dataHook, items } = this.props;

    return (
      <div {...styles('root', {}, this.props)} data-hook={dataHook}>
        <ul className={styles.timeline} data-hook={dataHooks.timelineList}>
          {items.map((item, idx) => (
            <TimelineItem key={idx} item={item} idx={idx} />
          ))}
        </ul>
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
      /** event text */
      label: PropTypes.string,
      /** action element in the end of event text */
      labelAction: PropTypes.node,
      /** custom bullet element like icon or avatar */
      customPrefix: PropTypes.node,
      /** suffix text or element placed on the right */
      suffix: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    }),
  ).isRequired,
};

export default Timeline;

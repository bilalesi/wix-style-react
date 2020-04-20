import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import styles from './Timeline.st.css';
import { dataHooks } from './constants';

/** A timeline is a display of a list of events */
class Timeline extends React.PureComponent {
  state = {};

  _isString = a => typeof a === 'string';

  _getListItem(item) {
    return (
      <div
        className={styles.event}
        data-hook={`${dataHooks.timelineListEvent}-${item.id}`}
        key={`${dataHooks.timelineListEvent}-${item.id}`}
      >
        <div className={styles.prefix}>
          {item.prefix ? (
            <div className={styles.prefixCustom}>{item.prefix}</div>
          ) : (
            <div className={styles.prefixDefault} />
          )}
        </div>
        <div className={styles.label}>
          <Text
            dataHook={`${dataHooks.timelineLabel}-${item.id}`}
            weight="normal"
            size="small"
          >
            {item.label}
          </Text>
          <span> </span>
          {item.labelAction}
        </div>
        <div className={styles.suffix}>
          {item.suffix && this._isString(item.suffix) ? (
            <Text
              dataHook={`${dataHooks.timelineTextSuffix}-${item.id}`}
              skin="disabled"
              weight="normal"
              size="small"
            >
              {item.suffix}
            </Text>
          ) : (
            item.suffix || null
          )}
        </div>
      </div>
    );
  }

  render() {
    const { dataHook, className, items } = this.props;

    return (
      <div
        className={className}
        {...styles('root', {}, this.props)}
        data-hook={dataHook}
      >
        <div className={styles.timeline} data-hook={dataHooks.timelineList}>
          {items.map(item => this._getListItem(item))}
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

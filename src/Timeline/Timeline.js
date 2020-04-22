import React from 'react';
import PropTypes from 'prop-types';

import Text from '../Text';
import styles from './Timeline.st.css';
import { dataHooks } from './constants';

/** A timeline is a display of a list of events */
class Timeline extends React.PureComponent {
  state = {};

  _isString = a => typeof a === 'string';

  _getListItem(item, idx) {
    return (
      <li
        className={styles.event}
        data-hook={`${dataHooks.timelineListEvent}-${idx}`}
        key={`${dataHooks.timelineListEvent}-${idx}`}
      >
        <div className={styles.prefix}>
          {item.customPrefix ? (
            <div
              data-hook={`${dataHooks.timelineBulletIndicator}-${idx}`}
              className={styles.prefixCustom}
            >
              {item.customPrefix}
            </div>
          ) : (
            <div
              data-hook={`${dataHooks.timelineDefaultPrefix}-${idx}`}
              className={styles.bulletIndicator}
            />
          )}
        </div>
        <div className={styles.label}>
          <Text
            dataHook={`${dataHooks.timelineLabel}-${idx}`}
            weight="normal"
            size="small"
            className={styles.labelText}
          >
            {item.label}
          </Text>
          {item.labelAction ? (
            <div
              className={styles.labelAction}
              data-hook={`${dataHooks.timelineLabelAction}-${idx}`}
            >
              {item.labelAction}
            </div>
          ) : null}
        </div>
        <div
          className={styles.suffix}
          data-hook={`${dataHooks.timelineSuffix}-${idx}`}
        >
          {item.suffix ? (
            this._isString(item.suffix) ? (
              <Text
                dataHook={`${dataHooks.timelineTextSuffix}-${idx}`}
                skin="disabled"
                weight="normal"
                size="small"
              >
                {item.suffix}
              </Text>
            ) : (
              item.suffix
            )
          ) : null}
        </div>
      </li>
    );
  }

  render() {
    const { dataHook, items } = this.props;

    return (
      <div {...styles('root', {}, this.props)} data-hook={dataHook}>
        <ul className={styles.timeline} data-hook={dataHooks.timelineList}>
          {items.map((item, idx) => this._getListItem(item, idx))}
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

import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const timelineDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /** Is the timeline exists */
    isTimelineExists: () =>
      base.$(`[data-hook="${dataHooks.timelineList}"]`).exists(),

    /** Get the label text by idx */
    getLabelText: async idx =>
      await base.$(`[data-hook="${dataHooks.timelineLabel}-${idx}"]`).text(),

    /** Get the suffix text by idx */
    getSuffixText: async idx =>
      await base
        .$(`[data-hook="${dataHooks.timelineTextSuffix}-${idx}"]`)
        .text(),

    /** Get the custom suffix element by idx */
    getCustomSuffixElement: idx =>
      base.$(`[data-hook="${dataHooks.timelineSuffix}-${idx}"]`),

    /** Get the label action element by idx */
    getLabelActionElement: idx =>
      base.$(`[data-hook="${dataHooks.timelineLabelAction}-${idx}"]`),

    /** Is default prefix wrapper by idx */
    isDefaultPrefixExists: async idx =>
      await base
        .$(`[data-hook="${dataHooks.timelineDefaultPrefix}-${idx}"]`)
        .exists(),

    /** bullet indicator wrapper by idx */
    getBulletIndicatorElement: idx =>
      base.$(`[data-hook="${dataHooks.timelineBulletIndicator}-${idx}"]`),
  };
};

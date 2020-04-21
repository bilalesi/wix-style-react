import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const timelineDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /** Is the timeline exists */
    isTimelineExists: () =>
      base.$(`[data-hook="${dataHooks.timelineList}"]`).exists(),

    /** Get the label text by item id */
    getLabelText: async index =>
      await base.$(`[data-hook="${dataHooks.timelineLabel}-${index}"]`).text(),

    /** Get the suffix text by item id */
    getSuffixText: async index =>
      await base
        .$(`[data-hook="${dataHooks.timelineTextSuffix}-${index}"]`)
        .text(),

    /** custom suffix wrapper by item id */
    getCustomSuffixElement: index =>
      base.$(`[data-hook="${dataHooks.timelineSuffix}-${index}"]`),

    /** label action wrapper by item id */
    getLabelActionElement: index =>
      base.$(`[data-hook="${dataHooks.timelineLabelAction}-${index}"]`),

    /** Is default prefix wrapper by item id */
    isDefaultPrefixExists: async index =>
      await base
        .$(`[data-hook="${dataHooks.timelineDefaultPrefix}-${index}"]`)
        .exists(),

    /** bullet indicator wrapper by item id */
    getBulletIndicatorElement: index =>
      base.$(`[data-hook="${dataHooks.timelineBulletIndicator}-${index}"]`),
  };
};

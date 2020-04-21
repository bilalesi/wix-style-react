import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const timelineDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /** Is the timeline exists */
    isTimelineExists: () =>
      base.$(`[data-hook="${dataHooks.timelineList}"]`).exists(),

    /** Get the label text by index */
    getLabelText: async index =>
      await base.$(`[data-hook="${dataHooks.timelineLabel}-${index}"]`).text(),

    /** Get the suffix text by index */
    getSuffixText: async index =>
      await base
        .$(`[data-hook="${dataHooks.timelineTextSuffix}-${index}"]`)
        .text(),

    /** Get the custom suffix element by index */
    getCustomSuffixElement: index =>
      base.$(`[data-hook="${dataHooks.timelineSuffix}-${index}"]`),

    /** Get the label action element by index */
    getLabelActionElement: index =>
      base.$(`[data-hook="${dataHooks.timelineLabelAction}-${index}"]`),

    /** Is default prefix wrapper by index */
    isDefaultPrefixExists: async index =>
      await base
        .$(`[data-hook="${dataHooks.timelineDefaultPrefix}-${index}"]`)
        .exists(),

    /** bullet indicator wrapper by index */
    getBulletIndicatorElement: index =>
      base.$(`[data-hook="${dataHooks.timelineBulletIndicator}-${index}"]`),
  };
};

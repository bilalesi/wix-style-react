import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const timelineDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /** Is the timeline exists */
    isTimelineExists: () =>
      base.$(`[data-hook="${dataHooks.timelineList}"]`).exists(),

    /** Get the label text by item id */
    getLabelText: async itemsId =>
      await base
        .$(`[data-hook="${dataHooks.timelineLabel}-${itemsId}"]`)
        .text(),

    /** Get the suffix text by item id */
    getSuffixText: async itemsId =>
      await base
        .$(`[data-hook="${dataHooks.timelineTextSuffix}-${itemsId}"]`)
        .text(),

    /** Is custom suffix wrapper by item id */
    getCustomSuffixElement: itemsId =>
      base.$(`[data-hook="${dataHooks.timelineSuffix}-${itemsId}"]`),

    /** Is default prefix wrapper by item id */
    isDefaultPrefixExists: itemsId =>
      base
        .$(`[data-hook="${dataHooks.timelineDefaultPrefix}-${itemsId}"]`)
        .exists(),

    /** Is custom prefix wrapper by item id */
    isCustomPrefixExists: itemsId =>
      base
        .$(`[data-hook="${dataHooks.timelineCustomPrefix}-${itemsId}"]`)
        .exists(),
  };
};

import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';
import * as React from "react";

export interface TimelineUniDriver extends BaseUniDriver {
  getLabelText(): Promise<string>;
  getSuffixText(): Promise<string>;
  getCustomSuffixElement(): React.ReactNode;
  getLabelActionElement(): React.ReactNode;
  isDefaultPrefixExists(): Promise<boolean>;
  getCustomPrefixElement(): React.ReactNode;
}

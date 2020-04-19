import { BaseUniDriver } from 'wix-ui-test-utils/unidriver';

export interface TimelineUniDriver extends BaseUniDriver {
  getCountText(): Promise<string>;
  clickButton(): Promise<void>;
  getButtonText(): Promise<string>;
}

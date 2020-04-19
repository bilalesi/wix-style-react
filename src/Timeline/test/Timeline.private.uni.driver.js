import { timelineDriverFactory as publicDriverFactory } from '../Timeline.uni.driver';

export const timelinePrivateDriverFactory = (base, body) => {
  return {
    ...publicDriverFactory(base, body),

    // Add here driver methods that considered "private"
  };
};

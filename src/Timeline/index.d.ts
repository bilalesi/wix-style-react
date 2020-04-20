import * as React from 'react';

export interface TimelineItem {
  id: string;
  label: string;
  labelAction?: React.ReactNode;
  customPrefix?: React.ReactNode;
  suffix?: React.ReactNode | string;
}

export interface TimelineProps {
  dataHook?: string;
  items: TimelineItem[];
}

export default class Timeline extends React.PureComponent<TimelineProps>{}

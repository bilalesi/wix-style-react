import * as React from 'react';

export interface TimelineItem {
  id: string | number;
  label: string;
  labelAction?: React.ReactNode;
  customPrefix?: React.ReactNode;
  suffix?: React.ReactNode | string;
}

export interface TimelineProps {
  className?: string;
  dataHook?: string;
  items: TimelineItem[];
}

export default class Timeline extends React.PureComponent<TimelineProps>{}

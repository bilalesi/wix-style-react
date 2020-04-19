import * as React from 'react';

export interface TimelineProps {
  dataHook?: string;
  className?: string;
  buttonText?: string;
}

export default class Timeline extends React.PureComponent<TimelineProps>{}

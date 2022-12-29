
/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const CalenderLeftOutlined: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M1.22706 5.53033C0.934162 5.23743 0.934162 4.76256 1.22706 4.46967L5.4697 0.227025C5.76259 -0.0658686 6.23746 -0.0658685 6.53036 0.227025C6.82325 0.519918 6.82325 0.994792 6.53036 1.28768L2.81805 5L6.53036 8.71231C6.82325 9.0052 6.82325 9.48007 6.53036 9.77297C6.23746 10.0659 5.76259 10.0659 5.4697 9.77297L1.22706 5.53033Z" fill={ colors[0] } fillRule="evenodd" clipRule="evenodd"/>

  </>,
  name: 'calender_left_outlined',
  defaultColors: ['#C4C4C4'],
  colorful: false,
  allPathData: ['M1.22706 5.53033C0.934162 5.23743 0.934162 4.76256 1.22706 4.46967L5.4697 0.227025C5.76259 -0.0658686 6.23746 -0.0658685 6.53036 0.227025C6.82325 0.519918 6.82325 0.994792 6.53036 1.28768L2.81805 5L6.53036 8.71231C6.82325 9.0052 6.82325 9.48007 6.53036 9.77297C6.23746 10.0659 5.76259 10.0659 5.4697 9.77297L1.22706 5.53033Z'],
  width: '10',
  height: '10',
  viewBox: '0 0 10 10',
});

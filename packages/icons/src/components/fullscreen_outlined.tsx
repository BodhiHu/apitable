
/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const FullscreenOutlined: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M12 3C12.5 3 12.9 3.4 13 3.9V4V8C13 8.6 12.6 9 12 9C11.5 9 11.1 8.6 11 8.1V8V5H8C7.5 5 7.1 4.6 7 4.1V4C7 3.5 7.4 3.1 7.9 3H8H12ZM5 11H8C8.5 11 8.9 11.4 9 11.9V12C9 12.5 8.6 12.9 8.1 13H8H4C3.5 13 3.1 12.6 3 12.1V12V8C3 7.4 3.4 7 4 7C4.5 7 4.9 7.4 5 7.9V8V11Z" fill={ colors[0] } fillRule="evenodd" clipRule="evenodd"/>

  </>,
  name: 'fullscreen_outlined',
  defaultColors: ['#D9D9D9'],
  colorful: false,
  allPathData: ['M12 3C12.5 3 12.9 3.4 13 3.9V4V8C13 8.6 12.6 9 12 9C11.5 9 11.1 8.6 11 8.1V8V5H8C7.5 5 7.1 4.6 7 4.1V4C7 3.5 7.4 3.1 7.9 3H8H12ZM5 11H8C8.5 11 8.9 11.4 9 11.9V12C9 12.5 8.6 12.9 8.1 13H8H4C3.5 13 3.1 12.6 3 12.1V12V8C3 7.4 3.4 7 4 7C4.5 7 4.9 7.4 5 7.9V8V11Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});

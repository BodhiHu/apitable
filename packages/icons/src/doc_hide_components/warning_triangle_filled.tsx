
/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const WarningTriangleFilled: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M8.85402 2.90266C8.46438 2.26277 7.53544 2.26277 7.1458 2.90266L1.92553 11.4756C1.51975 12.142 1.99942 12.9957 2.77964 12.9957H13.2202C14.0004 12.9957 14.4801 12.142 14.0743 11.4756L8.85402 2.90266ZM8.00196 5.14294C8.38165 5.14294 8.69545 5.42509 8.74511 5.79117L8.75196 5.89294V8.29227C8.75196 8.70649 8.41617 9.04227 8.00196 9.04227C7.62226 9.04227 7.30847 8.76012 7.2588 8.39404L7.25196 8.29227V5.89294C7.25196 5.47873 7.58774 5.14294 8.00196 5.14294ZM7.99991 11.5148C8.46935 11.5148 8.84991 11.1342 8.84991 10.6648C8.84991 10.1953 8.46935 9.81479 7.99991 9.81479C7.53047 9.81479 7.14991 10.1953 7.14991 10.6648C7.14991 11.1342 7.53047 11.5148 7.99991 11.5148Z" fill={ colors[0] } fillRule="evenodd" clipRule="evenodd"/>

  </>,
  name: 'warning_triangle_filled',
  defaultColors: ['#FAAD14'],
  colorful: false,
  allPathData: ['M8.85402 2.90266C8.46438 2.26277 7.53544 2.26277 7.1458 2.90266L1.92553 11.4756C1.51975 12.142 1.99942 12.9957 2.77964 12.9957H13.2202C14.0004 12.9957 14.4801 12.142 14.0743 11.4756L8.85402 2.90266ZM8.00196 5.14294C8.38165 5.14294 8.69545 5.42509 8.74511 5.79117L8.75196 5.89294V8.29227C8.75196 8.70649 8.41617 9.04227 8.00196 9.04227C7.62226 9.04227 7.30847 8.76012 7.2588 8.39404L7.25196 8.29227V5.89294C7.25196 5.47873 7.58774 5.14294 8.00196 5.14294ZM7.99991 11.5148C8.46935 11.5148 8.84991 11.1342 8.84991 10.6648C8.84991 10.1953 8.46935 9.81479 7.99991 9.81479C7.53047 9.81479 7.14991 10.1953 7.14991 10.6648C7.14991 11.1342 7.53047 11.5148 7.99991 11.5148Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});

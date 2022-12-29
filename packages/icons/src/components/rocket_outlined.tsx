
/* eslint-disable max-len */
import React from 'react';
import { makeIcon, IIconProps } from '../utils/icon';

export const RocketOutlined: React.FC<IIconProps> = makeIcon({
  Path: ({ colors }) => <>
    <path d="M6.04506 4.22984C6.70946 3.26062 7.46193 2.59369 8.00011 2.31429C8.53826 2.59369 9.29069 3.2606 9.95504 4.22983C10.691 5.30352 11.2303 6.62246 11.2495 7.92804C11.253 8.17004 11.3485 8.40912 11.5283 8.58886L13.1273 10.1879L12.1942 12.6578L11.793 11.8794C11.4971 11.3055 10.7273 11.1876 10.2732 11.6466L8.68707 13.25H7.31314L5.71516 11.6346C5.27797 11.1927 4.54114 11.2828 4.22332 11.817L3.69331 12.708L2.8581 10.2025L4.47176 8.58886C4.6515 8.40912 4.74699 8.17004 4.75054 7.92805C4.76969 6.62248 5.30905 5.30355 6.04506 4.22984ZM8.32251 0.818451C8.11374 0.741058 7.88648 0.741058 7.6777 0.818451C6.72506 1.17159 5.64171 2.16529 4.80784 3.38174C3.99677 4.56492 3.33666 6.08022 3.25789 7.68141L1.55708 9.38222C1.30264 9.63666 1.21379 10.013 1.32759 10.3544L2.65035 14.3225C2.90755 15.0941 3.95226 15.2068 4.36806 14.5078L5.14892 13.1951L6.40821 14.4681C6.58666 14.6484 6.82985 14.75 7.08358 14.75H8.91663C9.17037 14.75 9.41356 14.6484 9.592 14.4681L10.8068 13.2401L11.4274 14.444C11.8044 15.1754 12.8697 15.1142 13.1605 14.3444L14.656 10.3858C14.7879 10.0365 14.703 9.64233 14.439 9.37831L12.7421 7.68141C12.6634 6.08024 12.0033 4.56495 11.1923 3.38175C10.3585 2.16531 9.27517 1.1716 8.32251 0.818451ZM7.25001 7.5C7.25001 7.08578 7.5858 6.75 8.00001 6.75C8.41422 6.75 8.75001 7.08578 8.75001 7.5C8.75001 7.91421 8.41422 8.25 8.00001 8.25C7.5858 8.25 7.25001 7.91421 7.25001 7.5ZM8.00001 5.25C6.75737 5.25 5.75001 6.25736 5.75001 7.5C5.75001 8.74264 6.75737 9.75 8.00001 9.75C9.24265 9.75 10.25 8.74264 10.25 7.5C10.25 6.25736 9.24265 5.25 8.00001 5.25Z" fill={ colors[0] } fillRule="evenodd" clipRule="evenodd"/>

  </>,
  name: 'rocket_outlined',
  defaultColors: ['#C4C4C4'],
  colorful: false,
  allPathData: ['M6.04506 4.22984C6.70946 3.26062 7.46193 2.59369 8.00011 2.31429C8.53826 2.59369 9.29069 3.2606 9.95504 4.22983C10.691 5.30352 11.2303 6.62246 11.2495 7.92804C11.253 8.17004 11.3485 8.40912 11.5283 8.58886L13.1273 10.1879L12.1942 12.6578L11.793 11.8794C11.4971 11.3055 10.7273 11.1876 10.2732 11.6466L8.68707 13.25H7.31314L5.71516 11.6346C5.27797 11.1927 4.54114 11.2828 4.22332 11.817L3.69331 12.708L2.8581 10.2025L4.47176 8.58886C4.6515 8.40912 4.74699 8.17004 4.75054 7.92805C4.76969 6.62248 5.30905 5.30355 6.04506 4.22984ZM8.32251 0.818451C8.11374 0.741058 7.88648 0.741058 7.6777 0.818451C6.72506 1.17159 5.64171 2.16529 4.80784 3.38174C3.99677 4.56492 3.33666 6.08022 3.25789 7.68141L1.55708 9.38222C1.30264 9.63666 1.21379 10.013 1.32759 10.3544L2.65035 14.3225C2.90755 15.0941 3.95226 15.2068 4.36806 14.5078L5.14892 13.1951L6.40821 14.4681C6.58666 14.6484 6.82985 14.75 7.08358 14.75H8.91663C9.17037 14.75 9.41356 14.6484 9.592 14.4681L10.8068 13.2401L11.4274 14.444C11.8044 15.1754 12.8697 15.1142 13.1605 14.3444L14.656 10.3858C14.7879 10.0365 14.703 9.64233 14.439 9.37831L12.7421 7.68141C12.6634 6.08024 12.0033 4.56495 11.1923 3.38175C10.3585 2.16531 9.27517 1.1716 8.32251 0.818451ZM7.25001 7.5C7.25001 7.08578 7.5858 6.75 8.00001 6.75C8.41422 6.75 8.75001 7.08578 8.75001 7.5C8.75001 7.91421 8.41422 8.25 8.00001 8.25C7.5858 8.25 7.25001 7.91421 7.25001 7.5ZM8.00001 5.25C6.75737 5.25 5.75001 6.25736 5.75001 7.5C5.75001 8.74264 6.75737 9.75 8.00001 9.75C9.24265 9.75 10.25 8.74264 10.25 7.5C10.25 6.25736 9.24265 5.25 8.00001 5.25Z'],
  width: '16',
  height: '16',
  viewBox: '0 0 16 16',
});

import { FC, useContext } from 'react';
import * as React from 'react';
import { stopPropagation } from 'pc/utils';
import { useThemeColors } from '@apitable/components';
import styles from './styles.module.less';
import { FlowContext } from 'pc/components/org_chart_view/context/flow_context';
import classNames from 'classnames';

interface IQuickAddProps {
  entered?: boolean;
  setEntered?: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  style?: React.CSSProperties;
  onClick?: (e: React.MouseEvent) => void;
}

export const QuickAdd: FC<IQuickAddProps> = ({
  entered,
  id,
  style,
  onClick,
}) => {
  const colors = useThemeColors();

  const {
    quickAddRecId,
    horizontal,
    fieldEditable,
  } = useContext(FlowContext);

  const IconAdd = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={styles.addIcon}
    >
      <path
        d="M14.25 8C14.25 11.4518 11.4518 14.25 8 14.25C4.54822 14.25 1.75 
                11.4518 1.75 8C1.75 4.54822 4.54822 1.75 8 1.75C11.4518 1.75 14.25 4.54822 14.25 8Z"
        fill={colors.white}
        stroke={colors.primaryColor}
        strokeWidth="1.5"
      />
      <rect x="7" y="4" width="2" height="8" rx="1" fill={colors.primaryColor} />
      <rect x="4" y="7" width="8" height="2" rx="1" fill={colors.primaryColor} />
    </svg>
  );

  return (
    <div
      onContextMenu={e => {
        e.preventDefault();
        stopPropagation(e);
      }}
    >
      <div
        className={classNames(styles.wrapper, {
          [styles.bottom]: !horizontal,
          [styles.right]: horizontal,
        })}
        style={style}
      >
        {entered && quickAddRecId !== id && fieldEditable && (
          <div
            className={classNames({
              [styles.addBottom]: !horizontal,
              [styles.addRight]: horizontal,
            })}
            onClick={onClick}
          >
            <IconAdd />
          </div>
        )}
      </div>
    </div>
  );
};

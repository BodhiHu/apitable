import * as React from 'react';
import { Tooltip } from 'antd';
import { IconButton, colorVars } from '@apitable/components';

import IconNext from 'static/icon/datasheet/activity/datasheet_icon_activity_under.svg';
import IconPre from 'static/icon/datasheet/activity/datasheet_icon_activity_up.svg';

import styles from '../style.module.less';

const ReactIconNext = () => <IconNext width={16} height={16} fill={'white'} />;
const ReactIconPre = () => <IconPre width={16} height={16} fill={'white'} />;

interface IPageTurnProps {
  preButtonTip: string;
  nextButtonTip: string;
  onClickPre(): void;
  onClickNext(): void;
  disablePre: boolean;
  disableNext: boolean;
  isPlainButtons?: boolean;
}

export const PageTurn: React.FC<IPageTurnProps> = (props) => {
  const {
    preButtonTip,
    nextButtonTip,
    onClickPre,
    onClickNext,
    disablePre,
    disableNext,
    isPlainButtons = false,
  } = props;

  if (isPlainButtons) {
    return (
      <div className={styles.plainPagingButtonWrapper}>
        <Tooltip title={preButtonTip}>
          <span
            style={{ cursor: !disablePre ? 'not-allowed' : 'pointer', height: 24 }}
            className={!disablePre ? styles.noBg : ''}
            onClick={onClickPre}
          >
            <IconButton
              component="button"
              shape="square"
              disabled={!disablePre}
              style={{
                margin: '0 4px',
                pointerEvents: disablePre ? 'auto' : 'none',
              }}
              icon={() => <IconPre width={16} height={16} fill={colorVars.fc3} />}
            />
          </span>
        </Tooltip>
        <Tooltip title={nextButtonTip}>
          <span
            style={{ cursor: !disableNext ? 'not-allowed' : 'pointer', height: 24 }}
            className={!disableNext ? styles.noBg : ''}
            onClick={onClickNext}
          >
            <IconButton
              component="button"
              shape="square"
              disabled={!disableNext}
              style={{
                margin: '0 4px',
                pointerEvents: disableNext ? 'auto' : 'none',
              }}
              icon={() => <IconNext width={16} height={16} fill={colorVars.fc3} />}
            />
          </span>
        </Tooltip>
      </div>
    );
  }
   
  return (
    <div className={styles.pagingButtonWrapper}>
      <Tooltip title={preButtonTip}>
        <span
          style={{ cursor: !disablePre ? 'not-allowed' : 'pointer' }}
          className={!disablePre ? styles.noBg : ''}
          onClick={onClickPre}
        >
          <IconButton
            component="button"
            disabled={!disablePre}
            className={styles.button}
            style={{ pointerEvents: disablePre ? 'auto' : 'none' }}
            icon={ReactIconPre}
          />
        </span>
      </Tooltip>
      <span className={styles.gapLine} />
      <Tooltip title={nextButtonTip}>
        <span
          style={{ cursor: !disableNext ? 'not-allowed' : 'pointer' }}
          className={!disableNext ? styles.noBg : ''}
          onClick={onClickNext}
        >
          <IconButton
            component="button"
            disabled={!disableNext}
            className={styles.button}
            style={{ pointerEvents: disableNext ? 'auto' : 'none' }}
            icon={ReactIconNext}
          />
        </span>
      </Tooltip>
    </div>
  );
};

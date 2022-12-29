import { ConfigConstant, IReduxState, Strings, t } from '@apitable/core';
import { ComponentDisplay, ScreenSize } from 'pc/components/common/component_display';
import { Popup } from 'pc/components/common/mobile/popup';
import { Modal } from 'pc/components/common/modal/modal/modal';
import { TComponent } from 'pc/components/common/t_component';
import { FC } from 'react';
import { useSelector } from 'react-redux';
// import HeaderPng from 'static/icon/datasheet/share/datasheet_img_share.png';
import { ShareContent } from './share_content';
import styles from './style.module.less';

export interface IShareNodeProps {
  /** Information about the node being operated on */
  data: {
    nodeId: string;
    type: ConfigConstant.NodeType;
    icon: string;
    name: string;
  };
  /** Modal Box Visible Control */
  visible: boolean;
  /** Close modal box */
  onClose?: () => void;
  isTriggerRender?: boolean;
}

export enum ShareTab {
  Teamwork = 'teamwork',
  PublicLink = 'publiclink',
}

export const ShareNode: FC<IShareNodeProps> = ({
  data,
  visible,
  onClose,
  isTriggerRender
}) => {
  const treeNodesMap = useSelector((state: IReduxState) => state.catalogTree.treeNodesMap);
  const { nodeName } = treeNodesMap[data.nodeId];

  if (isTriggerRender) {
    return <ShareContent data={data} />;
  }

  return (
    <>
      {/* pc */}
      <ComponentDisplay minWidthCompatible={ScreenSize.md}>
        <Modal
          className={styles.shareNodeModal}
          visible={visible}
          width={500}
          bodyStyle={{ padding: 0 }}
          onCancel={onClose}
          destroyOnClose
          footer={null}
          centered
        >
          <ShareContent data={data} />
        </Modal>
      </ComponentDisplay>

      {/* Mobile */}
      <ComponentDisplay maxWidthCompatible={ScreenSize.md}>
        <Popup
          className={styles.shareNodeDrawer}
          open={visible}
          onClose={onClose}
          height="90%"
          title={
            <div className={styles.nodeTitle}>
              <TComponent tkey={t(Strings.share_title)} params={{ node: <div className={styles.name}>{nodeName}</div> }} />
            </div>
          }
        >
          <ShareContent data={data} />
        </Popup>
      </ComponentDisplay>
    </>
  );
};

import { useState } from 'react';
import * as React from 'react';
import { IFieldPermissionProps } from 'pc/components/field_permission/interface';
import { DisabledFieldPermission } from 'pc/components/field_permission/disabled_field_permission';
import { EnableFieldPermission } from 'pc/components/field_permission/enable_field_permission';
import { useSelector } from 'react-redux';
import { Selectors, Strings, t } from '@apitable/core';
import { Modal } from 'antd';
import styles from 'pc/components/field_permission/styles.module.less';
import { black, Tooltip, useThemeColors, ThemeProvider } from '@apitable/components';
import { ComponentDisplay, ScreenSize } from 'pc/components/common/component_display';
import { Popup } from 'pc/components/common/mobile/popup';
import { getFieldTypeIcon } from 'pc/components/multi_grid/field_setting';
import { PermissionModalHeader } from './permission_modal_header';
import { InformationSmallOutlined } from '@apitable/icons/dist/components';

export const FieldPermission: React.FC<IFieldPermissionProps> = props => {
  const colors = useThemeColors();
  const { field, onModalClose } = props;
  const theme = useSelector(Selectors.getTheme);
  const fieldPermissionMap = useSelector(Selectors.getFieldPermissionMap);
  const existFieldPermission = Boolean(fieldPermissionMap && fieldPermissionMap[field.id]);
  const [permissionStatus, setPermissionStatus] = useState(existFieldPermission);

  const onClose = () => {
    setPermissionStatus(false);
  };

  const Main = () => {
    return (
      <>
        {!permissionStatus ? (
          <DisabledFieldPermission {...props} setPermissionStatus={setPermissionStatus} />
        ) : (
          <EnableFieldPermission {...props} permissionStatus={permissionStatus} onClose={onClose} />
        )}
      </>
    );
  };

  const Title = () => {
    return (
      <PermissionModalHeader
        typeName={t(Strings.column)}
        targetName={field.name}
        targetIcon={getFieldTypeIcon(field.type, black['500'])}
        onModalClose={onModalClose}
        docIcon={
          <Tooltip content={t(Strings.field_permission_help_desc)}>
            <a href={t(Strings.field_permission_help_url)} target='_blank' className={styles.helpIcon} rel="noreferrer">
              <InformationSmallOutlined color={colors.thirdLevelText} className={styles.infoIcon} />
            </a>
          </Tooltip>
        }
      />
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <ComponentDisplay minWidthCompatible={ScreenSize.md}>
        <Modal
          visible
          closeIcon={null}
          wrapClassName={styles.fieldPermissionModal}
          onCancel={onModalClose}
          destroyOnClose
          footer={null}
          centered
          width={560}
          title={<Title />}
        >
          <Main />
        </Modal>
      </ComponentDisplay>
      <ComponentDisplay maxWidthCompatible={ScreenSize.md}>
        <Popup
          className={styles.permissionDrawer}
          height="90%"
          open
          placement="bottom"
          title={<Title />}
          onClose={() => onModalClose()}
          push={{ distance: 0 }}
          destroyOnClose
        >
          <Main />
        </Popup>
      </ComponentDisplay>
    </ThemeProvider>
  );
};

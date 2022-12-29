import { FieldType, IField, ISegment, SegmentType, ICellValue, Field } from '@apitable/core';
import classNames from 'classnames';
import cellTextStyle from 'pc/components/multi_grid/cell/cell_text/style.module.less';
import { useEnhanceTextClick } from 'pc/components/multi_grid/cell/hooks/use_enhance_text_click';
import { useThemeColors, LinkButton } from '@apitable/components';
import {
  ChangeEvent, default as React,
  forwardRef, memo, useImperativeHandle, useRef, useState,
} from 'react';
import IconEmail from 'static/icon/datasheet/column/datasheet_icon_email.svg';
import IconPhone from 'static/icon/datasheet/column/datasheet_icon_phone.svg';
import IconURL from 'static/icon/datasheet/column/datasheet_icon_url.svg';
import { IBaseEditorProps, IEditor } from '../interface';
import style from './styles.module.less';
import { stopPropagation } from 'pc/utils';
import { find, omit } from 'lodash';
import { Tooltip } from 'pc/components/common';

interface IEnhanceTextEditorProps extends IBaseEditorProps {
  placeholder?: string;
  field: IField;
  style: React.CSSProperties;
  editable: boolean;
  editing: boolean;
  cellValue?: ICellValue;
}

export const EnhanceTextEditorBase: React.ForwardRefRenderFunction<IEditor, IEnhanceTextEditorProps> = (props, ref) => {
  const { disabled, placeholder, field, onSave, onChange: propsOnChange, cellValue } = props;
  const [value, setValue] = useState('');
  const colors = useThemeColors();
  const cacheValueRef = useRef<ISegment[] | null | undefined>(null);
  const editorRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(false);

  useImperativeHandle(ref, (): IEditor => ({
    focus: (preventScroll) => { focus(preventScroll); },
    blur: () => { blur(); },
    onEndEdit: (cancel: boolean) => { onEndEdit(cancel); },
    onStartEdit: (value?: ISegment[] | null) => {
      onStartEdit(value);
      cacheValueRef.current = value;
    },
    setValue: (value?: ISegment[] | null) => { onStartEdit(value); },
    saveValue: () => { saveValue(); },
  }));

  const segment2String = (value: ISegment[] | null): string => {
    if (!value) { return ''; }
    if (typeof value === 'string') {
      return value;
    }
    return value.reduce((pre, cur) => pre + cur.text, '');
  };

  const setEditorValue = (value: ISegment[] | null) => {
    setValue(segment2String(value));
  };

  const focus = (preventScroll?: boolean) => {
    editorRef.current && editorRef.current.focus({ preventScroll });
    setFocused(true);
  };

  const blur = () => {
    editorRef.current && editorRef.current.blur();
    setFocused(false);
  };

  const getValidValue = (value: string) => {
    // Ensure no loss of mailbox formatted text data when converting single line text types to mailboxes
    let omitProps = {};
    if (cacheValueRef.current && cacheValueRef.current.some(v => v.text === value)) {
      omitProps = omit(find(cacheValueRef.current, { text: value }), ['text']);
    }
    // Plain long text, matching segment phone email address, then stored as [Text]
    const segment: ISegment[] = [{ type: SegmentType.Text, text: value, ...omitProps }];
    const tempVal = value.length ? segment : null;
    return tempVal;
  };

  const updateValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.editing) {
      const value = event.target.value;
      setValue(value);
      propsOnChange && propsOnChange(getValidValue(value));
    }
  };

  const onEndEdit = (cancel: boolean) => {
    if (!cancel) {
      saveValue();
    }
    setEditorValue(null);
  };

  const saveValue = () => {
    onSave && onSave(getValidValue(value));
  };

  const setSelectionToEnd = () => {
    const element = editorRef.current;
    if (!element) {
      return;
    }
    element.scrollTop = element.scrollHeight;
  };

  const onStartEdit = (value?: ISegment[] | null) => {
    if (value === undefined) return;
    setEditorValue(value);
    setTimeout(() => {
      setSelectionToEnd();
    }, 20);
  };

  const _handleEnhanceTextClick = useEnhanceTextClick();
  if (!props.editable) {
    return (
      <div
        className={classNames(style.enhanceText, cellTextStyle.cellText)}
        onClick={() => _handleEnhanceTextClick(field.type, value)}
      >
        <div tabIndex={-1} ref={editorRef} />
        {value}
      </div>
    );
  }

  const getEnhanceTypeIcon = type => {
    if (!value) return null;
    const typeIconMap = {
      [FieldType.URL]: <IconURL fill={colors.thirdLevelText} />,
      [FieldType.Email]: <IconEmail fill={colors.thirdLevelText} />,
      [FieldType.Phone]: <IconPhone fill={colors.thirdLevelText} />,
    };
    return (
      <span
        className={style.enhanceTextIcon}
        onClick={() => _handleEnhanceTextClick(field.type, value)}
      >
        {typeIconMap[type]}
      </span>
    );
  };

  const showURLTitleFlag = !focused && field.type === FieldType.URL && field.property?.isRecogURLFlag && cellValue?.[0]?.title;

  const renderURLTitle = () => {
    if (!showURLTitleFlag) return null;

    const urlTitle = Field.bindModel(field).cellValueToURLTitle(cellValue);
    if (!urlTitle) return null;

    return(
      <Tooltip title={value} placement="top">
        <LinkButton
          type=""
          className={style.urlTitle}
          onMouseDown={() => {
            if (/^https?:\/\//.test(value)) {
              window.open(value, '_blank');
              return;
            }
            window.open(`http://${value}`);
          }}
        >
          {urlTitle}
        </LinkButton>
      </Tooltip>
    );
  };

  return (
    <div
      ref={wrapperRef}
      className={style.textEditor}
      style={{ ...props.style }}
      onMouseMove={stopPropagation}
      onWheel={stopPropagation}
    >
      <div className={style.enhanceTextEditor}>
        {renderURLTitle()}
        <input
          ref={editorRef}
          placeholder={placeholder}
          disabled={disabled}
          value={value}
          onChange={updateValue}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          style={{
            minHeight: 40, 
            color: showURLTitleFlag ? 'transparent' : 'inherit',
          }}
        />
        {getEnhanceTypeIcon(field.type)}
      </div>
    </div>

  );
};

export const EnhanceTextEditor = memo(forwardRef(EnhanceTextEditorBase));

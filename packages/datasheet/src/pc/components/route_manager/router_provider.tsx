import { RecordVision, StoreActions, Strings, t } from '@apitable/core';
import { ConfigProvider, message } from 'antd';
import axios from 'axios';
import { releaseProxy } from 'comlink';
import Image from 'next/image';
import { Method } from 'pc/components/route_manager/const';
import { navigationToUrl } from 'pc/components/route_manager/navigation_to_url';
import VersionUpdater from 'pc/components/version_updater';
import { IScrollOffset, ScrollContext } from 'pc/context';
import { useNavigatorName } from 'pc/hooks';
import { useBlackSpace } from 'pc/hooks/use_black_space';
import { useViewTypeTrack } from 'pc/hooks/use_view_type_track';
import { ResourceContext, resourceService } from 'pc/resource_service';
import { store } from 'pc/store';
import { getCookie, isTouchDevice } from 'pc/utils';
import { dndH5Manager, dndTouchManager } from 'pc/utils/dnd_manager';
import { getEnvVariables } from 'pc/utils/env';
import { getStorage, StorageName } from 'pc/utils/storage';
import { comlinkStore } from 'pc/worker';
import * as React from 'react';
import { useEffect, useRef } from 'react';
import { DndProvider } from 'react-dnd';
import { useDispatch } from 'react-redux';
import NoDataImg from 'static/icon/workbench/workbench_account_nodata.png';

message.config({
  maxCount: 1,
});

const customizeRenderEmpty = () => (
  <div className='emptyPlaceholder'>
    <Image alt='no data' src={NoDataImg} className='img' width={160} height={120} />
    <div className='title'>{t(Strings.no_data)}</div>
  </div>
);

export const antdConfig = {
  autoInsertSpaceInButton: false,
  renderEmpty: customizeRenderEmpty,
};

const RouterProvider = ({ children }) => {
  const cacheScrollMap = useRef({});
  const dispatch = useDispatch();

  // Logging panel presentation mode - initializing redux from localStorage
  useEffect(() => {
    dispatch(StoreActions.setRecordVision(getStorage(StorageName.RecordVision) || RecordVision.Center));
  }, [dispatch]);

  // To solve the problem of routing in Feishu needs to bring a Feishu logo, 
  // so the behavior of the a tag is handled together with the proxy in navigationToUrl
  useEffect(() => {
    const isFeishu = navigator.userAgent.toLowerCase().indexOf('lark') > -1;
    const clickHandler = e => {
      const reg = new RegExp(`^(${window.location.origin}|(http|https)://vika.cn)`);
      const paths = ['/user', '/login', '/org', '/workbench', '/notify', '/management', '/invite', '/template', '/share'];
      let element = e.target;
      while (element && element.tagName !== 'A') {
        element = element.parentNode;
      }
      const url: string = element?.href;
      if (!url || !isFeishu || element.tagName !== 'A' || !reg.test(url)) {
        return;
      }
      const isIgnore = paths.some(item => url.includes(item));
      if (isIgnore) {
        return;
      }
      e.preventDefault();
      navigationToUrl(url, { method: (e.target.target || '_self') === '_self' ? Method.Push : Method.NewTab });
    };
    window.addEventListener('click', clickHandler);
    return () => {
      window.removeEventListener('click', clickHandler);
      comlinkStore.proxy?.[releaseProxy]();
      comlinkStore.worker?.terminate();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Links for the http protocol are automatically redirected to https
  useEffect(() => {
    if (!getEnvVariables()?.FORCE_HTTPS) {
      return;
    }

    const targetProtocol = 'https:';
    const urlObj = new URL(window.location.href);
    if (urlObj.protocol !== targetProtocol) {
      urlObj.protocol = targetProtocol;
      window.location.href = urlObj.href;
    }
  }, []);

  useNavigatorName();
  useViewTypeTrack(); // View Type Burial
  useBlackSpace();

  useEffect(() => {
    axios.interceptors.request.use(
      config => {
        config.headers['X-XSRF-TOKEN'] = getCookie('XSRF-TOKEN');
        return config;
      },
      error => {
        return Promise.reject(error);
      },
    );
  }, [dispatch]);

  useEffect(() => {
    const onResize = () => {
      dispatch(StoreActions.setScreenWidth(window.innerWidth));
    };
    dispatch(StoreActions.setScreenWidth(window.innerWidth));
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [dispatch]);

  const changeCacheScroll = (value: IScrollOffset, dsId?: string, vId?: string) => {
    if (!store) {
      return;
    }
    const state = store.getState();
    const { datasheetId, viewId } = state.pageParams;
    const key = `${dsId || datasheetId},${vId || viewId}`;

    const oldCacheValue = cacheScrollMap.current[key] || {};
    const next = {
      ...cacheScrollMap.current,
      [key]: {
        ...oldCacheValue,
        ...value,
      },
    };

    cacheScrollMap.current = next;
  };

  return (
    <ConfigProvider {...antdConfig}>
      <ResourceContext.Provider value={resourceService.instance}>
        <DndProvider manager={isTouchDevice() ? dndTouchManager : dndH5Manager}>
          <ScrollContext.Provider
            value={{
              cacheScrollMap,
              changeCacheScroll,
            }}
          >
            {children}
          </ScrollContext.Provider>
        </DndProvider>
        <VersionUpdater />
      </ResourceContext.Provider>
    </ConfigProvider>
  );
};
export default RouterProvider;

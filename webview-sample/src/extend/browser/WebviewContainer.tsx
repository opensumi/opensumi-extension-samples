import * as React from 'react';
import { PlainWebview } from 'sumi-browser';

import { INodeService } from "../common/service";
import { webviewId } from "../common/constants";
import './style.less';


/**
 * OpenSumi 特有的 webview 使用方式
 * https://yuque.antfin-inc.com/ide-framework/extension/sfyhpl#qlTRN
 * PlainWebview 用于将 webview 挂载到视图中
 * 在 Web 中实际实现为 iframe
 * Electron 中则使用 webview 元素
 * @param param0
 */
export const WebviewContainer: React.FC<IComponentProps<INodeService>> = ({
  sumiExtendSet,
  sumiExtendService,
}) => {

  return (
    <div className="sumi-extension-example-container">
      <PlainWebview id={webviewId} />
    </div>
  );
};

import * as React from "react";
import { useState, useEffect } from 'react';
import { Button, localize } from 'sumi-browser';

import { INodeService } from "../common/service";
import './style.less';

const ktLocalize = (key, message) => {
  return localize(key, message, 'opensumi.i18n-sample');
};

const defaultTitle = "左侧面板";

export const Leftview: React.FC<IComponentProps<INodeService>> = ({
  sumiExtendSet,
  sumiExtendService,
}) => {
  const [title, setTitle] = useState(defaultTitle);

  function onDidUpdateTitle(val: string) {
    setTitle(defaultTitle + " " + val);
  }

  useEffect(() => {
    if (sumiExtendSet) {
      sumiExtendSet.set({
        updateTitle: onDidUpdateTitle,
      });
    }
  }, []);

  function clickHandler() {
    sumiExtendService.node.sayHello().then(msg => {
      console.log("Leftview receive message", msg);
    });
  }

  return (
    <div className="sumi-extension-example-container">
      <p>{title}</p>
      <Button onClick={clickHandler}>{ktLocalize('browser.view.change.title', 'Change Title')}</Button>
    </div>
  );
};

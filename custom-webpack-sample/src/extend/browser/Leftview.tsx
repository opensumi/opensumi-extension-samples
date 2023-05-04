import * as React from 'react';
import { Button } from 'sumi-browser';

import { INodeService } from "../common/service";
import './style.less';

const defaultTitle = "LEFT PANEL";

export const Leftview: React.FC<IComponentProps<INodeService>> = ({
  sumiExtendSet,
  sumiExtendService,
}) => {
  console.log('React => ', React);
  const [title, setTitle] = React.useState(defaultTitle);

  function onDidUpdateTitle(val: string) {
    setTitle(defaultTitle + " " + val);
  }

  React.useEffect(() => {
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
      <Button onClick={clickHandler}>change title</Button>
    </div>
  );
};

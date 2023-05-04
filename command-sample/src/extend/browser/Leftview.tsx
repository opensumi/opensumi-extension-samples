import * as React from 'react';
import { useCallback, useState } from 'react';
import { Button, commands } from 'sumi-browser';

import { INodeService } from '../common/service';
import './style.less';
import { Commands } from '../../commands';

export const Leftview: React.FC<IComponentProps<INodeService>> = ({
  sumiExtendSet,
  sumiExtendService,
}) => {
  const [workspaceFolder, setWorkspaceFolder] = useState<string>();
  const [quickPickItem, setQuickPickItem] = useState<string>();

  const handleSayHello = useCallback(() => {
    commands.executeCommand(Commands.sayHello);
  }, []);

  const handleFoo = useCallback(() => {
    commands.executeCommand(Commands.foo);
  }, []);

  const handleGetWorkspaceFolder = useCallback(async () => {
    const res = await commands.executeCommand<string>(
      Commands.getWorkspaceFolder
    );
    setWorkspaceFolder(res);
  }, []);

  const handleShowQuickPick = useCallback(async () => {
    const res = await commands.executeCommand<string>(Commands.quickPick);
    setQuickPickItem(res);
  }, []);

  return (
    <div className="sumi-extension-example-container">
      <p>
        <Button onClick={handleSayHello}>sayHello</Button>
      </p>
      <p>
        <Button onClick={handleFoo}>foo</Button>
      </p>
      <p>
        <Button onClick={handleGetWorkspaceFolder}>Workspace Folder</Button>
      </p>
      <p>
        <Button onClick={handleShowQuickPick}>Pick Item</Button>
      </p>

      <div>WorkspaceFolder: {workspaceFolder}</div>
      <div>QuickPick Item: {quickPickItem}</div>
    </div>
  );
};

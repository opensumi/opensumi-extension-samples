import * as vscode from "vscode";
import { loggerFactory } from '@opensumi/extension-logger';

import { Commands } from './commands';

const logger = loggerFactory('Command Sample', 'Trace');

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(Commands.sayHello, async () => {
      logger.info(`execute command: ${Commands.sayHello}`);
      vscode.window.showInformationMessage('Hello Kaitian');
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(Commands.foo, async () => {
      logger.info(`execute command: ${Commands.foo}`);
      // do something...
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(Commands.getWorkspaceFolder, async () => {
      logger.info(`execute command: ${Commands.getWorkspaceFolder}`);
      const workspaceFolder = vscode.workspace.workspaceFolders[0].uri.path;
      return workspaceFolder;
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand(Commands.quickPick, async () => {
      logger.info(`execute command: ${Commands.quickPick}`);
      const item = await vscode.window.showQuickPick(['Item1', 'Item2', 'Item3']);
      if(item) {
        return item;
      }
    })
  );
}

export function deactivate() {}

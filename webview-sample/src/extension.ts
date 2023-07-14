// vscode namespace 下为 VS Code 插件 API
import * as vscode from "vscode";
import { loggerFactory } from '@opensumi/extension-logger';

const logger = loggerFactory('<Your Logger Name>', 'Trace');

export function activate(context: vscode.ExtensionContext) {
  logger.info('[Custom Message] Start extension successed.');
  context.subscriptions.push(
    vscode.commands.registerCommand("HelloOpenSumi", async () => {
      logger.info('execute HelloOpenSumi');
      vscode.window.showInformationMessage('Hello OpenSumi');
    })
  );
}

export function deactivate() {}

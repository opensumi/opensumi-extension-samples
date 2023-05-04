// vscode namespace 下为 VS Code 插件 API
import * as vscode from "vscode";
import { loggerFactory } from '@opensumi/extension-logger';

const logger = loggerFactory('<Your Logger Name>', 'Trace');

export function activate(context: vscode.ExtensionContext) {
  logger.info('Extension is activating...');
  context.subscriptions.push(
    vscode.commands.registerCommand("HelloKaitian", async () => {
      logger.info('execute HelloKaitian');
      vscode.window.showInformationMessage('Hello Kaitian');
    })
  );
}

export function deactivate() {}

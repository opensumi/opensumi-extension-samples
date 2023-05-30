import * as sumi from "sumi";
import { loggerFactory } from '@opensumi/extension-logger';

const logger = loggerFactory('InputBox Sample', 'Trace');

interface SumiInputBox extends sumi.InputBox {
  hideOnDidAccept?: boolean;
}

export function activate(context: sumi.ExtensionContext) {
  context.subscriptions.push(
    sumi.commands.registerCommand('inputbox.open.with.option', async () => {
      logger.info('execute command: inputbox.open.with.option');
      const inputBox: SumiInputBox = sumi.window.createInputBox();

      inputBox.busy  = false;
      inputBox.hideOnDidAccept = false;
      inputBox.placeholder = 'Hello Sumi';

      inputBox.show();
      inputBox.onDidAccept(() => {
        if (!inputBox.value) {
          return;
        }
        // show busy
        inputBox.busy = true;
      })
    })
  );
}

export function deactivate() {}

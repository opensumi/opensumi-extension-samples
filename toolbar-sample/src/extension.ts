// vscode namespace 下为 VS Code 插件 API
import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  vscode.commands.registerCommand('popover-command', () => {
    vscode.window.showInformationMessage('Popover Clicked');
  })
}

// this method is called when your extension is deactivated
export function deactivate() {}

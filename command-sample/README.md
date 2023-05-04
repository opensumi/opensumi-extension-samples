# Command Sample

关于在插件前/后端之间相互调用 Command 的示例

## 基础原理
 Command 是指在注册到 OpenSumi 内部的一系列指令，与 VS Code 一样，它们可以通过插件来贡献，OpenSumi 在此基础上扩展了前端的命令系统，使得可以在前端视图中引用并执行一些指令，例如可以在插件 Node 环境中注册指令供前端调用。

在插件 Node.js 中注册命令
 ```ts
 // extension.ts or extend/node/index.ts

 import * as sumi from 'sumi';
 // import * as vscode from 'vscode';

function activate() {
  sumi.commands.registerCommand('getWorkspaceFolder', () => {
    return sumi.workspace.workspaceFolders[0].uri.path;
  });
}
 ```

视图中执行
```tsx
// 注意需要从 sumi-browser 中导入
import { commands } from 'sumi-browser';

export const MyView = () => {
  const handleGetWorkspace = React.useCallback(async () => {
    const workspace = await commands.executeCommand('getWorkspaceFolder');
    //
  }, []);

  return (
    <div>
      <Button>Get Workspace</Button>
    </div>
  )
}
```

## 运行
```bash
# 开发
$ npm run watch

# 编译
$ npm run compile

# 运行
$ npm run dev
```

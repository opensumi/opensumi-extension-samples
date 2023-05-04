# OpenSumi Extension Samples

OpenSumi IDE 插件示例集合，仅包含 OpenSumi 扩展 API 相关示例，OpenSumi 插件实现兼容 VS Code ，更多 VS Code 插件示例参考 [VS Code Extension Samples](https://github.com/microsoft/vscode-extension-samples)

## 环境要求

全局安装 `@opensumi/cli` 命令行工具。

```bash
$ npm i @opensumi/cli -g
```

## 用法

```bash
$ git clone git@github.com:opensumi/opensumi-extension-samples.git
$ cd <samples-folder>   # 进入任意示例目录

$ npm install           # 安装依赖

$ npm run compile       # 编译插件代码
# or
# $ sumi compile

$ npm run dev           # 使用 OpenSumi CLI 运行插件
# or
# $ sumi dev
```

## LICENSE

MIT

See [LICENSE](./LICENSE) for more detail.

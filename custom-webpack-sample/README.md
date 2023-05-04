# custom-webpack-sample

使用自定义的 webpack 配置，在目录下添加 `sumi-webpack.config.js`, 运行 `sumi watch`、`sumi compile` 命令时添加 `--config` flag 即可。

## 目录说明

```bash
.
├── CHANGELOG.md
├── README.md
├── sumi.config.js              #自定义 Browser / Node 层配置
├── sumi-webpack.config.js      #自定义 webpack 配置入口
├── package.json
├── src
│   ├── extend
│   └── extension.ts
├── tsconfig.json
├── tslint.json
└── typings
    └── style
```

## 运行
```bash
# 开发
$ npm run watch   # sumi watch --config

# 编译
$ npm run compile  # sumi compile --config
```

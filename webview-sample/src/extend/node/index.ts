import * as sumi from "sumi";
import { webviewId } from "../common/constants";

export function activate(context: sumi.ExtensionContext) {
  /**
   * OpenSumi 扩展的 Webview
   */
  // 获取 webviewHandle
  const webview = sumi.webview.getPlainWebviewHandle(webviewId);
  // 指定加载某个 url
  webview.loadUrl('https://opensumi.com');


  /**
   * VS Code 原生 Webview
   */

  const webviewPanel = sumi.window.createWebviewPanel('my-webview', 'Webview Sample',{
    viewColumn: 1,
  } );

  const todoMvcCdnBase = 'https://todomvc.com/examples/react';

  webviewPanel.webview.html = `
  <!doctype html>
  <html lang="en" data-framework="react">
    <head>
      <meta charset="utf-8">
      <title>React • TodoMVC</title>
      <link rel="stylesheet" href="${todoMvcCdnBase}/node_modules/todomvc-common/base.css">
      <link rel="stylesheet" href="${todoMvcCdnBase}/node_modules/todomvc-app-css/index.css">
    </head>
    <body>
      <section class="todoapp"></section>
      <footer class="info">
        <p>Double-click to edit a todo</p>
        <p>Created by <a href="http://github.com/petehunt/">petehunt</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>

      <script src="${todoMvcCdnBase}/node_modules/todomvc-common/base.js"></script>
      <script src="${todoMvcCdnBase}/node_modules/react/dist/react-with-addons.js"></script>
      <script src="${todoMvcCdnBase}/node_modules/classnames/index.js"></script>
      <script src="${todoMvcCdnBase}/node_modules/react/dist/JSXTransformer.js"></script>
      <script src="${todoMvcCdnBase}/node_modules/director/build/director.js"></script>

      <script src="${todoMvcCdnBase}/js/utils.js"></script>
      <script src="${todoMvcCdnBase}/js/todoModel.js"></script>
      <!-- jsx is an optional syntactic sugar that transforms methods in React's
      render into an HTML-looking format. Since the two models above are
      unrelated to React, we didn't need those transforms. -->
      <script type="text/jsx" src="${todoMvcCdnBase}/js/todoItem.jsx"></script>
      <script type="text/jsx" src="${todoMvcCdnBase}/js/footer.jsx"></script>
      <script type="text/jsx" src="${todoMvcCdnBase}/js/app.jsx"></script>
    </body>
  </html>
  `;

  webviewPanel.reveal();
}

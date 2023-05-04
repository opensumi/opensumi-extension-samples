import * as sumi from 'sumi';

export async function activate(context: sumi.ExtensionContext) {
  // sumi.toolbar.registerToolbarAction
  const printer = await sumi.toolbar.registerToolbarAction({
    type: 'button',
    title: '打印',
    iconPath: './icons/printer.svg',
    id: 'sample-printer',
    description: 'This is description',
    // 定义按钮的几种状态
    states: {
      // 默认将标题前景色设为红色
      default: {
        titleForeground: '#FF004F',
        // 按钮与图标使用左右布局
        btnTitleStyle: 'horizontal',
      },
      // clicked 状态下为灰色
      clicked: {
        titleForeground: '#CCC',
        btnTitleStyle: 'horizontal',
      },
    },
  });

  printer.onClick(() => {
    printer.setState('clicked');
    sumi.window.showInformationMessage('Print!');
  });

  const gift = await sumi.toolbar.registerToolbarAction({
    type: 'select', // 注册一个 select 类型的 toolbar action
    // 绑定 do-select command
    id: 'common-select',
    defaultValue: 'book',
    description: 'This is description',
    // select 下拉值列表
    options: [
      {
        iconPath: '/icons/gift.svg',
        label: '礼物',
        value: 'gift',
      },
      {
        iconPath: '/icons/book.svg',
        label: '五年高考',
        value: 'book',
      },
    ],
    states: {
      // 默认 state
      default: {
        labelForegroundColor: '#FF004F',
      },
      selected: {
        labelForegroundColor: '#CCC',
      },
    },
  });

  gift.onSelect((e) => {
    gift.setState('selected');
    sumi.window.showInformationMessage(`Select ${e}`);
  });


  // sumi.toolbar.getToolbarActionButtonHandle
  sumi.commands.registerCommand('sample-start', async () => {
    const action = await sumi.toolbar.getToolbarActionButtonHandle('sample-start');
    action.setState('clicked');
    sumi.window.showInformationMessage('Start!');
  });
}

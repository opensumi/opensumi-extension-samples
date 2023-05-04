import * as sumi from 'sumi';   // sumi node API (extends vscode)

export function activate(context: sumi.ExtensionContext) {
  const { componentProxy, registerExtendModuleService } = context;

  registerExtendModuleService({
    async sayHello() {
      await componentProxy.Leftview.updateTitle('Hello OpenSumi Extension');
      await sumi.layout.toggleBottomPanel();
      return "Hello OpenSumi Extension";
    }
  });
}

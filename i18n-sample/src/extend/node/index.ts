import * as sumi from 'sumi';   // sumi node API (extends vscode)
import * as nls from 'vscode-nls';

const localize = nls.config({ messageFormat: nls.MessageFormat.bundle, bundleFormat: nls.BundleFormat.standalone })();

export function activate(context: sumi.ExtensionContext) {
  const { componentProxy, registerExtendModuleService } = context;
  let count = 0;

  registerExtendModuleService({
    async sayHello() {
      await componentProxy.Leftview.updateTitle(localize('update.newtitle.node', 'Hello OpenSumi, This is new title'));
      await sumi.layout.toggleBottomPanel();
      return "Hello OpenSumi Extension";
    }
  });
}

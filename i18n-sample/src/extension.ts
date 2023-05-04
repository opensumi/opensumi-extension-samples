import * as sumi from 'sumi';

import { bundle as zhCnBundle } from './language/zh-cn';
import { bundle as enUsBundle } from './language/en-us';

import { setLocalizeBundle, localize } from './localize';

setLocalizeBundle('zh-cn', zhCnBundle);
setLocalizeBundle('en-us', enUsBundle);

export function activate() {
	// do Something...
  sumi.window.showInformationMessage(localize('information.message.save.file.success', 'Default: Save file success.'));
}

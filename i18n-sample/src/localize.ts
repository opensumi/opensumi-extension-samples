import * as sumi from 'sumi';

let CURRENT_LOCALE_DATA = {};

export function setLocalizeBundle(
  languageId: string,
  bundle: { [prop: string]: string }
) {
  CURRENT_LOCALE_DATA[languageId] = bundle;
}

export function localize(key: string, defaultMessage: string, ...args: any[]): string {
  let result: string;

  const bundle = CURRENT_LOCALE_DATA[sumi.env.language.toLocaleLowerCase()];

  if (bundle) {
	const message = bundle[key];
    if (args.length === 0) {
      result = message;
    } else {
      result = message.replace(/\{(\d+)\}/g, (match, rest) => {
        let index = rest[0];
        let arg = args[index];
        let result = match;
        if (typeof arg === 'string') {
          result = arg;
        } else if (
          typeof arg === 'number' ||
          typeof arg === 'boolean' ||
          arg === void 0 ||
          arg === null
        ) {
          result = String(arg);
        }
        return result;
      });
    }

    return result;
  }
  return defaultMessage;
}

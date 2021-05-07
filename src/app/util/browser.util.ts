export class BrowserUtil {

  static sanitizeHtml(template: string) {
    const srcTagRegExp: RegExp = new RegExp(/src/g);

    const sanitizedHtml = template.replace(/\s_ngcontent\-.{1,4}\-.{1,4}\=\"\"/g, '');

    if (srcTagRegExp.test(template)) {
      return sanitizedHtml.replace(/\s(src|\[src\])\=\".*\"/g, '');
    }
    return sanitizedHtml;
  }

  static get isMobile(): boolean {
    // credit to Timothy Huang for this regex test:
    // https://dev.to/timhuang/a-simple-way-to-detect-if-browser-is-on-a-mobile-device-with-javascript-44j3
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      return true;
    }
    else {
      return false;
    }
  }



}

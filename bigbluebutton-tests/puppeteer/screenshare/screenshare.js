const Page = require('../core/page');
const util = require('./util');
const e = require('../core/elements');
const { ELEMENT_WAIT_TIME, VIDEO_LOADING_WAIT_TIME } = require('../core/constants');
const { sleep } = require('../core/helper');
const { checkElementLengthEqualTo } = require('../core/util');

class ShareScreen extends Page {
  constructor() {
    super('share-screen');
  }

  async test() {
    try {
      await util.startScreenshare(this);
      await this.page.waitForSelector(e.screenshareConnecting, ELEMENT_WAIT_TIME);
      await this.page.waitForSelector(e.screenShareVideo, VIDEO_LOADING_WAIT_TIME);
      await sleep(5000);
      const response = await util.getScreenShareContainer(this);
      return response;
    } catch (err) {
      await this.logger(err);
      return false;
    }
  }

  async testMobileDevice(args, testName, deviceX) {
    try {
      await this.init(args, undefined, undefined, undefined, testName, undefined, deviceX);
      await this.startRecording(testName);
      await this.closeAudioModal();
      const screenshareBtn = await this.page.evaluate(checkElementLengthEqualTo, e.screenShare, 1);
      return screenshareBtn;
    } catch (err) {
      await this.logger(err);
      return false;
    }
  }
}

module.exports = exports = ShareScreen;

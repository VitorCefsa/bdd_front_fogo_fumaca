class TestarModeloPage {
    constructor(page) {
      this.page = page;
      this.heading = page.locator('h1');
      this.video = page.locator('img');
    }
  
    async goto() {
      await this.page.goto('/testar_modelo');
    }
  
    async isVideoVisible() {
      return this.video.isVisible();
    }
  
    async getHeadingText() {
      return this.heading.textContent();
    }
  }
  
  module.exports = TestarModeloPage;
  
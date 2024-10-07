class HomePage {
    constructor(page) {
      this.page = page;
      this.heading = page.locator('h1');
    }
  
    async goto() {
      await this.page.goto('/');
    }
  
    async getHeadingText() {
      return this.heading.textContent();
    }
  }
  
  module.exports = HomePage;
  
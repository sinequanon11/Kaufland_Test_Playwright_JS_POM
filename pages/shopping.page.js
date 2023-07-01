exports.ShoppingPage = class ShoppingPage {

  constructor(page) {

    this.page = page

    this.shoppingPage_button = page.getByRole('link', { name: 'Kaufland', exact: true })
    this.searchItem_textbox = page.getByPlaceholder('Online-Marktplatz durchsuchen')
    this.searchItem_button = page.getByRole('button', { name: 'Jetzt suchen' })
    this.selectItem_button = page.locator("//*[contains(text(), 'Kuhmilch Natur')]")
    this.inDenWarenkorb_button = page.locator("(//button[@data-cs-override-id='add-to-cart-button']//span)[2]")
    this.zurKasse_button = page.getByRole('button', { name: 'Zur Kasse' })
    
  }

  async shopping(searchItem) {

    await this.shoppingPage_button.click()
    await this.searchItem_textbox.fill(searchItem)
    await this.searchItem_button.press('Enter')
    await this.selectItem_button.click()
    await this.inDenWarenkorb_button.click()
    await this.zurKasse_button.click()
    
  }
}


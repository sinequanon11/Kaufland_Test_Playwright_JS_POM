exports.Logout = class Logout {

    constructor(page) {

        this.page = page

        this.mainPage_button = page.getByRole('link', { name: 'Kaufland' })
        this.account_button = page.getByRole('button', { name: 'John' })         
        this.abmelden_button = page.getByRole('button', { name: 'Abmelden' })       
    }

    async logout() {

        await this.mainPage_button.click()
        await this.account_button.click()
        await this.abmelden_button.click()            
    }

}
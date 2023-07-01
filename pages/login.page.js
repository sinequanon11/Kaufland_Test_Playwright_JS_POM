exports.LoginPage = class LoginPage {

    constructor(page) {

        this.page = page

        this.anmelden_button = page.locator("//span[text()=' Anmelden ']")
        this.eMailAdresse_textbox = page.locator('#email')
        this.forthfahren_button = page.locator('[data-test-id="login-continue-button"]')
        this.passwort_textbox = page.locator('#password')
        this.jetztAnmelden_button = page.locator('[data-test-id="login-button"]')       
    }

    async goToLoginPage() {
        await this.page.goto('https://www.kaufland.de/');
        await this.page.getByRole('button', { name: 'Zustimmen' }).click();
    }

    async login(email, password) {
        await this.anmelden_button.click()
        await this.eMailAdresse_textbox.fill(email)
        await this.forthfahren_button.click()
        await this.passwort_textbox.fill(password)
        await this.jetztAnmelden_button.click()

    }
  
}


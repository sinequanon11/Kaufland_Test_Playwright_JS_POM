exports.DeliveryInfo = class DeliveryInfo {

    constructor(page) {

        this.page = page

        this.street_textbox = page.getByLabel('*Straße')
        this.number_textbox = page.getByLabel('*Nr.')
        this.platz_textbox = page.getByLabel('*PLZ')
        this.ort_textbox = page.getByLabel('*Ort')
        this.payment_button = page.getByTestId('goto-payment-step-button')
    }

    async deliveryInfo(street, number, platz, ort) {

        await this.street_textbox.fill(street)
        await this.number_textbox.fill(number)
        await this.platz_textbox.fill(platz)
        await this.ort_textbox.fill(ort)
        await this.payment_button.click()
    }
}


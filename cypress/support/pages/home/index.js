import { el } from './elements'
class HomePage {

    validationPage() {
        cy.get(el.homePageVisible)
            .should('be.visible')
    }

    selectBox() {
        cy.get(el.select)
            .select('Bootstrap V4 Theme')
            .should('have.visible')
    }

    clickButtonAddRecord() {
        cy.contains(el.buttonAddRecord).click()
    }

    writeName(name) {
        cy.get(el.name)
            .type(name)
        cy.wait(3000)
    }

    clickCheckBox() { 
          cy.get(el.checkBox).click()
    }

    clickButtonDeleteOn() {
        cy.contains(el.buttonDelete).click()
    }

    validationMessagePopUp(frase) {
        cy.get(el.mensagemPopUp)
            .should('have.text', frase)
    }

    clickButtonDeleteTwo() {
        cy.get(el.buttonDeleteTwo).click()
    }

    validationMensageToast(message) {
        cy.contains(el.toastMensage)
            .should('be.visible')
            .should('have.text', message)

    }
}
export default new HomePage()

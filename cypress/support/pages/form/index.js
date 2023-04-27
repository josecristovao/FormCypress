
import { el } from './elements'
class FormPage {
    validationPageForm() {
        cy.get(el.buttonSaveBack, { timeout: 6000 })
            .should('be.visible')
    }
    
    setName(form){
        cy.get(el.name).clear().type(form.name)
    }
    setLastName(form){
        cy.get(el.lastName).clear().type(form.lastName)
    }
    setFirstName(form){
        cy.get(el.firstName).clear().type(form.firstName)
    }
    setPhone(form){
        cy.get(el.phone).clear().type(form.phone)
    }
    setAdressOne(form){
        cy.get(el.adress).clear().type(form.adress)
    }
    setAdressTwo(form){
        cy.get(el.adressComplement).clear().type(form.adressComplement)
    }
    setCity(form){
        cy.get(el.city).clear().type(form.city)
    }
    setState(form){
        cy.get(el.state).clear().type(form.state)
    }
    setPostalCode(form){
        cy.get(el.postalCode).clear().type(form.postalCode)
    }
    setCountry(form){
        cy.get(el.country).clear().type(form.country)
    }
    setEmployeeNumber(form){
        cy.get(el.employeeNumber).clear().type(form.employeeNumber)
    }
    setCreditLimit(form){
        cy.get(el.creditLimit).clear().type(form.crediLimit)
    }

    clickButtonSave() {
        cy.get(el.buttonSave).click()
    }

    validationMessage() {
        const message = 'Your data has been successfully stored into the database. Edit Record or Go back to list'
        cy.contains(el.messageValidation, { timeout: 7000 })
            .should('have.text', message)
            .should('be.visible')
    }
    clickButtonBack() {
        cy.contains(el.buttonBack, { timeout: 6000 }).click()
    }
}
export default new FormPage()

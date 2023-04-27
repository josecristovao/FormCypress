
import formPage from '../support/pages/form'
import homePage from '../support/pages/home'
import { form } from '../support/factories/form'

describe('Form', function () {
    beforeEach(function () {
        cy.visit('/')
    })
    it('Create a new record', function () {
        homePage.validationPage()
        homePage.selectBox()
        homePage.clickButtonAddRecord()
        formPage.validationPageForm()
        formPage.setName(form)
        formPage.setLastName(form)
        formPage.setFirstName(form)
        formPage.setPhone(form)
        formPage.setAdressOne(form)
        formPage.setAdressTwo(form)
        formPage.setCity(form)
        formPage.setState(form)
        formPage.setPostalCode(form)
        formPage.setCountry(form)
        formPage.setEmployeeNumber(form)
        formPage.setCreditLimit(form)
        formPage.clickButtonSave()
        formPage.validationMessage()
    })

    it('Re-create a record and delete', function () {
        homePage.validationPage()
        homePage.selectBox()
        homePage.clickButtonAddRecord()
        formPage.validationPageForm()
        formPage.setName(form)
        formPage.setLastName(form)
        formPage.setFirstName(form)
        formPage.setPhone(form)
        formPage.setAdressOne(form)
        formPage.setAdressTwo(form)
        formPage.setCity(form)
        formPage.setState(form)
        formPage.setPostalCode(form)
        formPage.setCountry(form)
        formPage.setEmployeeNumber(form)
        formPage.setCreditLimit(form)
        formPage.clickButtonSave()
        formPage.validationMessage()
        formPage.clickButtonBack()
        homePage.writeName(form.name)
        homePage.clickCheckBox()
        homePage.clickButtonDeleteOn()
        homePage.validationMessagePopUp(form.messageDelete)
        homePage.clickButtonDeleteTwo()
        homePage.validationMensageToast(form.messageToast)
    })
})
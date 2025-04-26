import { registerPage } from "../pages/registerPage"
const registerObj = new registerPage()
import registerData from '../../cypress/fixtures/registerData.json'

describe('test automation' , () =>{

    beforeEach('function', () =>{
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    it('register flow', () =>{

        registerObj.openURL()
        registerObj.enterFirstName(registerData.firstName)
        registerObj.enterLastName(registerData.lastName)
        registerObj.enterEmail(registerData.email)
        registerObj.enterTelephone(registerData.telephone)
        registerObj.enterPassword(registerData.password)
        registerObj.selectCheckbox()
        registerObj.clickOnContinue()
    })
})
import { homePage } from "../pages/homePage"
const homePageObj = new homePage()
import testData from '../../cypress/fixtures/testData.json'

describe('test automation', () =>{
    beforeEach('function', () =>{
        cy.on('uncaught:exception', (err, runnable) => {

            return false
        })
    })
    before(()=>{
        cy.login(testData.login.username, testData.login.password)
    })

    it('Add To Cart Flow', () =>{
        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addtocart()
        homePageObj.verifySuccessMessage().should('contain', testData.message.successMessage)
        .and('contain', testData.product.productName)
    })
})
import loginLocators from "../locators/loginLocators.json"
import loginData from "../fixtures/loginData.json"

//login related function

export function assertLoginPage(){
    
    cy.assertText(loginLocators.loginPage, loginData.loginPage)
}

export function typeUserName(username){
    cy.fillField(loginLocators.userNameText, username)
}

export function typePassword(){
    cy.fillField(loginLocators.passwordText, loginData.password)
}

export function clickLogin(){
    cy.clickButton(loginLocators.loginBtn)
}

export function invalidCredentialsMessage(){
    cy.assertText(loginLocators.invalidCredentialsMessage, loginData.invalidCredentialsMessage)
}

export function requiredField(){
    cy.assertText(loginLocators.requiredErrorMessage, loginData.requiredErrorMessage)
}

export function assertDashboard(){
    cy.assertText(loginLocators.dashboard, loginData.dashboard)
}
import dashboardLocators from "../locators/dashboardLocators.json"
import dashboardData from "../fixtures/dashboadData.json"

export function adminAssertion(){
    cy.visit('/dashboard/index')
    cy.assertText(dashboardLocators.admin, dashboardData.menuAdmin)
}

export function pimAssertion(){
    cy.visit('/dashboard/index')
    cy.assertText(dashboardLocators.pim, dashboardData.PIM)
}
import loginData from "../fixtures/loginData.json"
const login = require("../business logic/login")

describe('Login test cases', () => {
  before(() => {

    


  })
  beforeEach(() => {
    cy.visit('/auth/login')

  })
  it('Invalid credentials', () => {
    login.assertLoginPage()
    login.typeUserName(loginData.invalidUserName)
    login.typePassword()
    login.clickLogin()
    login.invalidCredentialsMessage()

  })

  it('Empty email', () => {
    login.typePassword()
    login.clickLogin()
    login.requiredField()
  })

  it('Login in application', () => {
    login.typeUserName(loginData.UserName)
    login.typePassword()
    login.clickLogin()
    login.assertDashboard()

  })
  

  afterEach(() => {
  })
})
import userData from '../fixtures/users/userData.json'

describe('Orange HRM Tests', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: "[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    dashboardGrid: " .orangehrm-dashboard-grid",
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-dd-mm']",
    submitButton: "[type='submit']",
    dropDownButton: ".oxd-select-text-input"


  }

  it.only('User Info Update sucesso', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('@umapsimigrante')
    cy.get(selectorsList.lastNameField).clear().type('@umapsimigrante')
    cy.get(selectorsList.genericField).eq(6).clear().type('2025-19-08')
    cy.get(selectorsList.genericField).eq(5).clear().type(999995)
    //cy.get(selectorsList.genericField).eq(6).clear().type(999995)
    cy.get(selectorsList.genericField).eq(7).clear().type('1984-24-12')
    cy.get(selectorsList.genericField).eq(8).clear().type('teste Rafa')

    cy.get(selectorsList.dropDownButton).eq(0).click()
    cy.get('.oxd-select-dropdown').contains('Brazilian').click({force: true})

    cy.get(selectorsList.dropDownButton).eq(1).click({force: true})
    cy.get('.oxd-select-dropdown').contains('Married').click({force: true})

    cy.get(selectorsList.dropDownButton).eq(2).click({force: true})
    cy.get('.oxd-select-dropdown').contains('B+').click({force: true})

    cy.get(selectorsList.submitButton).eq(0).click({force: true})
    cy.get('body').should('contain', 'Successfully Updated')




    

  })

it('login - fail', () => {
    cy.visit('auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
})
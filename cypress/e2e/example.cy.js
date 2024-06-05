// dette er et eksempel på en test, der tjekker om en side kan loades
describe('Frontend loads', () => {
  it('visits the app', () => {
    cy.request('http://localhost:5173').then((response) => {
      expect(response.status).to.eq(200)
    })
  })
})

// dette er et eksempel på en test, som tjekker om en side indeholder en bestemt tekst i et h1 tag
describe('check h1 tag on app has "You did it!"', () => {
  it('visits the app', () => {
    cy.visit('http://localhost:5173')
    cy.get('h1').should('have.text', 'You did it!')
  })
})

// dette er et eksempel på en test, som tjekker om en side indeholder en bestemt klasse
describe('Check if button exists', () => {
  it('visits the app', () => {
    cy.visit('http://localhost:5173') // replace with your app's URL
    cy.get('.myButton').should('be.visible')
  })
})

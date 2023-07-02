beforeEach(()=>{
  cy.log('Message from general beforeEach hook')
})

describe('method before', ()=>{

  // it('Test 1',{
  //   viewportHeight: 800,
  //   viewportWidth: 600,
  // }, () => {
  
  before(()=>{
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
  })

  it('Test 1', () => {
    cy.get('[title="Layout"]').click();
    cy.get('[title="Stepper"]').click();
  })
  
  it('Test 2', () => { 
    cy.get('[title="Layout"]').click();
    cy.get('[title="List"]').click();
  })


})


describe('method beforeEach', ()=>{
  
  before(()=>{
    cy.log('Message from before hook')
  })

  beforeEach(()=>{
    cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
    cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
    cy.get('[title="Layout"]').click();
  })

  it('Test 1', () => {
    cy.get('[title="Stepper"]').click();
  })
  
  it('Test 2', () => { 
    cy.get('[title="List"]').click();
  })


})
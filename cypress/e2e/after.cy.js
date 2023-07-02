beforeEach(()=>{
  cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
  cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
  cy.get('[title="Layout"]').click();
})

describe('method after', ()=>{

  after(()=>{
    cy.log('**Log from after hook**')
  })

  // it('Test 1', { retries: 2}, () => { //повторні спроби для теста
  //   cy.get('[title="Stepper1"]').click();
  // })
  
  it('Test 1', () => { 
    cy.get('[title="Stepper1"]').click();
  })

  it('Test 2', () => { 
    cy.get('[title="List"]').click();
  })

})


describe('method afterEach', ()=>{

  afterEach(()=>{
    cy.log('**Log from afterEach hook**')
  })

  it('Test 1', () => {
    cy.get('[title="Stepper"]').click();
  })
  
  it('Test 2', () => { 
    cy.get('[title="List1"]').click();
  })

})
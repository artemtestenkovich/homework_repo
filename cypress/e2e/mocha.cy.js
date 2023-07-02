let someVar3 = "Ця змінна доступна для усіх describe по всьому файлу"; 

describe('Positive scenarios', ()=>{

  let someVar2 = "Ця змінна доступна для усіх тестів в межах describe"; 

  it('Test 1', () => {
    let someVar = 123; 
    cy.visit('https://google.com')
    cy.log(someVar) 
    cy.log(someVar2) 
    cy.log(someVar3) 
  })
  
  it('Test 2', () => { 
    cy.visit('https://google.com') 
    //cy.log(someVar) // not reachable
    cy.log(someVar2) 
  })
  
  it('Test 3', () => { 
    cy.visit('https://google.com') 
    cy.log(someVar2)

    someVar3 = 'New text from Test 3'
  })

})

describe('Negative scenarios', ()=>{

  it('Test 1', () => { 
    cy.visit('https://google.com') 
    //cy.log(someVar2) // not reachable
    cy.log(someVar3) 
  })
  
  it('Test 2', () => { 
    cy.visit('https://google.com') 
  })
  
  it('Test 3', () => { // it.only - запускає тільки цей тест
    cy.visit('https://google.com') 
  })

})
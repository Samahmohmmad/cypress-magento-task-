/// <reference types= "cypress" />
describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://magento.softwaretestingboard.com/')
  cy.wait(3000)

  let itemSelect=["Women","Men","Gear"]
  let RandomSelect= Math.floor(Math.random()*itemSelect.length)
  cy.log(RandomSelect+"@@@@@@@@@@@@@@@@@@")
  cy.wait(3000)
  cy.contains(itemSelect[RandomSelect]).click()
  cy.wait(3000)

  cy.get("div .products-grid.grid").find('div.product-item-info').eq(0).click()



  //cy.get('div .product-item-info')
  
  
  })
})
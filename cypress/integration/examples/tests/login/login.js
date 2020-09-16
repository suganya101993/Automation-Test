describe('TestSuite',function()
{
    beforeEach('Load',function (){
        cy.fixture("keywords").then((data)=>{
         this.key = data
         })
    })
    it('verify the Page title',function (){
        cy.visit('https://www.costa.co.uk/');
        cy.title().should('eq','The Nation\'s Favourite Coffee Shop | Costa Coffee')
    })

    it('Navigate to CoffeeClub Page',function (){
        cy.get('[aria-label="Account Menu"]').click();
        cy.get('[data-cy="iconsbar__signinlink"]').click();
        cy.title().should('eq','Login | Coffee Club | Costa Coffee')
    })

    it('Negative Login into CoffeeClub',function (){
        cy.get('#longEmail').type(this.key.username);
        cy.get('#oldPassword').type(this.key.password);
        cy.get('[type="submit"]').click();
        cy.get('.popupContainer').should('be.visible');
    })

    it('Positive Login should be able to login successfully',function (){
        cy.get('[data-cy="close__CTA"]').click();
        cy.get('#longEmail').clear().type(this.key.username1);
        cy.get('#oldPassword').clear().type(this.key.password1);
        cy.get('[type="submit"]').click();
        cy.title().should('eq','Account management | Coffee Club | Costa Coffee')
    })
    it('Navigating to Registration page',function (){
        cy.get('[aria-label="Account Menu"]').click();
        cy.get('[data-cy="iconsbar__signinlink"]').click();
        cy.get('[data-cy="register__CTA"]').click();
        cy.title().should('eq','Register | Coffee Club | Costa Coffee')
    })
    it('Navigating to Forgot password screen page',function (){
        cy.go('back')
        cy.get('[data-cy="forgottenpassword__CTA"]').click();
        cy.title().should('eq','Forgotten password | Coffee Club | Costa Coffee')
    })
})


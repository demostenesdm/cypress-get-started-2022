

context('todoMVC', ()=>{
    it('home', ()=>{
        cy.visit('https://todomvc-app-for-testing.surge.sh/');
        cy.get('.new-todo').type('Estudar Automação com Cypress{enter}');
        cy.get('.new-todo').type('Cortar o cabelo{enter}');
        cy.get('.new-todo').type('Arrumar o box{enter}');

      //  cy.get('ul.todo-list').should('have.length', 3);
        cy.get('.todo-count').should('have.text', '3 items left');
    })
})
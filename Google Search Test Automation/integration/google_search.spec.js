// cypress/integration/google_search_spec.js

describe('Google Search Tests', () => {
    it('Valid Search', () => {
      const searchQuery = 'Cypress Testing';
      cy.visit('https://www.google.com');
      cy.get('input[name="q"]').type(searchQuery).type('{enter}');
      cy.get('div.g').should('have.length.greaterThan', 0);
    });
  
    it('Search Result Navigation', () => {
      const searchQuery = 'Cypress Testing';
      cy.visit('https://www.google.com');
      cy.get('input[name="q"]').type(searchQuery).type('{enter}');
      cy.get('div.g a').first().invoke('attr', 'href').then((resultUrl) => {
        cy.get('div.g a').first().click();
        cy.url().should('eq', resultUrl); 
      });
    });
  });
  
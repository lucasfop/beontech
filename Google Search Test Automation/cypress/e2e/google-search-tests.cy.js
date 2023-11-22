describe('Google Search Tests', () => {
  it('Valid Search', () => {
    const searchQuery = 'beon.tech engineering';
    cy.visit('https://www.google.com.br');
    cy.get('#APjFqb').should('be.visible').type(searchQuery).type('{enter}');
    cy.get('div.g').should('have.length.greaterThan', 0);
  });

  it('Search Result Navigation',() => {
    const searchQuery = 'beon.tech engineering';
    cy.visit('https://www.google.com');
    cy.get('#APjFqb').type(searchQuery).type('{enter}');
    cy.get('div.g a').first().invoke('attr', 'href').then((resultUrl) => {
      cy.url().then((url) => {
        cy.log('Current URL is: ' + url)
      })
      cy.get('div.g a').first().click();
      cy.on("url:changed", (newUrl) => {
        expect(newUrl).to.eq(resultUrl)
      })
    });
  });
});
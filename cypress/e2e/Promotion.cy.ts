describe('Promotion', () => {

	it('should add a promotion to the history', () => {
    cy.visit('/promotion');
    cy.get('textarea[aria-label="promotion input"]').type('Test promotion message');
    cy.get('button').contains('Send Promotion').click();

    cy.get('.MuiDataGrid-row').should('have.length', 1); // Assuming it starts empty

    cy.get('.MuiDataGrid-row').first().within(() => {
      cy.get('.MuiDataGrid-cell').eq(1).should('contain.text', 'Test promotion message');
    });
  });

  it('should not add an empty promotion message to the history', () => {
    cy.visit('/promotion');
    cy.get('button').contains('Send Promotion').click();
    cy.get('.MuiDataGrid-row').should('have.length', 0); // Assuming it starts empty
  });

})

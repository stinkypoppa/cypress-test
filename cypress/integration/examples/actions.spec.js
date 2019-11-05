/// <reference types="Cypress" />

describe('Test submit no name', function() {
  it('Test submit without name filled', function() {
    cy.visit('http://localhost:8080');
    cy.get('input:first').should('have.attr', 'placeholder', 'Name: ')
    cy.get('input:last').should('have.attr', 'placeholder', 'Address: ')
    cy.get('button').click();
    cy.contains("Name is missing");
    
  })
})

describe('Test submit no address', function() {
  it('Test submit without address filled', function() {
    cy.visit('http://localhost:8080');
    cy.get('input:first').should('have.attr', 'placeholder', 'Name: ').type("Janus Skallgård");
    cy.get('button').click();
    cy.contains("Address is missing");
    
  })
})

describe('Test submit with name and address', function() {
  it('Test submit without address filled', function() {
    cy.visit('http://localhost:8080');
    cy.get('input:first').type("Janus Skallgård");
    cy.get('input:last').type("Janus Skallgård");
    cy.get('button').click();
    cy.contains("All ok");
    
  })
})
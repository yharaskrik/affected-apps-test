import { getGreeting } from '../support/app.po';

describe('affected', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to affected!');
  });
});

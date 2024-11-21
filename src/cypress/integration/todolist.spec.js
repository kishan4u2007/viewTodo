// describe('To-Do List', () => {
//     beforeEach(() => {
//       cy.visit('http://localhost:5173'); // Change URL if necessary
//     });
  
//     it('should allow adding a new task', () => {
//       cy.get('input').type('New Task');
//       cy.get('select').select('2');
//       cy.contains('button', 'Save').click();
  
//       cy.contains('New Task (Moderate)').should('exist');
//     });
  
//     it('should allow editing an existing task', () => {
//       cy.get('input').type('New Task');
//       cy.get('select').select('2');
//       cy.contains('button', 'Save').click();
  
//       cy.contains('button', 'Edit').click();
//       cy.get('input').clear().type('Updated Task');
//       cy.contains('button', 'Save').click();
  
//       cy.contains('Updated Task (Moderate)').should('exist');
//     });
  
//     it('should allow deleting a task', () => {
//       cy.get('input').type('New Task');
//       cy.get('select').select('2');
//       cy.contains('button', 'Save').click();
  
//       cy.contains('button', 'Delete').click();
//       cy.contains('New Task').should('not.exist');
//     });
  
//     it('should allow clearing all tasks', () => {
//       cy.get('input').type('Task 1');
//       cy.get('select').select('1');
//       cy.contains('button', 'Save').click();
  
//       cy.get('input').type('Task 2');
//       cy.get('select').select('2');
//       cy.contains('button', 'Save').click();
  
//       cy.contains('button', 'Clear All Tasks').click();
//       cy.contains('Task 1').should('not.exist');
//       cy.contains('Task 2').should('not.exist');
//     });
//   });
  
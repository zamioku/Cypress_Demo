import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { TodoPage } from "../../page-objects/todo-page";

const todoPage = new TodoPage();

// GIVENS

Given('I am on the ToDoMVC page', () => {
  todoPage.goTo()
})

// WHENS

When('I add some items to my list:', (items) => {
  let list = items.raw()
  for (let i = 0; i < list.length; i++) {
    todoPage.addTodo(list[i])
  };
})

When('I click on the {string} filter option', (filter) => {
  switch (filter) {
    case 'All':
      todoPage.showAllTodos();
      break;
    case 'Active':
      todoPage.showOnlyActiveTodos();
      break;
    case 'Completed':
      todoPage.showOnlyCompletedTodos();
      break;
    default:
      Cypress.log('That filter does not exist!');
      break;
  }
})

When('I add a new TODO as {string}', (todoText) => {
  todoPage.addTodo(todoText)
})

When('I toggle the first TODO', () => {
  todoPage.toggleTodo(0)
})

// THENS

Then('I see {string} in the title', (title) => {
  cy.title().should('contain', title)
})

Then('I can see only {int} item(s) on my list', (number) => {
  todoPage.validateNumberOfTodosShown(number)
})
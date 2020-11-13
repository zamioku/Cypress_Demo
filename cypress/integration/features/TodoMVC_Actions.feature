@e2e @ui
Feature: TodoMVC actions

  As a user
  I want to add items to my ToDo list
  So that I can mark them as completed.

  Background: Navigating to the app page
    Given I am on the ToDoMVC page

  @actions
  Scenario: Adding a new TODO to the list
    When I add a new TODO as "Go fishing"
    Then I see "TodoMVC" in the title

  @actions
  Scenario: Toggling a TODO
    When I add a new TODO as "Walk the dog"
    Then I see "TodoMVC" in the title

  @actions
  Scenario: Clearing completed TODOs
    When I add a new TODO as "Eat dinner"
    Then I see "TodoMVC" in the title
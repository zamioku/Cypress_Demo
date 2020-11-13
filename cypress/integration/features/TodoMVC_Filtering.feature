@e2e @ui
Feature: TodoMVC filtering

  As a user
  I want to filter the items in my TODO list.

  Background: Navigating to the app page
    Given I am on the ToDoMVC page
    And I add some items to my list:
      | Go fishing   |
      | Walk the dog |
      | Eat dinner   |    
    And I toggle the first TODO

  @actions
  Scenario: Filtering "Active" TODOs
    When I click on the "Active" filter option
    Then I can see only 2 items on my list

  @actions
  Scenario: Filter "Completed" TODOs
    When I click on the "Completed" filter option
    Then I can see only 1 item on my list

  @actions
  Scenario: Filter "All" TODOs
    When I click on the "All" filter option
    Then I can see only 3 items on my list